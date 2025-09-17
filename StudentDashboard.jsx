import React from 'react'

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Student Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-pink-700">
            🎮 Gamified Lessons
          </h3>
          <p className="text-sm text-gray-700">
            Learn disaster preparedness through interactive games & scenarios.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-indigo-700">
            📝 Quizzes
          </h3>
          <p className="text-sm text-gray-700">
            Test your knowledge on earthquake, flood & fire safety tips.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-yellow-700">
            🏅 Badges
          </h3>
          <p className="text-sm text-gray-700">
            Earn badges as you complete lessons and score high on quizzes.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-green-700">
            🚨 Drill Simulations
          </h3>
          <p className="text-sm text-gray-700">
            Practice evacuation drills and emergency responses virtually.
          </p>
        </div>
      </div>
    </div>
  )
}
