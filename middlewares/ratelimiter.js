const rateLimit = require("express-rate-limit");

const createLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: { error: "You reached the limit of max notes creation in a minute" },
});

module.exports = createLimiter;
