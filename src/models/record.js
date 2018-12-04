const allRecords = [];

const create = (data = null) => {
  if (!data) {
    throw new Error('Please provide an object');
  }

  const dataToCreate = {
    id: allRecords.length + 1,
    ...data,
    status: 'pending',
    createdAt: new Date(),
    updatedAt: '',
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
  allRecords[index].geolocation = data.geolocation;
  allRecords[index].updatedAt = new Date();

  return allRecords[index];
};

const delRecord = (id, data) => {
  const index = allRecords.indexOf(findOne(id));

  allRecords.splice(index, 1);

  return data;
};

export {
  create,
  findAll,
  findOne,
  update,
  delRecord,
};

export default {
  create,
  findAll,
  findOne,
  update,
  delRecord,
};
