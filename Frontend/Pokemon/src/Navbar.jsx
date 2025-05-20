import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, Chip, IconButton, Stack } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "./assets/Logo.png";

function Navbar() {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#fff",
                color: "#000",
                boxShadow: "none",
            }}
        >
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
                <Box
                    component="img"
                    src={logo}
                    alt="Logo"
                    sx={{
                        width: { xs: "100px", md: "120px" },
                        mb: { xs: -2, md: 0 },
                    }}
                />

                <Stack
                    direction="row"
                    spacing={{ xs: 3, md: 5 }}
                    sx={{ flexWrap: "wrap", justifyContent: "center" }}
                >
                    {["Home", "Explore", "Contact Us"].map(text => (
                        <Button key={text} sx={{ color: "#000", fontWeight: 500 }}>
                            {text}
                        </Button>
                    ))}
                </Stack>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: 1, md: 2 },
                        flexWrap: "wrap",
                    }}
                >
                    <Chip
                        variant="outlined"
                        label={
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <LightModeIcon fontSize="small" />
                                <DarkModeIcon fontSize="small" />
                            </Box>
                        }
                        sx={{ height: "32px" }}
                    />

                    <IconButton sx={{ color: "black" }}>
                        <SearchIcon />
                    </IconButton>
                    <IconButton sx={{ color: "black" }}>
                        <ShoppingCartIcon />
                    </IconButton>
                    <Button
                        variant="outlined"
                        color="primary"
                        sx={{ borderRadius: 3,border:"2px solid #F14A16",fontWeight:"600", width:"100px",height:"40px",fontSize: "13px",  }}
                    >
                        Login
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
