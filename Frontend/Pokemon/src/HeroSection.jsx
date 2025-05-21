import {
    Box,
    Button,
    Typography,
    Stack,
    useTheme,
    useMediaQuery,
    Card,
    CardContent
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import heroimg from "./assets/Hero.png";
import headphone from "./assets/headphone.png";

function HeroSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                backgroundImage: `url(${heroimg})`,
                backgroundSize: isMobile ? "cover" : "600px",
                backgroundPosition: "right center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                mt: { xs: 5, md: -20 },
                px: { xs: 2, md: 10 },
                pt: { xs: 0, sm: 0, md: 30, lg: 4 },
                pb: 10,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
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
                    <Button variant="contained" startIcon={<ShoppingCartIcon />} color="primary">
                        Add to Cart
                    </Button>

                    <Button variant="outlined" color="primary">
                        Buy Now
                    </Button>
                </Stack>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 2,
                    alignItems: "center",
                    justifyContent: "center",
                    mt: { xs: 15, md: 70 },
                    width: { xs: "100%", md: "auto" },
                }}
            >
                {[1, 2, 3].map((_, index) => (
                    <Card
                        key={index}
                        sx={{
                            maxWidth: 300,
                            borderRadius: 4,
                            height: 180,
                            background: "linear-gradient(to bottom, #FFFFFFB2,#FFFFFF1A)", position: "relative",
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
                                    top: "-60px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "110px",
                                }}
                            />
                            <Typography
                                gutterBottom
                                variant="body1"
                                fontWeight={"500"}
                                component="div"
                                align="center"
                            >
                                Wireless Headphone
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 2,
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ fontSize: "20px", fontWeight: "bold" }}
                                >
                                    $120
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.primary"
                                    sx={{
                                        fontSize: "13px",
                                        textDecoration: "line-through",
                                    }}
                                >
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
