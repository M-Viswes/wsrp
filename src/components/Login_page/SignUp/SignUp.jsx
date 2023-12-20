import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const nav = useNavigate();

  const [UserName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [userType, setuserType] = useState("");
  const [gender, setGender] = useState("male"); // Default to 'male'
  const [showPassword, setShowPassword] = useState(false);

const handleSignUp = async () => {
    if (password === confirmPassword) {
      try {
        // Replace 'http://localhost:5000' with your actual backend API URL
        const response = await axios.post("http://localhost:3500/signup", {
          UserName,
          email,
          password,
          age,
          gender,
          userType,
        });

        console.log("Signup successful:", response.data);

        nav("/login");
        // Handle successful signup (e.g., redirect to login page)
      } catch (error) {
        console.error("Signup failed:", error.message);
        // Handle signup failure (e.g., show error message)
      }
    } else {
      alert("password and confirm password doesn't match");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Sign Up</h1>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="UserName" className="form-label text-start">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="UserName"
                    value={UserName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-start">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label text-start">
                    Age:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label text-start">
                    Gender:
                  </label>
                  <div className="form-check">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={() => setGender("male")}
                      className="form-check-input"
                    />
                    <label htmlFor="male" className="form-check-label">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={gender === "female"}
                      onChange={() => setGender("female")}
                      className="form-check-input"
                    />
                    <label htmlFor="female" className="form-check-label">
                      Female
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-start">
                    Create Password:
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={togglePasswordVisibility}
                    >
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                      />
                    </button>
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="confirmPassword"
                    className="form-label text-start"
                  >
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userType" className="form-label text-start">
                    User Code:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userType"
                    value={userType}
                    onChange={(e) => setuserType(e.target.value)}
                  />
                </div>
                <div className="d-grid">
                  {/* Use d-grid to make the button take full width */}
                  <button
                    type="button"
                    className="btn btn-primary rounded-0 border-0"
                    style={{ fontSize: "1.2em" }}
                    onClick={handleSignUp}
                  >
                    Sign Up
                  </button>
                </div>
                <div className="text-start mt-3">
                  <span>Already have an account? </span>
                  <NavLink to="/login">Login</NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;