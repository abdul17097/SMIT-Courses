import "./Header.css";

const Header = (data) => {
  console.log(data);

  return (
    <div className="">
      <h1 className="text-[red] text-2xl  ">Header</h1>;<p>{name}</p>
      <p>ID:{data?.users?.id}</p>
      {/* <p>Name:{data.users.name}</p>
      <p>Gender:{data.users.gender}</p>
      <p>Age:{data.users.age}</p> */}
    </div>
  );
};

export default Header;
