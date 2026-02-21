import { useState } from "react";

const usersData = [
  {
    id: 1,
    name: "test",
    age: 24,
    gender: "male",
  },
  {
    id: 2,
    name: "test1",
    age: 23,
    gender: "male",
  },
];

const Users = () => {
  const [users, setUsers] = useState(usersData);

  console.log(users);

  const addNewUser = () => {
    // setUsers([...users, { id: 3, name: "test3", age: 25, gender: "female" }]);
    setUsers((prev) => [
      ...prev,
      { id: 3, name: "test3", age: 25, gender: "female" },
    ]);
  };

  return (
    <div className="">
      <button onClick={addNewUser}>Add New User</button>

      <ul>
        {users?.length
          ? users.map((user, index) => (
              <li key={user.id} className="border mb-1">
                Name: {user.name} <br />
                Age: {user.age} <br />
                Gender: {user.gender}
              </li>
            ))
          : "Not Found"}
      </ul>
    </div>
  );
};

export default Users;
