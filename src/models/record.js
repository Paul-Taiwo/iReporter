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
    updatedAt: new Date(),
  };

  allRecords.push(dataToCreate);

  return dataToCreate;
};

const findAll = () => allRecords;

export {
  create,
  findAll,
};

export default {
  create,
  findAll,
};
