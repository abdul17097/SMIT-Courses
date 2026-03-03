import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState(["Waqas", "wahab", "Shakir", "Shahid"]);
  const [userDetail, setUserDetail] = useState({
    id: 1,
    name: "rizwan",
    grade: "A",
  });

  let handleAddUser = () => {
    setUsers([...users, "Awais", "Hadeed"]);
  };
  console.log(users);

  let handleUdateUserDetail = () => {
    // userDetail.name = "Rizwan Ullah";
    // userDetail.age = 24;
    setUserDetail({ ...userDetail, age: 24, name: "rizwan" });
  };
  console.log(userDetail);

  return (
    <div>
      <h1>Users Component</h1>
      <p>Array Length: {users.length}</p>
      <button onClick={handleAddUser}>Add New User</button>

      <div className="border rounded-2xl p-5">
        <h2 className="font-extrabold">User Details</h2>
        <p>Id: {userDetail.id}</p>
        <p>Name: {userDetail.name}</p>
        <p>Grade: {userDetail.grade}</p>
        <p>Age: {userDetail.age}</p>
      </div>
      <button
        onClick={handleUdateUserDetail}
        className="border p-2 bg-amber-100 rounded-2xl mt-3 cursor-pointer"
      >
        Update User Detail
      </button>
    </div>
  );
};

export default Users;
