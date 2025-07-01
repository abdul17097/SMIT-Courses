import "./App.css";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { ProductDetail } from "./pages/ProductDetail";
import { ProductPage } from "./pages/ProductPage";
import { SignupPage } from "./pages/SignupPage";
import { Routes, Route } from "react-router-dom";
import { TestForm } from "./pages/TestForm";
function App() {
  const user = {
    id: 1,
  };
  return (
    <>
      {/* <Navbar />
      <div className="p-5">
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/test-form" element={<TestForm />} />
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail />}
          />
        </Routes>
      </div> */}
      <div className="w-full h-[100vh] border border-black bg-blue-500 sm:bg-blue-200 md:bg-yellow-50 lg:bg-gray-500 xl:bg-pink-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        reprehenderit, similique possimus enim quos natus iste facere eum qui
        dolor! Maiores magnam nobis, architecto recusandae ab laborum impedit
        eum saepe nesciunt, aliquam placeat vel tempora neque assumenda ipsa
        sapiente inventore incidunt facere laboriosam eaque deleniti laudantium
        minima iusto. Sit optio iste consectetur quasi? Repellat, maxime
        voluptatum! Esse veniam corrupti labore aut amet modi odit doloribus
        similique id eligendi rem quidem, excepturi aperiam iste officia culpa
        quaerat quae eum odio neque. Animi molestiae possimus quisquam iure
        officiis, ullam incidunt. Ratione error eos impedit quisquam sunt
        itaque! Culpa tempore quasi nemo ipsa nihil nisi, adipisci modi mollitia
        quod, eos, eaque asperiores! Ex, omnis! Blanditiis, animi libero
        cupiditate fuga ipsam pariatur veritatis. Sint, aperiam expedita
        quisquam quaerat numquam, perferendis quasi labore soluta in explicabo
        consectetur, nam qui adipisci! Repellendus non autem et delectus
        quisquam dolores amet impedit. Quidem adipisci autem sit doloremque
        possimus harum. At maxime perspiciatis minus ut dicta tempora esse
        nesciunt accusantium dolor porro modi, neque quia, ratione voluptas aut
        qui hic fuga. Optio eos enim iusto doloremque soluta deleniti dolores
        exercitationem qui ab veritatis quaerat ea cum ipsam ad commodi maiores
        cupiditate, nisi voluptatum ex libero vero dolorem aspernatur! A
        corrupti ipsa deserunt labore dolorem architecto commodi animi nam
        minima excepturi? Iure, sit maxime. Quos soluta et ab ducimus, natus
        accusantium optio expedita inventore minus suscipit quidem quas nam
        voluptatum quaerat dicta sed magni quis, provident sunt a tempore quasi
        itaque maxime fugit! Autem perspiciatis nemo sequi optio deleniti
        aliquam sunt deserunt quo reprehenderit architecto non laborum aliquid
        vero officia blanditiis illo eius omnis, quidem mollitia, fuga esse
        eveniet delectus! Facere tenetur quas et cupiditate adipisci harum
        expedita. Vel et, maxime repudiandae minus minima, voluptatum nam
        excepturi, voluptate quidem ipsa voluptatem nihil iste nobis? Maxime,
        voluptatum ullam iusto natus fuga, sapiente ducimus ab, odio quia
        pariatur recusandae! Quia modi culpa illo consequuntur dolorem
        blanditiis suscipit perspiciatis. Nemo facere recusandae ipsum autem
        maxime, corrupti enim blanditiis a voluptatem beatae minus consequuntur
        debitis vitae officia quisquam eum dolorem iste vero fuga excepturi?
        Natus, suscipit nisi veniam pariatur autem sapiente unde rerum
        distinctio non? Ipsum praesentium temporibus perferendis similique,
        tempore quis sit nam quam quae labore adipisci, earum corporis quaerat
        repudiandae dolore illum a quibusdam veniam, quas hic. Facilis illum ut
        velit sunt quaerat placeat ducimus eos tempora soluta odit deleniti sed
        voluptate iste voluptas doloremque aliquid vero voluptatibus obcaecati
        fugiat quas, corporis aut id autem. Laudantium laboriosam delectus nisi
        eveniet quaerat officia, quia odit excepturi maiores est minus tenetur
        iusto voluptas ratione. Ipsum delectus id tempore corrupti dolores ipsam
        dignissimos, accusamus fugiat in quasi, autem nesciunt veniam nostrum
        fuga itaque soluta. Laudantium facilis, vel voluptates neque, rem
        provident fugiat a eligendi itaque minima excepturi nemo inventore iure
        voluptatem, qui maiores? Itaque in placeat distinctio ipsa, quis
        officiis ipsam quam aliquid excepturi cum quidem cupiditate maxime?
        Fugiat tempore, voluptas voluptates, non fuga minima nam molestias dicta
        similique dolorem et reiciendis delectus at! Cum eveniet placeat illo
        quos esse dolorem tempora numquam porro odit?
      </div>
    </>
  );
}

export default App;
