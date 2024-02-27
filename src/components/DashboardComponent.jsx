'use client';

import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const DashboardComponent = () => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        // 여기에 글 저장 또는 수정하는 로직을 작성합니다.
        console.log('Content saved:', content);
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>글 작성</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>글 작성</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="content"
                        label="내용"
                        type="text"
                        fullWidth
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>취소</Button>
                    <Button onClick={handleSave}>저장</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DashboardComponent;
