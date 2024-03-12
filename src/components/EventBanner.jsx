import {Grid, Paper} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import * as React from "react";


const EventBanner = () => {
    const events = [
        { id: 1, name: 'Event 1', image: 'https://images.unsplash.com/photo-1549388604-817d15aa0110' },
        { id: 2, name: 'Event 2', image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3' },
        { id: 3, name: 'Event 3', image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6' }
    ];

    return (
        <Box sx={{ mb: 2, paddingTop: 8, height: 500 }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs sx={{ mb: 2, height: 500 }}>
                    <Carousel cycleNavigation={true} navButtonsAlwaysVisible={true} autoPlay={true}>
                        {events.map((item,i)=> (
                            <Paper key={item.id} style={{ width: '100%', height: 500 }}>
                                <img src={item.image} alt="" style={{ width: '100%', height: '100%' }}/>
                            </Paper>
                        ))}
                    </Carousel>
                </Grid>
            </Grid>
        </Box>
    )
}

export default EventBanner;