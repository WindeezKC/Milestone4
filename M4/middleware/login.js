let login = function(req, res, next) {
    if (req.session.login != null) {
      res.locals.user = req.session.login;
    } else {
      res.locals.user = null;
    }
    next();
  };
  
  module.exports = login;