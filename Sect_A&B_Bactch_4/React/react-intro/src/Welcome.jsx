import UserDetails from "./components/UserDetails";

export const Welcome = () => {
  const name = "sdf";
  function dispalyName() {
    return name;
  }

  const userDetails = {
    name: "Khan",
    email: "khan@gamil.com",
    address: "Peshawar",
    gender: "male",
    age: 24,
    contact: "+92847593874598",
  };
  return (
    <>
      {/* <h1>Welcome to {name}</h1> */}
      <h1>Welcome to {dispalyName()}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad
        quibusdam placeat tempore cumque vitae odio qui, unde quam nam nulla
        perferendis ex repellendus? Fuga quibusdam sit sint saepe non?
      </p>
      <UserDetails data={userDetails} />
    </>
  );
};
