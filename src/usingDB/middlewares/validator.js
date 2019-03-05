
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
            message: 'Name fields cannot be less than two characters',
          });
        case !username:
          return res.status(400).json({
            status: 400,
            message: 'Please input a username',
          });
        case !email:
          return res.status(400).json({
            status: 400,
            message: 'Please input an email',
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
