import { google } from 'googleapis'

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

function normalizeKey(raw) {
  // Strip surrounding quotes if accidentally included
  let key = raw.trim().replace(/^["']|["']$/g, '')
  // Convert literal \n (two chars) to real newlines
  key = key.replace(/\\n/g, '\n')
  return key
}

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ?? ''
  const raw   = process.env.GOOGLE_PRIVATE_KEY ?? ''
  const private_key = normalizeKey(raw)

  console.log('[auth] email preview:', email.slice(0, 30))
  console.log('[auth] key length:', private_key.length)
  console.log('[auth] key lines:', private_key.split('\n').length)
  console.log('[auth] first line:', private_key.split('\n')[0])
  console.log('[auth] last line:', private_key.split('\n').filter(Boolean).at(-1))

  return new google.auth.GoogleAuth({
    credentials: { client_email: email, private_key },
    scopes: SCOPES,
  })
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { firstName, lastName, company, email, role, stage, interest, hispanic, context } = body

    if (!firstName || !lastName || !email) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const auth = getAuth()
    const sheets = google.sheets({ version: 'v4', auth })
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:J',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, firstName, lastName, email, company, role, stage, interest, hispanic, context]],
      },
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Google Sheets error:', err?.message ?? err)
    return Response.json({ error: 'Failed to save submission' }, { status: 500 })
  }
}
