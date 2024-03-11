'use client';

import React, { useState } from 'react';
import Box from "@mui/material/Box";
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import {pink} from "@mui/material/colors";



export default () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <Box>
         <KeyboardDoubleArrowLeftRoundedIcon sx={{ color: pink[500] }}/>
        </Box>
    );
};