
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

const headerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "60px",
  background:
    "linear-gradient(89.96deg, #081CD4 0.04%, #4CB4FF 49.67%, #B2B3CC 99.96%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 2rem",
  zIndex: 1000,
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
};

const logoStyle = {
  height: "40px",
};

const navStyle = {
  display: "flex",
  gap: "1.5rem",
  fontFamily: "'Crimson Text', serif",
  fontWeight: "600",
  fontSize: "16px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "5px 8px",
  borderRadius: "4px",
  transition: "background-color 0.3s",
};

const activeLinkStyle = {
  backgroundColor: "rgba(255,255,255,0.2)",
  textDecoration: "underline",
};

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/cart", label: "Cart" },
  ];

  return (
    <header style={headerStyle}>
      <Link to="/">
        <img src={logo} alt="Killies Logo" style={logoStyle} />
      </Link>
      <nav style={navStyle}>
        {links.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            style={{
              ...linkStyle,
              ...(location.pathname === path ? activeLinkStyle : {}),
            }}
          >
            {label}
          </Link>
        ))}

        {!user ? (
          <Link
            to="/login"
            style={{
              ...linkStyle,
              ...(location.pathname === "/login" ? activeLinkStyle : {}),
            }}
          >
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            style={{
              ...linkStyle,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
              padding: "5px 8px",
              borderRadius: "4px",
            }}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}
