import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, BlogPage } from "../pages";
import { Navbar } from "../ui";

export const FerRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          {/* <Route path="home" element={<Navigate to="/" />} /> */}

          <Route path="/" element={<Navigate to="home" />} />
        </Routes>
      </div>
    </>
  );
};
