import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {Chat} from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";

export default function IntroDivider() {
    return (
        <Card variant="outlined" sx={{ maxWidth: 360 }}>
            <Box sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h6" component="div">
                        [강인한] 스트랩
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h20" component="div" sx={{ textDecoration: 'line-through' }}>
                        12,000원
                    </Typography>
                </Stack>
                <Typography gutterBottom variant="h6" component="div">
                    9,000원
                </Typography>
                <ListItemIcon>
                    <Chat fontSize="small" />
                    <Typography gutterBottom variant="h10" component="div">
                        999+
                    </Typography>
                </ListItemIcon>
            </Box>
            <Divider />
        </Card>
    );
}