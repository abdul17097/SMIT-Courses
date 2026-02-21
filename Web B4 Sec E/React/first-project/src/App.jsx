import Category from "./components/Category";
import { Counter } from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import Users from "./components/Users";

const App = () => {
  const user = {
    id: 1,
    name: "test",
    age: 23,
    gender: "male",
  };
  return (
    <div className="">
      {/* <Header name="Faizan" />
      <Hero />
      <Category />

      <div>hello world</div>
      <Footer /> */}
      {/* <Counter /> */}
      {/* <Navbar /> */}
      <Users />
      {/* <UserForm /> */}
    </div>
  );
};

export default App;
