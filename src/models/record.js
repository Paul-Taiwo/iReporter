const allRecords = [];

const createIncidence = (data = null) => {
  if (!data) {
    throw new Error('Please provide an object');
  }

  const dataToCreate = {
    id: allRecords.length + 1,
    ...data,
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

const update = (id, data) => {
  const index = allRecords.indexOf(findOne(id));

  allRecords[index].name = data.name;
  allRecords[index].images = data.images;
  allRecords[index].videos = data.videos;
  allRecords[index].message = new Date();
  allRecords[index].updatedAt = new Date();

  return allRecords[index];
};

const updateLocation = (id, data) => {
  const index2 = allRecords.indexOf(findOne(id));

  allRecords[index2].location = data;
  allRecords[index2].message = 'Updated location';

  console.log(data);
  return allRecords[index2];
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
  update,
  updateLocation,
  delRecord,
};

export default {
  createIncidence,
  findAll,
  findOne,
  update,
  updateLocation,
  delRecord,
};
