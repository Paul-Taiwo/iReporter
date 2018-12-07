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

  allRecords[index].location = data;
  allRecords[index].message = 'Updated red-flag record’s location';

  return allRecords[index];
};

const updateComment = (id, data) => {
  const CommentIndex = allRecords.indexOf(findOne(id));

  allRecords[CommentIndex].comment = data;
  allRecords[CommentIndex].message = 'Updated red-flag record’s comment';

  return allRecords[CommentIndex];
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
