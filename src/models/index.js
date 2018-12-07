import {
  createIncidence, findAll, findOne, delRecord, updateLocation, updateComment, allRecords,
} from './record';

const models = {
  Record: {
    createIncidence,
    findAll,
    findOne,
    updateLocation,
    updateComment,
    delRecord,
    allRecords,
  },
};

export default models;
