'use client';

import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { CardActions, IconButton } from '@mui/material';
import {BookmarkAdd} from "@mui/icons-material";


export default () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <div style={{ padding: `0 ${chevronWidth}px`, width: 1200 }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={4}
                gutter={0}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                <Card sx={{ width: 250 }}>
                    <div>
                        <Typography level="title-lg">Yosemite National Park</Typography>
                        <Typography level="body-sm">April 24 to May 02, 2021</Typography>
                    </div>
                    <AspectRatio minHeight="120px" maxHeight="200px">
                        <img
                            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <CardContent orientation="horizontal">
                        <div>
                            <Typography level="body-xs">Total price:</Typography>
                            <Typography fontSize="lg" fontWeight="lg">
                                $2,900
                            </Typography>
                        </div>
                        <Button
                            variant="solid"
                            size="md"
                            color="primary"
                            aria-label="Explore Bahamas Islands"
                            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                        >
                            Explore
                        </Button>
                    </CardContent>
                </Card>
                <Card sx={{ width: 250 }}>
                    <div>
                        <Typography level="title-lg">Yosemite National Park</Typography>
                        <Typography level="body-sm">April 24 to May 02, 2021</Typography>
                    </div>
                    <AspectRatio minHeight="120px" maxHeight="200px">
                        <img
                            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <CardContent orientation="horizontal">
                        <div>
                            <Typography level="body-xs">Total price:</Typography>
                            <Typography fontSize="lg" fontWeight="lg">
                                $2,900
                            </Typography>
                        </div>
                        <Button
                            variant="solid"
                            size="md"
                            color="primary"
                            aria-label="Explore Bahamas Islands"
                            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                        >
                            Explore
                        </Button>
                    </CardContent>
                </Card>
                <Card sx={{ width: 250 }}>
                    <div>
                        <Typography level="title-lg">Yosemite National Park</Typography>
                        <Typography level="body-sm">April 24 to May 02, 2021</Typography>
                    </div>
                    <AspectRatio minHeight="120px" maxHeight="200px">
                        <img
                            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <CardContent orientation="horizontal">
                        <div>
                            <Typography level="body-xs">Total price:</Typography>
                            <Typography fontSize="lg" fontWeight="lg">
                                $2,900
                            </Typography>
                        </div>
                        <Button
                            variant="solid"
                            size="md"
                            color="primary"
                            aria-label="Explore Bahamas Islands"
                            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                        >
                            Explore
                        </Button>
                    </CardContent>
                </Card>
                <Card sx={{ width: 250 }}>
                    <div>
                        <Typography level="title-lg">Yosemite National Park</Typography>
                        <Typography level="body-sm">April 24 to May 02, 2021</Typography>
                    </div>
                    <AspectRatio minHeight="120px" maxHeight="200px">
                        <img
                            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <CardContent orientation="horizontal">
                        <div>
                            <Typography level="body-xs">Total price:</Typography>
                            <Typography fontSize="lg" fontWeight="lg">
                                $2,900
                            </Typography>
                        </div>
                        <Button
                            variant="solid"
                            size="md"
                            color="primary"
                            aria-label="Explore Bahamas Islands"
                            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                        >
                            Explore
                        </Button>
                    </CardContent>
                </Card>
                <Card sx={{ width: 250 }}>
                    <div>
                        <Typography level="title-lg">Yosemite National Park</Typography>
                        <Typography level="body-sm">April 24 to May 02, 2021</Typography>
                    </div>
                    <AspectRatio minHeight="120px" maxHeight="200px">
                        <img
                            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <CardContent orientation="horizontal">
                        <div>
                            <Typography level="body-xs">Total price:</Typography>
                            <Typography fontSize="lg" fontWeight="lg">
                                $2,900
                            </Typography>
                        </div>
                        <Button
                            variant="solid"
                            size="md"
                            color="primary"
                            aria-label="Explore Bahamas Islands"
                            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                        >
                            Explore
                        </Button>
                    </CardContent>
                </Card>
            </ItemsCarousel>
        </div>
    );
};