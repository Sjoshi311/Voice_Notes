// import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Voicenotes.css";

// const Voicenotes = () => {
//   const navigate = useNavigate();

//   const onRectangleClick = useCallback(() => {
//     navigate("/signup1");
//   }, [navigate]);

//   const onRectangle1Click = useCallback(() => {
//     navigate("/login1");
//   }, [navigate]);

//   return (
//     <div className="voicenotes2">
//       <div className="component-5">
//         <b className="voicenotes">voicenotes</b>
//         <div className="component-2">
//           <div className="component-2-child" />
//         </div>
//       </div>
//       <b className="create-your">Create your</b>
//       <div className="rectangle-parent2">
//         <div className="group-child3" onClick={onRectangleClick} />
//         <div className="group-child4" onClick={onRectangle1Click} />
//         <b className="login">Login</b>
//         <b className="signup2">Signup</b>
//       </div>
//     </div>
//   );
// };

// export default Voicenotes;
import React, { useRef, useEffect, useCallback  } from "react";
import { useNavigate } from "react-router-dom";
import "./Voicenotes.css";

const Voicenotes = () => {
  const textRef = useRef(null);
  const text = "voicenotes";
  const delay = 100;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        textRef.current.innerText += text[index];
        index++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    window.location.href = "http://localhost:4000";
  }, [navigate]);


  const onRectangle1Click = useCallback(() => {
    navigate("/login1");
  }, [navigate]);

  return (
    <div className="voicenotes2">
      <div className="component-5">
        
        <div className="component-2">
          
        </div>
      </div>
      <span className="text-container">
        <b className="create-your">Create your </b>
        <div ref={textRef} className="typewriter-text" />
      </span>
      <div className="rectangle-parent2">
        <div className="group-child3" onClick={onRectangleClick} />
        <div className="group-child4" onClick={onRectangle1Click} />
        <b className="login">Login</b>
        <b className="signup2">Signup</b>
      </div>
   </div>
  );
};

export default Voicenotes;