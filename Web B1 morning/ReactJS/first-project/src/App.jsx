import "./App.css";
import Category from "./components/Category/Category";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Header } from "./Header";
const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Category />
      </main>
      <Footer />
    </div>
  );
};

export default App;
