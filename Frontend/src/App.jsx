import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CoursePage from "./Pages/CoursePage";
import CourseDetails from "./Pages/CourseDetails";
import RegsiterPage from "./Pages/Authetications/RegisterPage";
import LoginPage from "./Pages/Authetications/LoginPage";
import ForgottenPassword from "./Pages/Authetications/ForgottenPassword";
import PaymentCheckout from "./Pages/CheckOutPages/Payment-checkout";
import PaystackSuccesful from "./Pages/CheckOutPages/PaystackSucces";
import PaymentFailUi from "./Pages/CheckOutPages/PaymentFail";
import StudentDashboard from "./Pages/StudentDashboard/StudentDashboard";
import StudentCourse from "./Pages/StudentDashboard/Student-MyCourse";
import LessonBoard from "./Pages/StudentDashboard/StudentLesson";
import Assesment from "./Pages/StudentDashboard/Student-Assesment";
import Grades from "./Pages/StudentDashboard/Student-Grades";
import Profile from "./Pages/StudentDashboard/Student-Profile";
import Classes from "./Pages/StudentDashboard/Student-Class";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Register" element={<RegsiterPage />} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Courses" element={<CoursePage />} />
        <Route path="/Courses/:courseId" element={<CourseDetails />} />
        <Route path="/Forgot-Password" element={<ForgottenPassword />} />
        <Route path="/payment-checkout" element={<PaymentCheckout/>} />
         <Route path="/payment-succesfull" element={<PaystackSuccesful/>} />
         <Route path="/payment-failed" element={<PaymentFailUi/>} />
         <Route path="/student-dashboard" element={<StudentDashboard/>} />
         <Route path="/student-course" element={<StudentCourse/>} />
         <Route path="/student-lesson" element={<LessonBoard/>} />
         <Route path="/student-assesment" element={<Assesment/>} />
         <Route path="/student-grades" element={<Grades/>} />
          <Route path="/student-profile" element={<Profile/>} />
            <Route path="/student-classes" element={<Classes/>} />
      </Routes>
    </>
  );
}
