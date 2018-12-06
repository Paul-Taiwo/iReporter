import {
  createIncidence, findAll, findOne, update, delRecord, updateLocation, allRecords,
} from './record';

const models = {
  Record: {
    createIncidence,
    findAll,
    findOne,
    update,
    updateLocation,
    delRecord,
    allRecords,
  },
};

export default models;
