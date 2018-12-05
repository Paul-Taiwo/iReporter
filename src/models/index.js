import {
  createIncidence, findAll, findOne, update, delRecord, updateLocation,
} from './record';

const models = {
  Record: {
    createIncidence,
    findAll,
    findOne,
    update,
    updateLocation,
    delRecord,
  },
};

export default models;
