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
import StudentDashboard from "./Pages/Students/StudentDashboard";
import StudentCourse from "./Pages/Students/Student-MyCourse";
import LessonBoard from "./Pages/Students/StudentLesson";
import Assesment from "./Pages/Students/Student-Assesment";
import Grades from "./Pages/Students/Student-Grades";
import Profile from "./Pages/Students/Student-Profile";
import Classes from "./Pages/Students/Student-Class";
import TeacherDashBoard from "./Pages/TeacherDashboard/Teacher-DashBoard";
import TeacherStudent from "./Pages/TeacherDashboard/Teacher-students";
import TeacherClasses from "./Pages/TeacherDashboard/Teacher-Classes";
import TeacherAssesmentBoard from "./Pages/TeacherDashboard/TeacherAssesmentBoard";
import TeacherSubmissionBoard from "./Pages/TeacherDashboard/TeacherSubmissionBoard";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<RegsiterPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Courses" element={<CoursePage />} />
        <Route path="/Courses/:courseId" element={<CourseDetails />} />
        <Route path="/Forgot-Password" element={<ForgottenPassword />} />
        <Route path="/payment-checkout" element={<PaymentCheckout />} />
        <Route path="/payment-succesfull" element={<PaystackSuccesful />} />
        <Route path="/payment-failed" element={<PaymentFailUi />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/my-course" element={<StudentCourse />} />
        <Route path="/lessons" element={<LessonBoard />} />
        <Route path="/assessments" element={<Assesment />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/teacher-dashboard" element={<TeacherDashBoard />} />
        <Route path="/teacher-student" element={<TeacherStudent />} />
        <Route path="/teacher-classes" element={<TeacherClasses />} />
        <Route path="/teacher-assesment" element={<TeacherAssesmentBoard />} />
        <Route path="/teacher-submisson" element={<TeacherSubmissionBoard />} />
      </Routes>
    </>
  );
}
