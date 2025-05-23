import React from "react";
import { Box, Typography, Card, CardContent, Button, } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import headphones from "./assets/Headphones.png"

function Trend() {
    return (
        <Box sx={{ textAlign: "center", py: 5 }}>
            <Typography variant="h3" fontWeight="bold">Popular Trend</Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 15, flexWrap: "wrap", mt: 4 }}>
                {[1, 2, 3].map((_, index) => (
                    <Card key={index} sx={{ backgroundColor: "black", color: "rgb(201, 195, 195)" }}>
                        <CardContent>
                            <Box
                                component="img"
                                src={headphones}
                                alt="Wireless Headphone"
                                sx={{ width: "100%", height: "auto", alignItems: "center", borderRadius: 2 }}
                            />
                            <Typography variant="h6" fontWeight="bold" mt={2} textAlign={"left"}>
                                Wireless Headphone <br />with Dolby Surround Sound
                            </Typography>

                            <ul style={{ textAlign: "left" }}>
                                <li>Truely Wireless</li>
                                <li>Dolby Surround Sound</li>
                                <li>13hrs of playback time</li>
                                <li>Made in Germany</li>
                            </ul>

                            <Typography variant="h5" color="text.secondary" textAlign={"left"} mt={2}>
                                $145
                            </Typography>

                            <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 1 }}>
                                <Button variant="contained" startIcon={<ShoppingCartIcon />} color="primary">
                                    Add to Cart
                                </Button>

                                <Button variant="outlined" color="primary">
                                    Buy Now
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default Trend;
