function generateResume() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const skills = document.getElementById("skills").value.split(",");

  document.getElementById("resume-output").innerHTML = `
    <h3>${name}</h3>
    <p>Email: ${email}</p>
    <h4>Skills:</h4>
    <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}</ul>
  `;
}
