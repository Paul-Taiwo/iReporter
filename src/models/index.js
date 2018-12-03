import { create, findAll, findOne, update } from './record';

const models = {
  Record: {
    create,
    findAll,
    findOne,
    update,
  },
};

export default models;
