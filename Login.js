import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/forgot-password1");
  }, [navigate]);

  // State to store username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle input change for username
  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  // Handle input change for password
  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  return (
    <div className="login1">
      <div className="login1-item" />
      <div className="voice-notes2">Voice notes</div>
      <div className="login2">Login</div>
      <div className="mic-container">
        <img
          className="image-removebg-preview-1-icon1"
          alt=""
          src="/imageremovebgpreview-1@2x.png"
        />
        <div className="pulse-circle pulse-circle1" />
        <div className="pulse-circle pulse-circle2" />
      </div>
      <div className="group-container">
        <div className="rectangle-parent3">
          <div className="input-container">
            <input
              type="email"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Username"
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="rectangle-parent5">
          <div className="group-child7" onClick={onRectangleClick}>
            <b className="login3">Login</b>
          </div>
        </div>
      </div>
      <div className="forgot-password" onClick={onForgotPasswordTextClick}>
        Forgot Password?
      </div>
    </div>
  );
};

export default Login;
