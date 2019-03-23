import db from '../db';

class Record {
  static createRecord(req, res) {
    const {
      createdBy,
      type,
      location,
      status,
      images,
      videos,
      comment,
    } = req.body;

    const query = 'INSERT INTO records(id, "createdOn", "createdBy", type, location, status, images, videos, comment) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id';
    const record = [
      10004,
      new Date().toISOString(),
      createdBy,
      type,
      location,
      status,
      images,
      videos,
      comment,
    ];
    db.query(query, record)
      .then((result) => {
        res.status(201).json({
          status: 201,
          data: [{
            id: result.rows[0].id,
            message: 'Created intervention record',
          }],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static getAll() {
    db.query('SELECT * FROM records WHERE "createdBy" = 10001');
  }


  static getOne() {

  }

  static updateRedFlag() {

  }

  static updateIntStatus() {

  }

  static editLocation() {

  }

  static editComment() {

  }

  static deleteRecord() {

  }
}

export default Record;
