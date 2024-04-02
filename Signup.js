// import React, { useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Signup.css";

// const Signup = () => {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleUsernameChange = useCallback((event) => {
//     setUsername(event.target.value);
//   }, []);

//   const handlePasswordChange = useCallback((event) => {
//     setPassword(event.target.value);
//   }, []);

//   const handleConfirmPasswordChange = useCallback((event) => {
//     setConfirmPassword(event.target.value);
//   }, []);

//   const onGroupContainer4Click = useCallback(() => {
//     navigate("/login1");
//   }, [navigate]);

//   const onloginclick = useCallback(() => {
//     navigate("/login1");
//   }, [navigate]);

//   return (
//     <div className="signup1">
//       <div className="signup1-item" />
//       <div className="voice-notes1">Voice notes</div>
//       <div className="signup">signup</div>
//       <div className="mic-container">
//         <img
//           className="image-removebg-preview-1-icon1"
//           alt=""
//           src="/imageremovebgpreview-1@2x.png"
//         />
//         <div className="pulse-circle pulse-circle1" />
//         <div className="pulse-circle pulse-circle2" />
//       </div>
//       <div className="group-parent">
        
//           <p className="or" onClick={onloginclick}>Already have an account? Login</p>
          
        
//         <div className="input-containers">
//           <input
//             type="email"
//             value={username}
//             onChange={handleUsernameChange}
//             placeholder="Username"
//           />
//         </div>
        
//         <div className="input-containers">
//           <input
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//             placeholder="Password"
//           />
//         </div>
//         <div className="input-containers">
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={handleConfirmPasswordChange}
//             placeholder="Confirm Password"
//           />
//         </div>
//         <div className="group-div" onClick={onGroupContainer4Click}>
//           <div className="group-child1" />
//           <b className="create-account">Create account</b>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const handleConfirmPasswordChange = useCallback((event) => {
    setConfirmPassword(event.target.value);
  }, []);

  const onSignupClick = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const message = await response.text();
        alert(message);
        navigate("/login");
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Error signing up, please try again.");
    }
  }, [username, password, navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/login1");
  }, [navigate]);

  return (
    <div className="signup1">
      <div className="signup1-item" />
      <div className="voice-notes1">Voice notes</div>
      <div className="signup">signup</div>
      <div className="mic-container">
        <img
          className="image-removebg-preview-1-icon1"
          alt=""
          src="/imageremovebgpreview-1@2x.png"
        />
        <div className="pulse-circle pulse-circle1" />
        <div className="pulse-circle pulse-circle2" />
      </div>
      <div className="group-parent">
        <p className="or" onClick={onLoginClick}>
          Already have an account? Login
        </p>
        <div className="input-containers">
          <input
            type="email"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
          />
        </div>
        <div className="input-containers">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        </div>
        <div className="input-containers">
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm Password"
          />
        </div>
        <div className="group-div" onClick={onSignupClick}>
          <div className="group-child1" />
          <b className="create-account">Create account</b>
        </div>
      </div>
    </div>
  );
};

export default Signup;
