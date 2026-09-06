import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CoursePage from "./Pages/CoursePage";
import CourseDetails from "./Pages/CourseDetails";
import RegsiterPage from "./Pages/Authetications/RegisterPage";
import LoginPage from "./Pages/Authetications/LoginPage";
import ForgottenPassword from "./Pages/Authetications/ForgottenPassword";
import PaymentCheckout from "./Pages/CheckOutPages/Payment-checkout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<RegsiterPage />} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Courses" element={<CoursePage />} />
        <Route path="/javascript" element={<CourseDetails />} />
        <Route path="/Forgot-Password" element={<ForgottenPassword />} />
        <Route path="/payment-checkout" element={<PaymentCheckout/>} />
      </Routes>
    </>
  );
}
