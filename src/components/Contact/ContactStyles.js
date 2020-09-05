import { makeStyles } from '@material-ui/core/styles';

const ContactStyles = makeStyles(() => ({

    title:{
        alignItems: "center",
        color: "#3F454A",
        display: "flex",
        fontFamily: "Caveat",
        fontSize: "80px",
        fontStyle: "normal",
        fontWeight: "bold",
        lineHeight: "38px",
        position: "absolute",
            left: "600px",
            top: "1580px",
        textAlign: "center",
        zIndex: "1",
    },

    shape: {
        position: "absolute",
        width: "464px",
        height: "85px",
        left: "520px",
        top: "1585px",
        opacity: "0.3"
    },
}));

export default ContactStyles;