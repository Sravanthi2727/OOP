// utils/authRequired.js
module.exports = function authRequired(req, res, next) {
  if (req.session && req.session.user && req.session.user.email) {
    if (req.session.user.isVerified) return next();
    // For XHR/API requests, return JSON 403. For HTML pages, redirect or render a page.
    if (req.accepts('html')) {
      return res.redirect('/?verifyRequired=1');
    }
    return res.status(403).json({ message: 'Account not verified' });
  }
  if (req.accepts('html')) {
    return res.redirect('/?loginRequired=1');
  }
  return res.status(401).json({ message: 'Login required' });
};
