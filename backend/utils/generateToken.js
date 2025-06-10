import jwt from 'jsonwebtoken'

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  })

  // Set JWT as an HTTP-Only cookie
  // sameSite: 'strict', // Prevent CSRF attacks
  //  The response object now has a "Set-Cookie" header ready to send
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
    sameSite: process.env.NODE_ENV === 'development' ? 'lax' : 'none', 
    maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
  })
}

export default generateToken

// WHAT EACH SETTING MEANS:

// 1. httpOnly: true
// ✅ SECURE: Cookie can only be accessed by the server
// ❌ BLOCKS: document.cookie (JavaScript cannot steal it)
// 🛡️ PREVENTS: XSS attacks from stealing your JWT

// 2. secure: process.env.NODE_ENV !== 'development'
// Development: secure = false (allows HTTP localhost)
// Production: secure = true (requires HTTPS)
// 🛡️ ENSURES: Cookie only sent over encrypted connections in production

// 3. sameSite: 'lax' (dev) or 'none' (prod)
// Development 'lax': Allows same-site requests + some cross-site
// Production 'none': Allows cross-origin requests (vercel.app → onrender.com)
// 🛡️ BALANCES: Security vs functionality for different environments

// 4. maxAge: 60 * 60 * 1000 (1 hour)
// Cookie automatically expires after 1 hour
// 🛡️ LIMITS: How long a stolen cookie could be misused

// ---------------------

// WHAT httpOnly ALLOWS:
// ✅ Browser automatically sends cookie with requests
// ✅ Server can read cookie via req.cookies.jwt
// ✅ Server can set cookie via res.cookie()
// ✅ Works on ANY protocol: HTTP, HTTPS, localhost

// WHAT httpOnly BLOCKS:
// ❌ document.cookie = "jwt=some_value"        (Can't set via JS)
// ❌ console.log(document.cookie)              (Can't read via JS)
// ❌ localStorage.setItem('jwt', token)        (Not relevant - different storage)

// -------------------------

// DURING DEVELOPMENT:
// httpOnly: true   ← Active (blocks JavaScript access)
// secure: false    ← Inactive (allows HTTP localhost)
// sameSite: 'lax'  ← Allows same-site requests

// DURING PRODUCTION:
// httpOnly: true   ← Active (blocks JavaScript access)
// secure: true     ← Active (requires HTTPS)
// sameSite: 'none' ← Allows cross-origin requests

// WORKS ON LOCALHOST BECAUSE:
// httpOnly has nothing to do with HTTP vs HTTPS
// It's about JavaScript access control
// Works identically on:
// - http://localhost:3000 ✅
// - https://production.com ✅
