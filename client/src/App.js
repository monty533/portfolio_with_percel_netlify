import React from 'react';
import Layout from "./components/Layout/Layout";
import About from './pages/About/About';
import Techstack from './pages/Techstack/Techstack';
import Projects from './pages/Projects/Projects';
import Education from './Educations/Education';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import WorkExp from './pages/workExp/WorkExp';
import Contact from './pages/Contact/Contact';
import Tada from "react-reveal/Tada";
import MobileNav from './MobileNav/MobileNav';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [theme] = useTheme();

  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className='container'>
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">Made by <span role="img" aria-label="party popper">😍</span>Nitin kumar &copy; 2024</h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;