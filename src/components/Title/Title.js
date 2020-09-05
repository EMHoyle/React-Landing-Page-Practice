import React from 'react';
import { Box } from '@material-ui/core';
import Shape from '../../assets/heading-shape.png';
import TStyles from './TStyles';

const Title = ({content}) => {

    const classes= TStyles();

    return (
        <Box>
            <div className={classes.title}>{content}</div>
            <img className={classes.shape} src={Shape} alt="shape"></img>
        </Box>
    )
}

export default Title
