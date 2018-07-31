module.exports = (req, res, next) => {
  if (!req.user) { // if user doesn't log in
    return res.status(401).send({ error: 'You must log in!' });
  }

  next();
}
