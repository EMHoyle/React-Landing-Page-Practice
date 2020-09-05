import React from 'react';
import { Box } from '@material-ui/core';
import Shape from '../../assets/heading-shape.png';
import ContactStyles from './ContactStyles';

const Contact = ({content}) => {

    const classes= ContactStyles();

    return (
        <Box>
            <div className={classes.title}>{content}</div>
            <img className={classes.shape} src={Shape} alt="shape"></img>
        </Box>
    )
}

export default Contact