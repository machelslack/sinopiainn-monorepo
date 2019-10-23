import React, { FunctionComponent } from 'react'; // importing FunctionComponent

const iconBar = {
    position: "relative",
    top: "50%",
    "-webkitTransform": "translateY(-50%)",
    "-mstransform": "translateY(-50%)",
    "transform": "translateY(-50%)",
    "& a":{
        "display": "inline-block",
        "textAlign": "center",
        padding: "16px",
        transition: "all 0.3s ease",
        color: "white",
        fontSize: "20px",
        "&:hover": {
            backgroundColor: "#000"
        }
    }
} as React.CSSProperties;

const facebook = {
    background: "#3B5998",
    color: "white",
} as React.CSSProperties;

const twitter = {
    background: "#55ACEE",
    color: "white"
} as React.CSSProperties;

const google = {
    background: "#dd4b39",
    color: "white"
} as React.CSSProperties;

const linkedin = {
    background: "#007bb5",
    color: "white"
} as React.CSSProperties;

const youtube = {
    background: "#bb0000",
    color: "white"
} as React.CSSProperties;

export const SocialIconBar: FunctionComponent<{}> = ({ }) => <div style={iconBar}>
    <a href="#" style={facebook}><i className="fa fa-facebook"></i></a>
    <a href="#" style={twitter}><i className="fa fa-twitter"></i></a>
    <a href="#" style={google}><i className="fa fa-google"></i></a>
    <a href="#" style={linkedin}><i className="fa fa-linkedin"></i></a>
    <a href="#" style={youtube}><i className="fa fa-youtube"></i></a>
</div>

export default SocialIconBar;

