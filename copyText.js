import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CopyNotification = () => {
  toast.success("Text copied to clipboard", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000 // 2 seconds
  });

  return null; // This component doesn't render anything visible
};

export default CopyNotification;
