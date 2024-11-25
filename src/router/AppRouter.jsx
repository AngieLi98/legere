import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout"
import Feed from "../pages/Feed/Feed"
import Register from "../pages/Register/Register"
import Login from "../pages/Login/Login"
import Clubs from "../pages/Clubs/Clubs"
import ClubsDetails from "../pages/ClubsDetails/ClubsDetails"
import Cursos from "../pages/Cursos/Cursos"
import Tips from "../pages/Tips/Tips"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="clubs" element={<Clubs />} />
          <Route path="clubs/:id" element={<ClubsDetails />} />
          <Route path="cursos" element={<Cursos />} />
          <Route path="tips" element={<Tips />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to={'/' } /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter