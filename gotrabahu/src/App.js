import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import Login from "./pages/loginpage"; 
import Signupemployee from "./pages/signupemployee";
import Signupemployer from "./pages/signupemployer";
import Forgotpass from "./pages/forgotpass";
import EmployeeProfile from "./pages/employee_profile";
import Dashboard from "./pages/dashboard";
import Payment from "./pages/payment";
import Subsription from "./pages/subscription";
import Profile from "./pages/profile";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landingpage />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signupemployee" element={<Signupemployee />} />
        <Route path="/signupemployer" element={<Signupemployer />} />
        <Route path="/forgotpass" element={<Forgotpass />} />
        <Route path="/employee_profile" element={<EmployeeProfile />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/subscription" element={<Subsription />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}