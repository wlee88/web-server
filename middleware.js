var middleware = {
  requireAuthentication: (req, res, next) => {
    console.log('private route hit!');
    next();
  },
  logger: (req, res, next) => {
    console.log(`${new Date().toString()} Request: ${req.method} ${req.originalUrl} `);
    next();
  }
}
module.exports = middleware;
