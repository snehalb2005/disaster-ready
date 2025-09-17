import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage: "url('/disaster-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-4">
          Disaster Preparedness & Response Education
        </h1>
        <p className="text-lg mb-6">Choose your portal to get started</p>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div
            onClick={() => navigate('/student/login')}
            className="bg-white text-gray-900 rounded-xl p-8 cursor-pointer hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-semibold mb-2 text-pink-700">
              Student Portal
            </h3>
            <p className="text-sm">Gamified lessons, quizzes & drills.</p>
          </div>
          <div
            onClick={() => navigate('/teacher/login')}
            className="bg-white text-gray-900 rounded-xl p-8 cursor-pointer hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-semibold mb-2 text-indigo-700">
              Teacher Portal
            </h3>
            <p className="text-sm">Manage emergency plans & drills.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

