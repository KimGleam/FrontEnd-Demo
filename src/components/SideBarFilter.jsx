'use client'

import { useState } from 'react';
import {Accordion, AccordionSummary, AccordionDetails, Checkbox, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from "react";


const SidebarFilter = () => {
    const accordionStyle = {
        width: '20%',
        marginBottom: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    };

    const accordionSummaryStyle = {
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #ddd',
    };

    const accordionDetailsStyle = {
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
    };

    const [categoryChecked, setCategoryChecked] = useState(false);
    const [priceChecked, setPriceChecked] = useState(false);

    const handleCategoryChange = (event) => {
        setCategoryChecked(event.target.checked);
    };

    const handlePriceChange = (event) => {
        setPriceChecked(event.target.checked);
    };

    return (
        <div style={accordionStyle}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} style={accordionSummaryStyle}>
                    <Typography>카테고리</Typography>
                </AccordionSummary>
                <AccordionDetails style={accordionDetailsStyle}>
                    <Checkbox checked={categoryChecked} onChange={handleCategoryChange}/>
                    <Typography>카테고리 1</Typography>
                    {/* 다른 카테고리들도 추가 */}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} style={accordionSummaryStyle}>
                    <Typography>가격대</Typography>
                </AccordionSummary>
                <AccordionDetails style={accordionDetailsStyle}>
                    <Checkbox checked={priceChecked} onChange={handlePriceChange}/>
                    <Typography>1000원 미만</Typography>
                    <Checkbox checked={priceChecked} onChange={handlePriceChange}/>
                    <Typography>1000원 ~ 5000원</Typography>
                    <Checkbox checked={priceChecked} onChange={handlePriceChange}/>
                    <Typography>5000원 ~ 10000원</Typography>
                    <Checkbox checked={priceChecked} onChange={handlePriceChange}/>
                    <Typography>10000원 이상</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default SidebarFilter;
