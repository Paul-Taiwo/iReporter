import models from '../models';

const { Record } = models;

class Records {
  static createRecord(req, res) {
    let name; let
      location;

    if (req.body.name.match(/\s/g)) {
      name = req.body.name.replace(/\s/g, '');
    }

    if (req.body.location.match(/^\s+|\s+$/g)) {
      location = req.body.location.replace(/^\s+|\s+$/g, '');
    } else {
      location = req.body.location;
    }

    const {
      createdBy, images, videos, comment,
    } = req.body;

    const create = Record.createIncidence({
      name,
      createdBy,
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
    return res.status(200).json({
      status: 200,
      data: findAll,
    });
  }

  static getOne(req, res) {
    const findOne = Record.findOne(req.params.id);
    return res.status(200).json({
      status: 200,
      data: [findOne],
    });
  }

  // static update(req, res) {
  //   const updateRecord = Record.update(req.params.id, req.body);
  //   return res.status(200).json({
  //     status: 200,
  //     data: [updateRecord],
  //   });
  // }

  static updateLocation(req, res) {
    const updateLocation = Record.updateLocation(req.params.id, req.body.location);

    return res.status(200).json({
      status: 200,
      data: [updateLocation],
    });
  }

  static delete(req, res) {
    Record.delRecord(req.params.id);
    return res.status(200).json({
      status: 200,
      message: 'red-flag record has been deleted',
    });
  }
}

export default Records;
