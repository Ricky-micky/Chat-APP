import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      Swal.fire("Invalid Email", "Please enter a valid email address.", "error");
    } else if (!/^\d{10}$/.test(phone)) {
      Swal.fire("Invalid Phone", "Enter a 10-digit phone number.", "error");
    } else if (!/^(?=.*\d).{6,}$/.test(password)) {
      Swal.fire("Weak Password", "Password must be 6+ chars with numbers.", "error");
    } else {
      Swal.fire("Success!", "Sign up successful!", "success").then(() => navigate("/home"));
    }
  };

  return (
    <div style={{ width: "300px", margin: "0 auto", textAlign: "center" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;