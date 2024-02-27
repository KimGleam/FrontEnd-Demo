'use client';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
    },
}));

const DashboardContent = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
                Welcome to the Dashboard
            </Typography>
            <Typography variant="body1">
                This is your personalized dashboard. Here you can view important information and manage your tasks.
            </Typography>
        </Paper>
    );
};

export default DashboardContent;
