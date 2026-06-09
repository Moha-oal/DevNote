# Security Report — DevNote

**Date:** June 9, 2026  
**Scope:** Full review of `src/` and related project configuration  
**Application:** Vite + React static marketing site with i18n and contact form

---

## Executive Summary

The codebase is a client-side-only landing page with **no API keys, backend, or authentication**. No critical vulnerabilities were found. Several **low-severity** hygiene issues were identified and fixed. The site follows React’s default XSS protections; no `dangerouslySetInnerHTML` usage was found.

| Category                         | Status before audit      | Action taken                          |
|----------------------------------|--------------------------|---------------------------------------|
| Exposed secrets / API keys       | ✅ None found            | Preventive `.gitignore` update        |
| XSS (React components)           | ✅ Low risk              | Documented i18n escaping policy       |
| `dangerouslySetInnerHTML`        | ✅ Not used              | No change needed                      |
| External links (`noopener`)      | ⚠️ Placeholder link      | Fixed — secure `ExternalLink` helper  |
| Form input validation            | ⚠️ HTML5 `required` only | Fixed — full client-side validation   |
| Hardcoded sensitive data         | ✅ None (public contact) | Centralized in `src/config/site.js`   |

---

## Findings & Resolutions

### 1. Exposed API keys, tokens, or secrets

**Finding:** No API keys, tokens, passwords, or private credentials were found in `src/` or committed project files. No `.env` files are present. Dependencies contain only the unrelated npm package `js-tokens`.

**Risk:** None.

**Fix:** Added `.env` and `.env.*` to `.gitignore` (with `!.env.example` exception) to prevent accidental commit of future secrets.

---

### 2. XSS vulnerabilities in React components

**Finding:** All user-visible strings are rendered through React JSX (`{t(...)}`, `{formData.*}` in controlled inputs). React escapes text content by default. Form values are **not** echoed back into the DOM as HTML. Translation files are static JSON controlled by developers.

**Risk:** Low.

**Related:** `src/i18n.js` sets `interpolation.escapeValue: false`, which is the [recommended setting for react-i18next](https://www.i18next.com/translation-function/interpolation#unescape) because React already escapes output. This would become a risk only if translations included user input or were used with `dangerouslySetInnerHTML`.

**Fix:** Added an inline comment in `src/i18n.js` documenting that translations must remain static and must not be paired with `dangerouslySetInnerHTML`.

---

### 3. Unsafe use of `dangerouslySetInnerHTML`

**Finding:** No instances in the project.

**Risk:** None.

**Fix:** None required.

---

### 4. Insecure external links without `rel="noopener noreferrer"`

**Finding:** The Instagram social icon used `href="#"`, which is not an external link but is a poor pattern (empty hash navigation). No `target="_blank"` links existed, so tabnabbing (`window.opener`) was not currently exploitable.

**Risk:** Low (latent — would become medium if a real external URL were added without `rel`).

**Fix:**
- Created `src/components/ExternalLink.jsx` that always sets `target="_blank"` and `rel="noopener noreferrer"`.
- Instagram icon now renders only when `SOCIAL_INSTAGRAM_URL` is set in `src/config/site.js`; otherwise a non-interactive placeholder is shown.
- When a URL is configured, it uses `ExternalLink` automatically.

---

### 5. Missing input validation in forms

**Finding:** The contact form relied solely on HTML5 `required` with no length limits, no trimming, no whitelist check on `websiteType`, and no rejection of control characters. Data was accepted without validation beyond the browser.

**Risk:** Low for this static site (no server submission yet), but poor practice before connecting a backend.

**Fix:**
- Added `src/utils/validateContactForm.js` with:
  - Required field checks
  - Min/max length (name & business: 2–100, overview: 10–2000)
  - Whitelist validation for `websiteType`
  - Control-character rejection
  - `sanitizeContactForm()` that trims all text fields
- Updated the contact form with `maxLength`, `htmlFor`/`id` pairs, `aria-invalid`, error messages, and `noValidate` so custom validation runs consistently.
- Added validation error strings to `en.json` and `ar.json`.

---

### 6. Hardcoded sensitive data

**Finding:** Public contact details were hardcoded in `App.jsx`:
- `hello@devnote.agency` (public business email — not a secret)
- `+1 (234) 567-890` (placeholder phone number)

No passwords, private keys, or internal endpoints were found.

**Risk:** None for secrets; minor maintainability concern.

**Fix:** Moved contact details to `src/config/site.js` with clear comments that they are public, client-safe values.

---

### 7. Additional observations (informational)

| Item | Notes |
|------|-------|
| **No backend / CSRF** | Form is client-only; no data is sent to a server. Server-side validation will be required when an API is added. |
| **No Content-Security-Policy** | `index.html` loads Google Fonts from a CDN. Consider adding CSP headers at the hosting layer. |
| **Navbar `href="#"`** | Replaced with `href="#top"` and `id="top"` on the root wrapper to avoid empty-hash navigation quirks. |
| **`mailto:` / `tel:` links** | Do not require `rel="noopener noreferrer"`; left unchanged. |
| **Third-party fonts** | Loaded from `fonts.googleapis.com` / `fonts.gstatic.com`. Supply-chain risk is standard for CDN fonts; self-hosting is optional hardening. |

---

## Files Changed

| File | Change |
|------|--------|
| `src/App.jsx` | Form validation, secure external links, config imports, `#top` anchor |
| `src/config/site.js` | **New** — public contact & social URL config |
| `src/utils/validateContactForm.js` | **New** — validation & sanitization |
| `src/components/ExternalLink.jsx` | **New** — safe `target="_blank"` wrapper |
| `src/i18n.js` | Documented `escapeValue: false` rationale |
| `src/locales/en.json` | Form validation error messages |
| `src/locales/ar.json` | Form validation error messages (Arabic) |
| `.gitignore` | Ignore `.env` files |
| `SECURITY_REPORT.md` | **New** — this report |

---

## Recommendations for Future Work

1. **Backend integration:** When the contact form posts to an API, add server-side validation, rate limiting, and CSRF protection (or use a form service with built-in spam protection).
2. **CSP headers:** Configure `Content-Security-Policy` on your host (e.g. Netlify, Vercel, nginx) to restrict script and style sources.
3. **Instagram URL:** Set `SOCIAL_INSTAGRAM_URL` in `src/config/site.js` when the profile is ready.
4. **Environment variables:** Store any future API endpoints or public keys in `VITE_*` env vars — never commit real secrets; use server-side proxies for private keys.

---

## Conclusion

The project had a **clean security baseline** appropriate for a static React marketing site. Fixes focused on **defense in depth**: form validation, safe external link patterns, centralized public config, and secret-exclusion in version control. No critical or high-severity vulnerabilities remain in the audited scope.
