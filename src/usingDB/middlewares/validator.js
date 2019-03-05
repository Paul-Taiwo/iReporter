
class Validate {
  static validate(req, res, next) {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || firstname.trim().length <= 2 || !lastname || lastname.trim().length <= 2 || (email === undefined || email.trim().length < 1) || (password === undefined || password.trim().length < 1)) {
      return res.status(400).json({
        status: 400,
        error: 'Provide a valid name',
      });
    }



    return next();
  }
}

export default Validate;
