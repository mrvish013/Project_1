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
        <Box m={10}>
            <Box
                mx={"auto"}
                textAlign={"center"}
                width={"70%"}
                mt={10}
                sx={{
                    background: "linear-gradient(90deg, rgba(55, 6, 101, 1) 0%, rgba(53, 88, 154, 1) 100%)",
                    padding: "20px",
                    borderRadius: "10px",
                }}
            >
                <Typography variant="h4" color="secondary" letterSpacing={1} sx={{ wordSpacing: 5 }}>Why directly buy from Musify?</Typography>
                <Stack direction="row" mt={4} flexWrap={"wrap"} spacing={15} color={"white"} alignItems="center" justifyContent={"center"}>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                        <LocalShippingIcon sx={{ fontSize: "45px" }} />
                        <Typography variant="body1" fontSize={23} fontWeight="100">Free Delivery</Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                        <VerifiedIcon sx={{ fontSize: "45px" }} />
                        <Typography variant="body1" fontSize={23} fontWeight="100">Verified Quality</Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                        <SupportAgentIcon sx={{ fontSize: "45px" }} />
                        <Typography variant="body1" fontSize={23} fontWeight="100">24/7 Support</Typography>
                    </Box>
                </Stack>
            </Box>

            <Stack direction="row" flexWrap="wrap" maxWidth={"100%"} gap={1} mt={15} justifyContent="center">
                <Box width={"50%"} sx={{ position: "relative" }}>
                    <Card
                        sx={{
                            width: 500,
                            height: 500,
                            position: "relative",
                            backgroundColor: "#35589A",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
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
                            width: 120,
                            height: 120,
                            borderRadius: "50%",
                            color: "white",
                            fontWeight: "bold",
                            backgroundColor: "#370665",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "absolute",
                            top: 30,
                            left: 20,
                        }}
                    >
                        <Typography variant="body1" fontSize={35} pl={4} >20% Off</Typography>
                    </Box>
                </Box>

                <Box textAlign={"center"} display={'flex'} mb={10} flexDirection={"column"} justifyContent={"space-between"}>
                    <Typography variant="h4" mt={"60px"} color="initial">Exclusive Offer</Typography>
                    <Box>
                        <Typography variant="body1" mb={3} color="initial">Offer ends in</Typography>
                        <Stack direction="row" justifyContent="center" gap={2} mb={1}>
                            <Stack spacing={0.5} alignItems="center">
                                <Box sx={timerBoxSx}>02</Box>
                                <Typography variant="caption" color="#370665" fontSize={20}>
                                    Hours
                                </Typography>
                            </Stack>

                            <Stack spacing={0.5} alignItems="center">
                                <Box sx={timerBoxSx}>38</Box>
                                <Typography variant="caption" color="#370665" fontSize={20}>
                                    Minutes
                                </Typography>
                            </Stack>

                            <Stack spacing={0.5} alignItems="center">
                                <Box sx={timerBoxSx}>49</Box>
                                <Typography variant="caption" color="#370665" fontSize={20}>
                                    Seconds
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                    <Stack direction={"row"} gap={2}>
                        <Button variant="outlined" color="primary" sx={{ width: "160px", height: "40px", textTransform: "lowercase", fontSize: "15px", borderRadius: "10px", boxShadow: "0px 0px 10px #F14A16" }}>
                            view in details
                        </Button>
                        <Button variant="contained" color="primary" sx={{ width: "160px", height: "40px", textTransform: "lowercase", fontSize: "15px", borderRadius: "10px", boxShadow: "0px 0px 10px #F14A16" }}>
                            Shop now
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default Offer