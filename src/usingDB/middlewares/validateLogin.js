class Validate {
  static validate(req, res, next) {
    const { email, password } = req.body;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(String(email).toLowerCase()) === false) {
      res.status(400).json({
        status: 400,
        error: 'Please provide a valid email address',
      });
    }

    if (!password || password === undefined || password.trim().length < 8) {
      res.status(400).json({
        status: 400,
        error: 'Please provide a valid password',
      });
    }
    return next();
  }
}

export default Validate;
