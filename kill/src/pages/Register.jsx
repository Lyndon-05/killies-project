import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import facebookIcon from "../assets/social-facebook.png";
import googleIcon from "../assets/social-google.png";
import instagramIcon from "../assets/social-instagram.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    console.log("Registered:", { email, password });
    navigate("/login");
  };

  return (
    <div className={styles.background}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className={styles.input}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className={styles.button}>
          Register
        </button>

        <div className={styles.socialIcons}>
          <img src={facebookIcon} alt="Facebook" />
          <img src={googleIcon} alt="Google" />
          <img src={instagramIcon} alt="Instagram" />
        </div>

        <div className={styles.link}>
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
