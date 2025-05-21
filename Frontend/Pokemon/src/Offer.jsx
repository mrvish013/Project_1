import { Box, Card, Stack, Typography, Button } from '@mui/material'
import unslapsh from "./assets/unsplash.png"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import React from 'react'

function Offer() {
    const timerBoxSx = {
        width: 50,
        height: 50,
        bgcolor: "#370665",
        borderRadius: 3,
        fontSize: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
    };
    return (
        <Box my={10}>
            <Box
                mx={"auto"}
                textAlign={"center"}
                width={{ xs: "95%", md: "85%" }}
                mt={10}
                sx={{
                    background: "linear-gradient(90deg, rgba(55, 6, 101, 1) 0%, rgba(53, 88, 154, 1) 100%)",
                    padding: "20px",
                    borderRadius: "10px",
                }}
            >
                <Typography variant="h4" color="secondary" letterSpacing={1} sx={{ wordSpacing: 5 }}>Why directly buy from Musify?</Typography>
                <Stack direction={{ md: "column", lg: "row" }} mt={3} flexWrap={"wrap"} spacing={{ xs: 2, md: 5 }} color={"white"} alignItems="center" justifyContent={"space-evenly"} >

                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                        <LocalShippingIcon sx={{ fontSize: { xs: 24, sm: 30, md: 45 } }} />
                        <Typography variant="body1" fontSize={{ xs: 18, sm: 20, md: 23 }} fontWeight="100">Free Delivery</Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <VerifiedIcon sx={{ fontSize: { xs: 24, sm: 30, md: 45 } }} />
                        <Typography variant="body1" fontSize={{ xs: 18, sm: 20, md: 23 }} fontWeight="100">Verified Quality</Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <SupportAgentIcon sx={{ fontSize: { xs: 24, sm: 30, md: 45 } }} />
                        <Typography variant="body1" fontSize={{ xs: 18, sm: 20, md: 23 }} fontWeight="100">24/7 Support</Typography>
                    </Box>
                </Stack>
            </Box>

            <Stack direction={{ xs: "column", md: "column", lg: "row" }} alignItems={'center'} flexWrap="wrap" maxWidth={"100%"} gap={1} mt={15} justifyContent="center">
                <Box width="50%" sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Card
                        sx={{
                            position: "relative",
                            backgroundColor: "#35589A",
                            borderRadius: "50%",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: { xs: 150, sm: 230, md: 380, lg: 420 },
                            height: { xs: 150, sm: 230, md: 380, lg: 420 },
                            maxWidth: "100%",
                        }}
                    >
                        <Box
                            component="img"
                            src={unslapsh}
                            alt="Product"
                            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </Card>
                    <Box
                        sx={{
                            width: { xs: 60, sm: 80, md: 120 },
                            height: { xs: 60, sm: 80, md: 120 },
                            position: "absolute",
                            top: { xs: 15, sm: 20, md: 30 },
                            left: "30%",
                            transform: "translateX(-70%)",
                            borderRadius: "50%",
                            color: "white",
                            fontWeight: "bold",
                            backgroundColor: "#370665",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: { xs: 1, sm: 2, md: 3 },
                        }}
                    >
                        <Typography variant="body1" fontSize={{ xs: 15, sm: 20, md: 35 }}>20% Off</Typography>
                    </Box>
                </Box>

                <Box textAlign={"center"} display={'flex'} flexDirection={"column"} justifyContent={"space-evenly"}>
                    <Typography variant="h4" mt={"60px"} mb={8} >Exclusive Offer</Typography>
                    <Box>
                        <Typography variant="body1" fontSize={18} mb={3} >Offer ends in</Typography>
                        <Stack direction="row" justifyContent="center" gap={2} mb={1}>
                            <Stack spacing={0.5} alignItems="center">
                                <Box sx={timerBoxSx}>02</Box>
                                <Typography variant="caption" color="text.offer" fontSize={20}>
                                    Hours
                                </Typography>
                            </Stack>

                            <Stack spacing={0.5} alignItems="center">
                                <Box sx={timerBoxSx}>38</Box>
                                <Typography variant="caption" color="text.offer" fontSize={20}>
                                    Minutes
                                </Typography>
                            </Stack>

                            <Stack spacing={0.5} alignItems="center">
                                <Box sx={timerBoxSx}>49</Box>
                                <Typography variant="caption" color="text.offer" fontSize={20}>
                                    Seconds
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                    <Stack direction={"row"} mt={8} gap={2}>
                        <Button variant="outlined" color="primary" sx={{ borderRadius: "10px", boxShadow: "0px 0px 10px #F14A16" }}>
                            view in details
                        </Button>
                        <Button variant="contained" color="primary" sx={{ borderRadius: "10px", boxShadow: "0px 0px 10px #F14A16" }}>
                            Shop now
                        </Button>
                    </Stack>
                </Box>
            </Stack >
        </Box >
    )
}

export default Offer