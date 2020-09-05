import { makeStyles } from '@material-ui/core/styles';

const TStyles = makeStyles(() => ({

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
            left: "500px",
        textAlign: "center",
        zIndex: "1",
    },

    shape: {
        position: "absolute",
        width: "464px",
        height: "85px",
        left: "520px",
        top: "815px",
        opacity: "0.3"
    },
}));

export default TStyles;
