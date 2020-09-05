import { makeStyles } from '@material-ui/core/styles';

const CStyles = makeStyles({
    root: {
        position: "absolute",
        width: "270px",
        height: "438px",
        left: "435px",
        top: "966px",
        filter: "drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.07))",
    },

    title: {
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "24px",
        /* or 133% */

        display: "flex",
        alignItems: "center",
        letterSpacing: "0.01em",

        /* #24272A */

        color: "#3F454A",
    },

    content: {
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "24px",
        /* or 171% */


        color: "#3F454A",
    }
});

export default CStyles;