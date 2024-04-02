import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/login1");
  }, [navigate]);


  const onRectangleClick = useCallback(() => {
    navigate("/reset-password1");
  }, [navigate]);

  return (
    <div className="forgot-password1">

      <div className="forgot-password1-item" />
      <div className="voice-notes4">Voice notes</div>
      <div className="forgot-password2">Forgot Password?</div>
      <div className="mic-container">
  <img
    className="image-removebg-preview-1-icon1"
    alt=""
    src="/imageremovebgpreview-1@2x.png"
  />
  <div className="pulse-circle pulse-circle1" />
  <div className="pulse-circle pulse-circle2" />
</div>
      <div className="forgot-password1-inner">
        <div className="group-parent1">
          <div className="group-wrapper1" onClick={onGroupContainerClick}>
            <div className="rectangle-parent7">
              <div className="group-child9" />
              <div className="back-to-sign-in-wrapper">
                <b className="back-to-sign-in">Back to Sign-in</b>
              </div>
            </div>
          </div>
          <div className="or-container">
            <b className="or2">or</b>
            <img className="subtract-icon2" alt="" src="/subtract.svg" />
          </div>
          
            <div className="group-child10" onClick={onRectangleClick} />
            <b className="request-password-reset">Request password reset</b>
            <b className="please-enter-your">
              Please enter your email you use to sign in to voice notes
            </b>
            <div className="enter-your-email">Enter your email</div>
      
        </div>
      </div>
      <div className="email">
        <img className="email-child" alt="" />
        <div className="input-container1">
        <input
            type="email"
            value={username}
            placeholder="abc@gmail.com"
          /></div>
      </div>
    </div>
  );
};

export default ForgotPassword;
