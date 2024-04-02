import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Voicenotes from "./pages/Voicenotes";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Homepage1 from "./pages/Homepage1";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/signup1":
        title = "";
        metaDescription = "";
        break;
      case "/login1":
        title = "";
        metaDescription = "";
        break;
      case "/homepage1":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password1":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Voicenotes />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/signup1" element={<Signup />} />
      <Route path="/login1" element={<Login />} />
      <Route path="/homepage1" element={<Homepage1 />} />
      <Route path="/forgot-password1" element={<ForgotPassword />} />
      <Route path="/reset-password1" element={<ResetPassword />} />
    </Routes>
  );
}
export default App;
