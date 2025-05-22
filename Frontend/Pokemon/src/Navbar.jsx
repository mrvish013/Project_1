import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, Chip, IconButton, Stack } from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";

import logo from "./assets/Logo.png";

function Navbar({ onToggleTheme, isDarkMode, onScrolltoExplore, onScrolltoContactUs, onScrolltohome }) {
    return (
        <AppBar position="static" sx={{ backgroundColor: "background.paper", color: "text.primary", boxShadow: "none" }}>
            <Toolbar
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: { xs: 2, md: 12 },
                    gap: { xs: 2, md: 0 },
                }}
            >
                <Box component="img" src={logo} alt="Logo" sx={{ width: { xs: "100px", md: "120px" }, mb: { xs: -2, md: 0 } }} />

                <Stack direction="row" spacing={{ xs: 3, md: 5 }} sx={{ flexWrap: "wrap", justifyContent: "center" }}>

                    <Button onClick={onScrolltohome} sx={{ color: "text.primary", fontWeight: 500, fontSize: 17 }}>
                        Home
                    </Button>
                    <Button onClick={onScrolltoExplore} sx={{ color: "text.primary", fontWeight: 500, fontSize: 17 }}>
                        Explore
                    </Button>
                    <Button onClick={onScrolltoContactUs} sx={{ color: "text.primary", fontWeight: 500, fontSize: 17 }}>
                        Contact Us
                    </Button>

                </Stack>

                <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 2 }, flexWrap: "wrap" }}>
                    <Chip
                        onClick={onToggleTheme}
                        clickable
                        variant="outlined"
                        label={
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                {isDarkMode ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
                            </Box>
                        }
                        sx={{ height: "32px", cursor: "pointer" }}
                    />

                    <IconButton sx={{ color: "text.primary" }}><SearchIcon /></IconButton>
                    <IconButton sx={{ color: "text.primary" }}><ShoppingCartIcon /></IconButton>
                    <Link  to="/login">
                        <Button variant="outlined" color="primary" sx={{ borderRadius: 3, fontWeight: 600 }}>
                            Login
                        </Button>
                    </Link>
                    <Link  to="/signup">
                        <Button variant="outlined" color="primary" sx={{ borderRadius: 3, fontWeight: 600 }}>
                            Sign up
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;