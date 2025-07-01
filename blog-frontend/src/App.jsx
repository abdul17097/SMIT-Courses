import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookMarks } from "./pages/BookMarks";
import { Favorites } from "./pages/Favorites";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/navbar";
import { LandingPage } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/SignUp";
import { Blogs } from "./pages/Blogs";
import { CreatePost } from "./pages/CreatePost";
import { PublicLayout } from "./components/layouts/PublicLayout";
import { ProtectedLayout } from "./components/layouts/ProtectedLayout";
import { ProtectRoutes } from "./components/ProtectdRoutes";
import { Dashboard } from "./pages/Dashboard";
import { PostDetails } from "./pages/PostDetails";
import { AllPost } from "./pages/AllPost";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Layout */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/bookmarks" element={<BookMarks />} /> */}
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog-details/:slug" element={<PostDetails />} />
          </Route>
          {/* Protect Layout */}
          <Route element={<ProtectRoutes />}>
            <Route element={<ProtectedLayout />}>
              <Route path="/bookmarks" element={<BookMarks />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/all-post" element={<AllPost />} />
              <Route path="/edit-post" element={<EditPost />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
