import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Stack } from '@mui/material'
import image1 from "./assets/image1.png"
import image2 from "./assets/image2.png"
import image3 from "./assets/image3.png"
import image4 from "./assets/image4.png"

const images = [image1, image2, image3, image4]

function TryOut() {
    return (
        <Box textAlign={'center'} pt={10}>
            <Typography variant="h3" fontWeight={700} >Try out other Accessories</Typography>
            <Stack width={"80%"} my={15} mx={"auto"}>
                <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "repeat(2, 2fr)" }} gap={3}>
                    {[1, 2, 3, 4].map((_, index) => (
                        <Box key={index} component="img" src={images[index]} alt="Gallery Image" sx={{ width: "100%", borderRadius: 2 }} />
                    ))}
                </Box>
            </Stack>
        </Box>
    )
}

export default TryOut