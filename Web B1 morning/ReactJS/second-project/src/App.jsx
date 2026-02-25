import "./App.css";
import DashboardLayout from "./components/DashboardLayout";
import DisplayName from "./components/DisplayName";
import ProductDetial from "./components/ProductDetial";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <div className="">
      <DashboardLayout>
        <div className="p-10">
          {/* <h1 className="text-3xl font-bold ">Dashboard</h1> */}
          {/* <h1 className="text-3xl font-bold ">Profile</h1> */}
          {/* <h1 className="text-3xl font-bold ">Settings</h1> */}
          <UserDetail />
          <ProductDetial />
        </div>
      </DashboardLayout>
    </div>
    // <div className="">
    //   <h1 className="text-3xl font-bold underline">Hello world!</h1>
    //   <DisplayName name={"John Doe"} />
    //   <DisplayName />
    //   <DisplayName />
    //   <DisplayName />
    //   <DisplayName name={"Bob Johnson"} />
    //   <ProductDetial />
    //   <UserDetail />
    // </div>
  );
}

export default App;
