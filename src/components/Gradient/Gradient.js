import React from 'react';
import { Box } from '@material-ui/core';
import GStyles from './GStayles';



const Gradient = () => {

    const classes = GStyles();

    return (
        <Box className={classes.gradient}/>
    )
}

export default Gradient;
