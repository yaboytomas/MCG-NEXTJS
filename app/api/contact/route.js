import { google } from 'googleapis'

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

function getAuth() {
  const b64 = process.env.GOOGLE_CREDENTIALS_BASE64
  if (!b64) throw new Error('GOOGLE_CREDENTIALS_BASE64 env var is not set')

  const credentials = JSON.parse(Buffer.from(b64, 'base64').toString('utf8'))

  return new google.auth.GoogleAuth({
    credentials,
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
