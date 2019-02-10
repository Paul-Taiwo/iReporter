import models from '../../models/index';
import { allRecords } from '../../models/record';

const { Record } = models;

class RecordsValidate {
  static createRecord(req, res, next) {
    const {
      name, location, comment,
    } = req.body;


    if (!name || name.length < 1) {
      return res.status(400).json({
        status: 400,
        error: 'Please provide a valid record name',
      });
    }

    if (!location || location.length < 2) {
      return res.status(400).json({
        status: 400,
        error: 'Please provide a valid location',
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
    const parse = parseInt(req.params.id, 10);
    // console.log(typeof parseInt(req.params.id, 10));
    allRecords.forEach((item) => {
      if (parse === item.id) {
        console.log('Yea');
      }
    });
    return next();
  }
}

export default RecordsValidate;
