import {
  createIncidence, findAll, findOne, delRecord, updateLocation, allRecords,
} from './record';

const models = {
  Record: {
    createIncidence,
    findAll,
    findOne,
    updateLocation,
    delRecord,
    allRecords,
  },
};

export default models;
