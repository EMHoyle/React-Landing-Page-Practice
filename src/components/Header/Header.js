import React from 'react';
import Gradient from '../Gradient/Gradient';
import { Box } from '@material-ui/core';
import Brush from '../../assets/hero-shape.png';
import FLogo from '../../assets/facebook-icon.svg';
import ILogo from '../../assets/instagram-icon.svg';
import YLogo from '../../assets/youtube-icon.svg';
import HStyles from './HStyles';


const Header = () => {

    const classes = HStyles();

    return (
        <div className="App">
            <Box>
                <Box  className={classes.hero}>
                    <div className={classes.logo}>Logo</div>

                    <div className={classes.title}>El secreto de tu cocina</div>

                    <img className={classes.brush} src={Brush} alt="brush"></img>

                    <button className={classes.facebook} ><img src={FLogo} alt="brush"></img></button>
                    <button className={classes.instagram} ><img src={ILogo} alt="brush"></img></button>
                    <button className={classes.youtube} ><img src={YLogo} alt="brush"></img></button>
                </Box>
            </Box>
            <Gradient/>
        </div>
    )
}

export default Header
