import models from '../../models/index';

const { Record } = models;

class RecordsValidate {
  static createRecord(req, res, next) {
    const {
      name, type, location, createdBy, comment,
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

    if (!location || location.length < 2) {
      return res.status(400).json({
        status: 400,
        error: 'Please provide a valid location',
      });
    }

    if (!createdBy || createdBy.length < 2) {
      return res.status(400).json({
        status: 400,
        error: 'Please provide your name',
      });
    }

    if (!comment) {
      return res.status(400).json({
        status: 400,
        error: 'Please comment',
      });
    }

    return next();
  }

  static checkId(req, res, next) {
    if (req.params.id > Record.allRecords.length) {
      return res.status(400).json({
        status: 400,
        error: 'Couldn\'t find a record with the ID',
      });
    }
    return next();
  }
}

export default RecordsValidate;
