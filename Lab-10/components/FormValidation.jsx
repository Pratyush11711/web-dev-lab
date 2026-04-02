import React, { useState } from "react";

function FormValidation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Validation function
  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Name is required";
    if (!form.email) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Invalid email format";
    }
    if (!form.password) err.password = "Password is required";

    return err;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form submitted successfully!");
      setForm({ name: "", email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <p style={{ color: "red" }}>{errors.name}</p>

        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <p style={{ color: "red" }}>{errors.email}</p>

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <p style={{ color: "red" }}>{errors.password}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;