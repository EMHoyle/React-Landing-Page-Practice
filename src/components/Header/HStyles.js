import { makeStyles } from '@material-ui/core/styles';
import Hero from '../../assets/hero-background.jpg';

const HStyles = makeStyles(() => ({

    brush: {
        display: "flex",
        position: "relative",
            top: "430px",
            rigth: "605px",
            left: "-380px",
            bottom: "188px",
        width: "1312px",
        height: "174px",
    },

    facebook: {
        height: "62px",
        width: "62px",
        borderRadius: "50%",
        position: "absolute",
        left: "1226px",
        top: "42px",
        background: "rgba(255, 255, 255, 0.15)",
        border: "3px solid #009CD9",
        backdropFilter: "blur(14px)",
    },

    instagram: {
        height: "62px",
        width: "62px",
        borderRadius: "50%",
        position: "absolute",
        left: "1316px",
        top: "42px",
        background: "rgba(255, 255, 255, 0.15)",
        border: "3px solid #B72C2C",
        backdropFilter: "blur(14px)",
    },

    youtube: {
        height: "62px",
        width: "62px",
        borderRadius: "50%",
        position: "absolute",
        left: "1406px",
        top: "42px",
        background: "rgba(255, 255, 255, 0.15)",
        border: "3px solid #D8AD3D",
        backdropFilter: "blur(14px)",
    },

    hero: {
        backgroundImage: `url(${Hero})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "805px",
        width: "100%",
    },

    logo: {
        color: "#3F454A",
        display: "flex",
        fontFamily: "Caveat",
        fontSize: "120px",
        fontStyle: "normal",
        fontWeight: "bold",
        lineHeight: "100px",
        position: "absolute",
            left: "227px",
            right: "774px",
            top: "64px",
            bottom: "652px",
            zIndex: "1"
    },

    title: {
        alignItems: "center",
        color: "#3F454A",
        display: "flex",
        fontFamily: "Caveat",
        fontSize: "120px",
        fontStyle: "normal",
        fontWeight: "bold",
        lineHeight: "100px",
        position: "absolute",
            left: "227px",
            right: "774px",
            top: "298px",
            bottom: "307px",
            zIndex: "1"
    }
}));

export default HStyles;