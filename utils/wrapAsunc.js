//error handle try-catch alternate

module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  }
}

