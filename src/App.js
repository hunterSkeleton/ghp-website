import React, { useEffect, useState, useRef } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import About from "./components/Landing/About.js";
import Resume from "./components/Resume/Resume.js";
import Skills from "./components/Skills/Skills.js";
import Projects from "./components/Projects/Projects.js";
import Blogs from "./components/Blogs/Blogs.js";
import Certifications from "./components/Certifications/Certifications.js";
import Hobbies from "./components/Hobbies/Hobbies.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalDataProvider } from "./provider/GlobalDataProvider.js";

const App = () => {
  const [scrollToTop, setScrollToTop] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    if (scrollToTop && containerRef.current) {
      containerRef.current.scrollTo(0, 0);
      setScrollToTop(false);
    }
  }, [scrollToTop]);

  const handleScrollToTop = () => {
    setScrollToTop(true);
  };

  return (
    <GlobalDataProvider>
      <Router>
        <div className="flex flex-col h-full md:h-screen m-0 p-0">
          <Header handleScrollToTop={handleScrollToTop} />
          <div
            ref={containerRef}
            className="w-screen h-screen md:h-full flex flex-col overflow-y-scroll overflow-x-hidden sm:overflow-y-hidden scrollbar-hide p-0"
          >
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              {/* <Route path="/skills" element={<Skills />} /> */}
              <Route path="/projects" element={<Projects />} />
              {/* <Route path="/blogs" element={<Blogs />} /> */}
              {/* <Route path="/hobbies" element={<Hobbies />} /> */}
              {/* <Route path="/certifications" element={<Certifications />} /> */}
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </GlobalDataProvider>
  );
};

export default App;
