import { Box, Stack, Typography } from '@mui/material';
import Qr1 from "./assets/Qr.png";
import google from "./assets/google.png";
import app from "./assets/app.png";
import React from 'react';

function Qr() {
    return (
        <Box
            mx="auto"
            width={{ xs: "95%", md: "85%" }}
            mt={{ xs: 5, md: 10 }}
            sx={{
                background: "linear-gradient(90deg, rgba(55, 6, 101, 1) 0%, rgba(53, 88, 154, 1) 100%)",
                padding: { xs: "15px", md: "20px" },
                borderRadius: "10px",
            }}
        >
            <Stack direction={{ xs: "column", md: "row" }} p={{ xs: 2, md: 5 }} gap={{ xs: 5, md: 20 }} alignItems="center">
                <Box
                    component="img"
                    src={Qr1}
                    sx={{ width: { xs: "20%", md: "20%" }, height: "auto", mx: "auto" }}
                />

                <Box textAlign="center" width={{ xs: "100%", md: "60%" }} mt={{ xs: 0, md: 3 }}>
                    <Typography variant="h4" color="secondary" letterSpacing={1}>
                        Scan QR code for me
                    </Typography>
                    <Typography variant="body1" color="secondary" letterSpacing={2} sx={{ wordSpacing: 2 }}>
                        Now you can download the official Musify app.
                    </Typography>

                    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" mt={{ xs: 3, md: 1 }}>
                        <Box
                            component="img"
                            src={google}
                            sx={{
                                width: { xs: 150, md: 200 },
                                height: { xs: 60, md: 80 },
                                objectFit: "contain",
                            }}
                        />
                        <Box
                            component="img"
                            src={app}
                            sx={{
                                width: { xs: 150, md: 200 },
                                height: { xs: 90, md: 125 },
                                objectFit: "contain",
                            }}
                        />
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}

export default Qr;
