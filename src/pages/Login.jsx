import { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../assets/Background.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
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
          Login
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
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
            Login
          </button>
        </form>

        {/* Fixed footer links section */}
        <p
          style={{
            textAlign: "center",
            marginTop: "24px",
            color: "#4b5563",
          }}
        >
          Don’t have an account?{" "}
          <Link
            to="/register"
            style={{ color: "#6A0DAD", textDecoration: "underline" }}
          >
            Register
          </Link>
        </p>

        <p
          style={{
            textAlign: "center",
            marginTop: "8px",
            color: "#4b5563",
          }}
        >
          Back to{" "}
          <Link
            to="/"
            style={{ color: "#6A0DAD", textDecoration: "underline" }}
          >
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
