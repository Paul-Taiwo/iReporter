const allRecords = [];

const createIncidence = (data = null) => {
  if (!data) {
    throw new Error('Please provide an object');
  }

  const dataToCreate = {
    id: allRecords.length + 1,
    ...data,
    type: 'red-flag',
    status: 'pending',
    createdBy: 1223,
    createdOn: new Date(),
    updatedOn: '',
    message: 'Created red-flag record succesfully',
  };

  allRecords.push(dataToCreate);

  return dataToCreate;
};

const findAll = () => allRecords;

const findOne = id => allRecords.find(record => record.id == id);

// const update = (id, data) => {
//   const index = allRecords.indexOf(findOne(id));

//   allRecords[index].name = data.name;
//   allRecords[index].images = data.images;
//   allRecords[index].videos = data.videos;
//   allRecords[index].message = new Date();
//   allRecords[index].updatedAt = new Date();

//   return allRecords[index];
// };

const updateLocation = (id, data) => {
  const index = allRecords.indexOf(findOne(id));
  const indexedRec = allRecords[index];
  indexedRec.location = data;
  indexedRec.message = 'Updated red-flag record’s location';

  return indexedRec;
};

const updateComment = (id, data) => {
  const CommentIndex = allRecords.indexOf(findOne(id));
  const indexedRec = allRecords[CommentIndex];

  indexedRec.comment = data;
  indexedRec.message = 'Updated red-flag record’s comment';

  return indexedRec;
};

const delRecord = (id, data) => {
  const index = allRecords.indexOf(findOne(id));

  allRecords.splice(index, 1);

  return data;
};

export {
  createIncidence,
  findAll,
  findOne,
  updateLocation,
  updateComment,
  delRecord,
  allRecords,
};
