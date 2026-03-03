import "./App.css";
import Counter from "./components/Counter";
import DashboardLayout from "./components/DashboardLayout";
import DisplayName from "./components/DisplayName";
import ProductDetial from "./components/ProductDetial";
import Products from "./components/Products";
import UserDetail from "./components/UserDetail";
import Users from "./components/Users";

function App() {
  return (
    // <div className="">
    //   <DashboardLayout>
    //     <div className="p-10">
    //       <h1 className="text-3xl font-bold ">Dashboard</h1>
    //       <h1 className="text-3xl font-bold ">Profile</h1>
    //       <h1 className="text-3xl font-bold ">Settings</h1>
    //       <UserDetail />
    //       <ProductDetial />
    //     </div>
    //   </DashboardLayout>
    // </div>
    // <div className="">
    //   <h1 className="text-3xl font-bold underline">Hello world!</h1>
    //   <DisplayName name={"test"} />
    //   <DisplayName name={"Alice Smith"} role={"Admin"} />
    //   <DisplayName name={"Bob Johnson"} />
    //   <DisplayName name={"Charlie Brown"} />
    //   <DisplayName name={"Bob Johnson"} />
    //   <ProductDetial />
    //   <UserDetail />
    // </div>
    <div className="">
      {/* <Counter /> */}
      {/* <Users /> */}
      <Products />
    </div>
  );
}

export default App;
