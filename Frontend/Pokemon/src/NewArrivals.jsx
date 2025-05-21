import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Card, CardContent, Button } from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import new1 from "./assets/New1.png";
import new2 from "./assets/New2.png";
import new3 from "./assets/New3.png";

const images = [new1, new2, new3];

function NewArrivals() {
    return (
        <Box textAlign="center" width={"100%"}>
            <Typography variant="h3" fontWeight={700} >New Arrivals</Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 15, flexWrap: "wrap", mt: 10 }}>
                {[1, 2, 3].map((_, index) => (
                    <Card key={index} sx={{ backgroundColor: "#370665", border: "3px solid #35589A", color: "rgb(201, 195, 195)" }}>
                        <CardContent sx={{ padding: 0 }}>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Box
                                    component="img"
                                    src={images[index]}
                                    alt={`Product ${index + 1}`}
                                    sx={{ width: "340px", height: 250, objectFit: "contain" }}
                                />
                            </Box>
                            <Typography variant="h6" fontWeight="bold" mt={2} textAlign="left">
                                Wireless Headphone <br />with Dolby Surround Sound
                            </Typography>

                            <ul style={{ textAlign: "left" }}>
                                <li>Truely Wireless</li>
                                <li>Dolby Surround Sound</li>
                                <li>13hrs of playback time</li>
                                <li>Made in Germany</li>
                            </ul>

                            <Typography variant="h5" color="text.secondary" textAlign="left" mt={2}>
                                $145
                            </Typography>

                            <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 1, padding: 0 }}>
                                <Button variant="outlined" startIcon={<ShoppingCartIcon />} color="primary">
                                    Add to Cart
                                </Button>
                                <Button variant="contained" color="primary">
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

export default NewArrivals;
