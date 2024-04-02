import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSpeechRecognition } from "react-speech-recognition";
import "./Homepage.css";
import jsPDF from 'jspdf';


const Homepage = () => {
  const navigate = useNavigate();

  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isLeftAlign, setIsLeftAlign] = useState(false);
  const [isRightAlign, setIsRightAlign] = useState(false);
  const [isJustify, setIsJustify] = useState(false);
  const [isCenterAlign, setIsCenterAlign] = useState(false);

  const handleStartListening = () => {
    setIsListening(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const toggleBold = () => {
    setIsBold(!isBold);
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const toggleUnderline = () => {
    setIsUnderline(!isUnderline);
  };

  const toggleLeftAlign = useCallback(() => {
    setIsLeftAlign(true);
    setIsRightAlign(false);
    setIsJustify(false);
    setIsCenterAlign(false);
  }, []);

  const toggleRightAlign = useCallback(() => {
    setIsLeftAlign(false);
    setIsRightAlign(true);
    setIsJustify(false);
    setIsCenterAlign(false);
  }, []);

  const toggleJustify = useCallback(() => {
    setIsLeftAlign(false);
    setIsRightAlign(false);
    setIsJustify(true);
    setIsCenterAlign(false);
  }, []);

  const toggleCenterAlign = useCallback(() => {
    setIsLeftAlign(false);
    setIsRightAlign(false);
    setIsJustify(false);
    setIsCenterAlign(true);
  }, []);

  const copyText = () => {
    navigator.clipboard.writeText(transcript)
      .then(() => {
        console.log('Text copied to clipboard');
        alert('Text copied to clipboard');
      })
      .catch(error => {
        console.error('Failed to copy text: ', error);
        // toast.error('Failed to copy text to clipboard'); Remove this line
      });
  };
  
  


  const downloadTextAsTxt = () => {
    const blob = new Blob([transcript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transcript.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const downloadTextAsPdf = () => {
    const doc = new jsPDF();
    doc.text(transcript, 10, 10);
    doc.save('transcript.pdf');
  };
    
  const composeEmail = () => {
    const subject = encodeURIComponent('Transcribed Text');
    const body = encodeURIComponent(transcript);
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };
  

  const onRecordTextClick = useCallback(() => {
    navigate("/homepage1");
  }, [navigate]);

  const onUploadTextClick = useCallback(() => {
    document.getElementById("audioFileInput").click();
  }, []);

  const handleFileChange = useCallback((event) => {
    const file = event.target.files[0];
    // Handle the uploaded file
  }, []);

  return (
    <div className="homepage">

      <div className="voice-notes">Voice notes</div>
      <div className="homepage-child" />
      <div className="notes-line">
        <div
          className={`transcript ${isBold ? "bold" : ""} ${
            isItalic ? "italic" : ""
          } ${isUnderline ? "underline" : ""} ${
            isLeftAlign ? "left-align" : ""
          } ${isRightAlign ? "right-align" : ""} ${
            isJustify ? "justify" : ""
          } ${isCenterAlign ? "center-align" : ""}`}
        >
          {transcript}
        </div>

        <div className="notes-line-child" />
        <div className="notes-line-item" />
        <div className="notes-line-inner" />
        <div className="line-div" />
        <div className="notes-line-child1" />
        <div className="notes-line-child2" />
        <div className="notes-line-child3" />
        <div className="notes-line-child4" />
        <div className="notes-line-child5" />
        <div className="notes-line-child6" />
        <div className="notes-line-child7" />
        <div className="notes-line-child8" />
      </div>
      <div className="spiral">
        <div className="div">. . . . . . . .</div>
        <img className="spiral-child" alt="" src="/vector-1.svg" />
        <img className="spiral-item" alt="" src="/vector-2.svg" />
        <img className="spiral-inner" alt="" src="/vector-2.svg" />
        <img className="vector-icon" alt="" src="/vector-2.svg" />
        <img className="spiral-child1" alt="" src="/vector-2.svg" />
        <img className="spiral-child2" alt="" src="/vector-2.svg" />
        <img className="spiral-child3" alt="" src="/vector-2.svg" />
        <img className="spiral-child4" alt="" src="/vector-2.svg" />
      </div>
      <b className="b" onClick={toggleBold}>
        B
      </b>
      <i className="i" onClick={toggleItalic}>
        I
      </i>
      <div className="u" onClick={toggleUnderline}>
        U
      </div>
      <div className="left-align" onClick={toggleLeftAlign}>
        <div className="left-align-child" />
        <div className="left-align-item" />
        <div className="left-align-inner" />
        <div className="left-align-child1" />
      </div>
      <img
        className="right-align-icon"
        onClick={toggleRightAlign}
        alt=""
        src="/right-align@2x.png"
      />
      <img
        className="center-align-icon"
        onClick={toggleCenterAlign}
        alt=""
        src="/center-align@2x.png"
      />
      <div className="justify" onClick={toggleJustify}>
        <div className="justify-child" />
        <div className="justify-item" />
        <div className="justify-inner" />
        <div className="justify-child1" />
      </div>
      <div className="homepage-item" />
      <div className="homepage-inner" />
      <div className="click-on-the-container">
        <p className="click-on-the">Click on the mic icon</p>
        <p className="click-on-the">to record or upload the audio file.</p>
      </div>
      <button
        className="record"
        onClick={handleStartListening}
        disabled={isListening}
      >
        {isListening ? "Listening..." : "Record"}
      </button>

      <input
        id="audioFileInput"
        type="file"
        accept="audio/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div className="rectangle-div" onClick={onRecordTextClick} />

      <b className="copy-save-print" onClick={copyText}>COPY</b>
      <b className="save" onClick={downloadTextAsTxt}> SAVE </b>
      <b className="print" onClick={downloadTextAsPdf}> PRINT </b>
      <b className="emaill" onClick={composeEmail}> EMAIL</b>

      <img
        className="rectangle-icon1"
        alt=""
        src="/rectangle@2x.png"
        onClick={handleStartListening}
      />
    </div>
  );
};

export default Homepage;
