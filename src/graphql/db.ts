export const people = [
  {
    id: 1,
    name: 'heeyou',
    age: 28,
    gender: 'female',
  },
  {
    id: 2,
    name: 'hee',
    age: 18,
    gender: 'male',
  },
  {
    id: 3,
    name: 'you',
    age: 25,
    gender: 'female',
  },
  {
    id: 4,
    name: 'hemin',
    age: 28,
    gender: 'female',
  },
];

export const getById = (id: number) => {
  const filterdPeople = people.filter((person) => id === person.id);

  return filterdPeople[0];
};
