const allRecords = [];
const value = [];

const create = (data = null) => {
  if (!data) {
    throw new Error('Please provide an object');
  }

  const dataToCreate = {
    id: allRecords.length + 1,
    ...data,
    status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  allRecords.push(dataToCreate);

  return dataToCreate;
};

const findAll = () => allRecords;

const findOne = id => allRecords.find(record => record.id == id) ;

export {
  create,
  findAll,
  findOne,
};

export default {
  create,
  findAll,
  findOne,
};
