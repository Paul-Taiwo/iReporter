import models from '../models';

const { Record } = models;

class Records {
  static createRecord(req, res) {
    const {
      name, createdBy, type, images, videos, location, comment,
    } = req.body;

    const create = Record.createIncidence({
      name,
      createdBy,
      type,
      images,
      videos,
      location,
      comment,
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
    return res.status(200).json({
      status: 200,
      data: [updateRecord],
    });
  }

  static updateLocation(req, res) {
    console.log('=========>', req.params.location);
    const updateLocation = Record.updateLocation(req.params.id, req.params.location);
    return res.status(200).json({
      status: 200,
      data: [updateLocation],
    });
  }

  static delete(req, res) {
    const del = Record.delRecord(req.params.id);
    return res.status(204).json({
      status: 204,
      data: [del],
    });
  }
}

export default Records;
