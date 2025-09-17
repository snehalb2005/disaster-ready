import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function StudentLogin() {
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    // do login check here, then navigate:
    navigate('/student/dashboard')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Student Login
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-2 rounded-lg"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

