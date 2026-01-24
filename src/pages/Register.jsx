import { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../assets/Background.jpg";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#E6CCFF",
          width: "420px",
          padding: "48px",
          borderRadius: "16px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "24px",
            fontSize: "24px",
            fontWeight: "700",
            color: "#1f2937",
          }}
        >
          Register
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "6px", fontWeight: "500" }}>
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "6px", fontWeight: "500" }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "6px", fontWeight: "500" }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#6A0DAD",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </form>

        {/* FIXED FOOTER SECTION — NO NESTED <p> */}
        <div
          style={{
            textAlign: "center",
            marginTop: "24px",
            color: "#4b5563",
          }}
        >
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ color: "#6A0DAD", textDecoration: "underline" }}
            >
              Login
            </Link>
          </p>

          <p style={{ marginTop: "8px" }}>
            Home page{" "}
            <Link
              to="/"
              style={{ color: "#6A0DAD", textDecoration: "underline" }}
            >
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
