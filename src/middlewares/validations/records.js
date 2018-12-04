class RecordsValidate {
  static createRecord(req, res, next) {
    const {
      name, type, geolocation,
    } = req.body;

    if (!name || name.length < 1) {
      return res.status(400).json({
        status: 400,
        error: 'Please provide a valid record name',
      });
    }

    if (!type) {
      return res.status(400).json({
        status: 400,
        error: 'Please provide a valid record type',
      });
    }

    if (!geolocation || geolocation.split(' ').length < 2) {
      return res.status(400).json({
        status: 400,
        error: 'Please provide a valid location',
      });
    }

    return next();
  }
}

export default RecordsValidate;
