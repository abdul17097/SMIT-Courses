const {
  id: userID,
  name,
  gender,
  nationality,
  ...rest
} = {
  id: 1,
  name: "test",
  gender: "male",
  nationality: "pakistani",
};

const { id: productId } = {
  id: 2,
};

console.log(id, name, gender, nationality);

// console.log(userDetals);

// let id = userDetals.id;
// let name = userDetals.name;

// console.log(id, name);
