import Box from "@mui/material/Box";
import {Container, Typography} from "@mui/material";
import ItemsCarousel from "react-items-carousel/src";
import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import {blue} from "@mui/material/colors";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import Card from "@mui/joy/Card";
import {CardOverflow} from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import * as React from "react";
import {useState} from "react";


const DiscountProduct = () => {
    const [activeDiscountIndex, setActiveDiscountIndex] = useState(0);
    const chevronWidth = 40;

    const discounts = [
        { id: 1, name: 'Discount 1', price: '$5', image: 'https://images.unsplash.com/photo-1549388604-817d15aa0110' },
        { id: 2, name: 'Discount 2', price: '$10',image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3'  },
        { id: 3, name: 'Discount 3', price: '$15',image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6' },
        { id: 4, name: 'Discount 4', price: '$20',image: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31' },
        { id: 5, name: 'Discount 5', price: '$20',image: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622' },
        { id: 6, name: 'Discount 6', price: '$20',image: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62' }
    ];

    return (
        <Container maxWidth="xl">
            <Box sx={{p: 2, mb: 2, marginTop: 7, textAlign: 'center'}}>
                <Typography variant="h4" mb={2}>할인 상품</Typography>
                <div style={{padding: `0 ${chevronWidth}px`, width: 1200, marginLeft: 90}}>
                    <ItemsCarousel
                        requestToChangeActive={setActiveDiscountIndex}
                        activeItemIndex={activeDiscountIndex}
                        numberOfCards={4}
                        gutter={0}
                        leftChevron={<KeyboardDoubleArrowLeftRoundedIcon sx={{ color: blue[500], fontSize: 40}} color="primary"/>}
                        rightChevron={<KeyboardDoubleArrowRightRoundedIcon sx={{ color: blue[500], fontSize: 40}} color="primary"/>}
                        outsideChevron
                        chevronWidth={chevronWidth}
                    >
                        {discounts.map(card => (
                            <Card key={card.id} sx={{ width: 245, maxWidth: '100%', boxShadow: 'lg' }}>
                                <CardOverflow>
                                    <AspectRatio sx={{ minWidth: 200 }}>
                                        <img
                                            src={card.image}
                                            srcSet={`${card.image} 2x`}
                                            loading="lazy"
                                            alt=""
                                        />
                                    </AspectRatio>
                                </CardOverflow>
                                <CardContent>
                                    <Typography level="body-xs">Category</Typography>
                                    <Typography
                                        level="title-lg"
                                        sx={{ mt: 1, fontWeight: 'xl' }}
                                    >
                                        {card.price}
                                    </Typography>
                                    <Typography level="body-sm">
                                        (Only <b>10</b> left in stock!)
                                    </Typography>
                                </CardContent>
                                <CardOverflow>
                                    <Button variant="solid" color="primary" size="lg">
                                        Add to cart
                                    </Button>
                                </CardOverflow>
                            </Card>
                        ))}
                    </ItemsCarousel>
                </div>
            </Box>
        </Container>
    )
}

export default DiscountProduct;