
import styles from "../styles/Login.module.css";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; 
import facebook from "../assets/social-facebook.png";
import instagram from "../assets/social-instagram.png";
import google from "../assets/social-google.png";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
      navigate("/");
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <img src={logo} alt="Killies Logo" className={styles.logoImage} />
      </div>
      <div className={styles.rightSection}>
        <div className={styles.loginCard}>
          <h2 className={styles.title}>Login</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
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
            <button type="submit" className={styles.loginButton}>Login</button>
          </form>

          <p className={styles.orText}>or</p>
          <div className={styles.socialIcons}>
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={google} alt="Google" />
          </div>

          <p className={styles.registerText}>
            Don’t have an account?{" "}
            <a href="/register" className={styles.registerLink}>
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
