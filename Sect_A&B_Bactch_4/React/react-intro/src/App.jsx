import DisplayName from "./components/DisplayName";
import { FirstName } from "./components/FirstName";
import { LastName } from "./components/LastName";
import UserDetails from "./components/UserDetails";
import { Welcome } from "./Welcome";

function App() {
  // const firstNAme = "Hello";
  // const lastNAme = "world!";
  const userDetails = {
    name: "Ali",
    email: "ali@gamil.com",
    address: "Peshawar",
    gender: "male",
    age: 24,
    contact: "+92847593874598",
  };
  return (
    <>
      <DisplayName />
      {/* <UserDetails
        name={userDetails.name}
        email={userDetails.email}
        address={userDetails.address}
        gender={userDetails.gender}
        age={userDetails.age}
        contact={userDetails.contact}
      /> */}
      {/* <UserDetails data={userDetails} /> */}
      {/* <h1 className="text-md font-[500] text-[#19a50c] w-[100px] border-2 border-amber-600">
        hello world
      </h1> */}
      {/* <p>how</p> */}
      {/* <Welcome data={userDetails} /> */}
      {/* <Welcome /> */}
      {/* <FirstName data={"hello"} />
      <LastName data={lastNAme} /> */}
      {/* <div className="border h-10 bg-green-500 md:bg-amber-800 lg:bg-pink-800 xl:bg-blue-700 2xl:bg-amber-400"></div> */}
    </>
  );
}

export default App;
