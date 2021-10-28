const rateLimit = require('express-rate-limit');

const rateLimiterUsingThirdParty = rateLimit({
  windowMs: 3 * 60 * 1000,
  max: 5,
  message: 'You have exceeded 5 Requests in 3 Seconds Limit!', 
  headers: true,
});

module.exports = {rateLimiterUsingThirdParty};