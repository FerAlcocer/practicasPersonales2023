import { Route, Routes } from "react-router-dom";
import { FerRoutes } from "../routes/FerRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<FerRoutes />} />
      </Routes>
    </>
  );
};
