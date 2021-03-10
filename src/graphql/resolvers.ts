const person = {
  name: 'heeyou',
  age: 28,
  gender: 'female',
};

const resolvers = {
  Query: {
    person: () => person,
  },
};

export default resolvers;
