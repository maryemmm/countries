import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "../Components/Navbar";
import NotFound from "../Components/NotFound";
import CountriesPage from "../Pages/Api/Countries";
import LoginPage from "../Pages/Auth/Login";
import SignupPage from "../Pages/Auth/Signup";

function AppRoutes() {
  return (
    <>  
     <Navbar/>
     <BrowserRouter>
        <Routes>
            <Route path="/"  element={<LoginPage/>} />
            <Route path="/signup"  element={<SignupPage/>} />
          {/* <Route path="/update-password"  element={<SignupPage/>} />*/}
            <Route path="/countries"  element={<CountriesPage/>} />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;