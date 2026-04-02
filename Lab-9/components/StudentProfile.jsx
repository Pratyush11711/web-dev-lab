import React from "react";

function StudentProfile() {
  // Student details
  const name = "Pratyush Gupta";
  const department = "Computer Science";
  const year = "3rd Year";
  const section = "A";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Profile</h1>
      <h2>{name}</h2>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Section:</strong> {section}</p>
    </div>
  );
}

export default StudentProfile;