import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CoursePage from "./Pages/CoursePage";
import CourseDetails from "./Pages/CourseDetails";
import RegsiterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<RegsiterPage />} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Courses" element={<CoursePage />} />
        <Route path="/javascript" element={<CourseDetails />} />
      </Routes>
    </>
  );
}
