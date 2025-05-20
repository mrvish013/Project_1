import { Box, Button, Typography, Stack, useTheme, useMediaQuery, Card, CardContent } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import heroimg from "./assets/Hero.png";
import headphone from "./assets/headphone.png";

function HeroSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                backgroundColor: "#fff",
                backgroundImage: `url(${heroimg})`,
                backgroundSize: isMobile ? "cover" : "600px",
                backgroundPosition: "right center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                mt: { xs: -2, md: -20 },
                px: { xs: 2, md: 10 },
                pt: { xs: 14, sm: 0, md: 20, lg: 0 },
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
            }}
        >
            <Box
                sx={{
                    maxWidth: { xs: "100%", md: "50%" },
                    textAlign: { xs: "center", md: "left" },
                }}
            >
                <Box
                    sx={{
                        maxWidth: { xs: "100%", md: "100%", lg: "70%" }
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "36px", sm: "44px", md: "64px" },
                            letterSpacing: 1,
                            mb: 3,
                            lineHeight: 1.2,
                        }}
                    >
                        Let's Dive in{" "}
                        <Box component="span" sx={{ color: "darkorange" }}>
                            Music
                        </Box>{" "}
                        World
                    </Typography>
                </Box>

                <Typography
                    variant="body2"
                    sx={{
                        color: "gray",
                        fontSize: { xs: "14px", sm: "16px", md: "20px" },
                        letterSpacing: 1,
                        wordSpacing: 2,
                        lineHeight: 1.6,
                        mb: 4,
                        maxWidth: { xs: "100%", md: "80%" },
                        mx: { xs: "auto", md: 0 },
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores
                    veritatis necessitatibus dignissimos ullam, quaerat corporis illo animi officia
                    cupiditate numquam distinctio sint aperiam?
                </Typography>

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    justifyContent={{ xs: "center", md: "flex-start" }}
                    alignItems="center"
                >
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ borderRadius: 3, height: 50, width: 160, border: "3px solid #F14A16", fontWeight: "600", color: "white" }}
                    >
                        Shop Now
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<ShoppingCartIcon />}
                        sx={{ borderRadius: 3, height: 50, width: 160, border: "3px solid" }}
                    >
                        Add to Cart
                    </Button>
                </Stack>
            </Box>

            <Box sx={{
                display: "flex",
                gap: 2,
                position: "absolute",
                bottom: 70,
                right: 10,
            }}>
                {[1, 2, 3].map((_, index) => (
                    <Card
                        key={index}
                        sx={{
                            maxWidth: "300px",
                            borderRadius: 4,
                            height: "180px",
                            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.7))",
                            position: "relative",
                            overflow: "visible",
                            pt: 10,
                        }}
                    >
                        <CardContent>
                            <img
                                src={headphone}
                                alt=""
                                style={{
                                    position: "absolute",
                                    top: "-60px", // Adjusted positioning for better visuals
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "110px", // Balanced size
                                }}
                            />
                            <Typography gutterBottom variant="h5" component="div">
                                Wireless Headphone
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "start", gap: 2 }}>
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: "20px", fontWeight: "bold" }}>
                                    $120
                                </Typography>
                                <Typography variant="body1" color="text.primary" sx={{ fontSize: "13px", textDecoration: "line-through" }}>
                                    $180
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default HeroSection;
