import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const onbacktologinclick = useCallback(() => {
    navigate("/login1");
  }, [navigate]);

  return (
    <div className="reset-password1">
      <div className="reset-password1-item" />
      <div className="voice-notes5">Voice notes</div>
      <div className="forgot-password3">Forgot Password?</div>
      <div className="mic-container">
        <img
          className="image-removebg-preview-1-icon1"
          alt=""
          src="/imageremovebgpreview-1@2x.png"
        />
        <div className="pulse-circle pulse-circle1" />
        <div className="pulse-circle pulse-circle2" />
      </div>
      <div className="group-parent2">
        
              <div className="group-child11" />             
              <b className="request-password-reset1">Request password reset</b>
              
              <b className="please-enter-your1">
                Please enter your email you use to sign in to voice notes
              </b>
              <div className="enter-your-email1">Enter your email</div>
            
        <div className="email1">
          <img className="email-item" alt="" />
          <div className="input-container1">
            <input
                type="email"
                value={username}
                placeholder="abc@gmail.com"
                onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="reset-password1-inner" />
      <div className="weve-e-mailed-you-container">
        <p className="weve-e-mailed-you">{`We’ve e-mailed you the password `}</p>
        <p className="weve-e-mailed-you">reset link!</p>
      </div>
      <p className="back-to-login" onClick={onbacktologinclick}>Back to login</p>
    </div>
  );
};

export default ResetPassword;
