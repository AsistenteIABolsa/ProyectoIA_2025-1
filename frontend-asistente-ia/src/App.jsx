import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import StudentDashboard from "./pages/student/StudentDashboard"
import StudentProfile from "./pages/student/StudentProfile"
import StudentJobs from "./pages/student/StudentJobs"
import JobDetail from "./pages/student/JobDetail"
import EmployerDashboard from "./pages/employer/EmployerDashboard"
import NewJob from "./pages/employer/NewJob"
import AdminDashboard from "./pages/admin/AdminDashboard"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/student/profile" element={<StudentProfile />} />
      <Route path="/student/jobs" element={<StudentJobs />} />
      <Route path="/student/jobs/:id" element={<JobDetail />} />
      <Route path="/employer/dashboard" element={<EmployerDashboard />} />
      <Route path="/employer/jobs/new" element={<NewJob />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  )
}

export default App

