import models from '../models';

const { Record } = models;

class Records {
  static createRecord(req, res) {
    const {
      name, type, images, videos, geolocation,
    } = req.body;

    const create = Record.create({
      name,
      type,
      images,
      videos,
      geolocation,
    });


    if (Object.keys(create).length < 1) {
      return res.status(500).json({
        status: 500,
        error: 'Unexpected server error occured.',
      });
    }

    return res.status(201).json({
      status: 201,
      data: [create],
    });
  }

  static getAll(req, res) {
    const findAll = Record.findAll();
    return res.status(201).json({
      status: 201,
      data: findAll,
    });
  }

  static getOne(req, res) {
    const findOne = Record.findOne(req.params.id);
    return res.status(201).json({
      status: 201,
      data: [findOne],
    });
  }

  static update(req, res) {
    
    const updateRecord = Record.update(req.params.id, req.body);
    return res.status(201).json({
      status: 201,
      data: [updateRecord],
    });
  }
}

export default Records;
