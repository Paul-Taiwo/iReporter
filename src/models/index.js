import { create, findAll, findOne, update, delRecord } from './record';

const models = {
  Record: {
    create,
    findAll,
    findOne,
    update,
    delRecord,
  },
};

export default models;
