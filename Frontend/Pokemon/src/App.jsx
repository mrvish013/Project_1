import { useEffect, useRef, useState } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Trend from "./Trend";
import Offer from "./Offer";
import TryOut from "./TryOut";
import NewArrivals from "./NewArrivals";
import Qr from "./Qr";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

import { lightTheme, darkTheme } from "./Theme.jsx";

function HomePage({ isDarkMode, scrollToRefs, onToggleTheme }) {
  const {  exploreRef, contactRef } = scrollToRefs;

  return (
    <>
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={onToggleTheme}
        onScrolltoExplore={() => scrollTo(exploreRef)}
        onScrolltoContactUs={() => scrollTo(contactRef)}
      />
      <Box
        sx={{
          background: isDarkMode
            ? "radial-gradient(circle at left, rgb(43, 29, 78) 0%, rgb(0, 0, 0) 100%)"
            : "#fff",
        }}
      >
        <Box >
          <HeroSection isDarkMode={isDarkMode} />
        </Box>

        <Trend />

        <Box ref={exploreRef}>
          <Offer />
        </Box>

        <TryOut />
        <NewArrivals />

        <Box ref={contactRef}>
          <Qr />
        </Box>
      </Box>
    </>
  );
}

function scrollTo(ref) {
  ref.current?.scrollIntoView({ behavior: "smooth" });
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const exploreRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                isDarkMode={isDarkMode}
                scrollToRefs={{exploreRef, contactRef }}
                onToggleTheme={handleToggleTheme}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
