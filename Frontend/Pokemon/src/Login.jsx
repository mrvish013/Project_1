import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Paper,
    Typography,
    Link as MuiLink,
    useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import logo from "./assets/Logo.png";

const inputRow = {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    width: "100%",
};

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please enter your credentials correctly.");
        } else {
            navigate("/");
        }
    };
    const isDarkMode = theme.palette.mode === "dark";

    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.default",
                px: 2,
            }}
        >
            <Paper
                component="form"
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
                elevation={3}
                sx={{
                    width: 400,
                    p: 4,
                    borderRadius: 5,
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 3,
                    boxShadow: 3,
                }}
            >
                <Box
                    component="img"
                    src={logo}
                    alt="Logo"
                    sx={{
                        width: 100,
                        mb: 1,
                    }}
                />
                <Box sx={inputRow}>
                    <MailOutlineIcon color="action" sx={{ fontSize: 27, color: isDarkMode ? "#B7B1B2" : "" }} />
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        variant="outlined"
                        fullWidth
                        placeholder="Enter your email"
                        size="small"
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                            backgroundColor: isDarkMode ? "#F7F7F7" : "transparent",
                            borderRadius: 1,
                        }}
                    />
                </Box>
                <Box sx={inputRow}>
                    <LockIcon color="action" sx={{ fontSize: 27, color: isDarkMode ? "#B7B1B2" : "" }} />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        variant="outlined"
                        fullWidth
                        placeholder="Enter your password"
                        size="small"
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{
                            backgroundColor: isDarkMode ? "#F7F7F7" : "transparent",
                            borderRadius: 1,
                        }}
                    />
                </Box>
                <Typography variant="body2" color="text.secondary" textAlign="center">
                    Don&apos;t have an account?{" "}
                    <MuiLink component={Link} to="/signup" underline="hover">
                        Click here!
                    </MuiLink>
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    sx={{
                        width: 200,
                        fontSize: 15,
                    }}
                >
                    Login
                </Button>
            </Paper>
        </Box>
    );
}

export default Login;
