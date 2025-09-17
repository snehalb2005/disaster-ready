// Placeholder for future JS (like dynamic content)
console.log("DisasterReady JS loaded");
function loginStudent(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  localStorage.setItem('studentEmail', email); // remember email
  window.location.href = 'student-dashboard.html';
}

