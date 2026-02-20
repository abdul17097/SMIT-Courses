import "./App.css";
import Category from "./components/Category/Category";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import { Header } from "./Header";
const App = () => {
  return (
    <div>
      <ProductCard />
      {/* <h1 className="text-[black] text-[10px] heading  font-bold italic border-[1.5px] border-[pink] rounded-3xl bg-[red] text-center h-11 w-[200px] flex justify-center items-center hover:bg-green-400 hover:rounded transition-all duration-1000 md:bg-pink-800 lg:bg-amber-200 xl:bg-blue-600">
        Welcome to Tailwind Css
      </h1>
      <Header />
      <main>
        <Hero />
        <Category />
        <div className="border h-[400px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
          <div className="border w-[100px] h-[100px]"></div>
          <div className="border w-[100px] h-[100px]"></div>
          <div className="border w-[100px] h-[100px]"></div>
          <div className="border w-[100px] h-[100px]"></div>
          <div className="border w-[100px] h-[100px]"></div>
        </div>
      </main>
      <Footer /> */}
    </div>
  );
};

export default App;
