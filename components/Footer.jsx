export default function Footer() {
  return (
    <footer>
      <div className="con">
        <div className="footer-row">
          <div>
            <div className="footer-brand">MCG</div>
            <div className="footer-sub">Milo Consulting Group, LLC</div>
          </div>
          <div className="footer-email">
            <a href="mailto:info@miloconsultinggrp.com">info@miloconsultinggrp.com</a>
          </div>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/theanamilo?igsh=MTRkNHJrZHl5bWtkNQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/milo-consulting-group/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="4" ry="4"/>
                <line x1="8" y1="11" x2="8" y2="16"/>
                <line x1="8" y1="8" x2="8" y2="8.5"/>
                <path d="M12 16v-5M12 11c0-1 .9-2 2-2s2 1 2 2v5"/>
              </svg>
            </a>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
