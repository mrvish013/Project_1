import { useEffect, useRef, useState } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Trend from "./Trend";
import Offer from "./Offer";
import TryOut from "./TryOut";
import NewArrivals from "./NewArrivals";
import Qr from "./Qr";
import { lightTheme, darkTheme } from "./Theme.jsx";

function App() {
  const [isDarkmode, setIsDarkmode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const homeRef = useRef(null);
  const exploreRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("theme", isDarkmode ? "dark" : "light");
  }, [isDarkmode]);

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <ThemeProvider theme={isDarkmode ? darkTheme : lightTheme}>
      <CssBaseline />

      <Navbar
        isDarkMode={isDarkmode}
        onToggleTheme={() => setIsDarkmode((prev) => !prev)}
        onScrolltoHome={() => scrollTo(homeRef)}
        onScrolltoExplore={() => scrollTo(exploreRef)}
        onScrolltoContactUs={() => scrollTo(contactRef)}
      />

      <Box
        sx={{
          background: isDarkmode
            ? "radial-gradient(circle at left, rgb(43, 29, 78) 0%, rgb(0, 0, 0) 100%)"
            : "#fff",
        }}
      >
        <Box ref={homeRef}>
          <HeroSection isDarkmode={isDarkmode} />
        </Box>
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
    </ThemeProvider>
  );
}

export default App;
