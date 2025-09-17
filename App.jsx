import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import StudentLogin from './pages/StudentLogin.jsx'
import StudentDashboard from './pages/StudentDashboard.jsx'
// import TeacherLogin, TeacherDashboard same way

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/student/login" element={<StudentLogin />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      {/* Teacher routes */}
    </Routes>
  )
}

