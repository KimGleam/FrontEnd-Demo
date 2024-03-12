import {Grid, Paper, Typography} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import * as React from "react";


const PromotionBanner = () => {
    const promotions = [
        { id: 1, name: 'Promotion 1', image: 'https://images.unsplash.com/photo-1549388604-817d15aa0110' },
        { id: 2, name: 'Promotion 2', image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3' },
        { id: 3, name: 'Promotion 3', image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6' }
    ];

    return (
        <Box sx={{mb: 2, marginTop: 1, height: 500}}>
            <Typography variant="h4" mb={2}>프로모션 상품</Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs sx={{mb: 2, height: 500}}>
                    <Carousel cycleNavigation={true} navButtonsAlwaysVisible={true} autoPlay={true}>
                        {promotions.map((item, i) => (
                            <Paper key={item.id} style={{width: '100%', height: 500}}>
                                <img src={item.image} alt="" style={{width: '100%', height: '100%'}}/>
                            </Paper>
                        ))}
                    </Carousel>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PromotionBanner;