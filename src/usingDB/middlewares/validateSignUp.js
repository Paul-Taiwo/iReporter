
class Validate {
  static validate(req, res, next) {
    const {
      firstname,
      lastname,
      othernames,
      email,
      password,
      username,
    } = req.body;

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(String(email).toLowerCase()) === false) {
      return res.status(400).json({
        status: 400,
        error: 'Please provide a valid email address',
      });
    }

    (() => {
      switch (true) {
        case !firstname || !lastname || !othernames:
          return res.status(400).json({
            status: 400,
            message: 'Name fields cannot be empty',
          });
        case firstname.trim().length <= 2
        || lastname.trim().length <= 2
        || othernames.trim().length <= 2:
          return res.status(400).json({
            status: 400,
            message: 'Name fields cannot be less than 2 characters',
          });
        case !username:
          return res.status(400).json({
            status: 400,
            message: 'Please input a username',
          });
        case !password:
          return res.status(400).json({
            status: 400,
            message: 'Password field cannot be empty',
          });
        case password.trim().length < 8:
          return res.status(400).json({
            status: 400,
            message: 'Password cannot be less than 8 characters',
          });

        default:
          break;
      }

      return false;
    })();

    return next();
  }
}

export default Validate;
