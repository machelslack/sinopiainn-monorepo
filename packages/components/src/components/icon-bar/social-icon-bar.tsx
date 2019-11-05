/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react'; // importing FunctionComponent

const iconBar = css`
    position: relative;
    a {
        display: inline-block;
        text-align: center;
        padding: 16px;
        transition: all 0.3s ease;
        color: white;
        font-size: 20px;
    "& :hover" {
        background-color: #000
    }
    margin:3px;
    }
    
`

const facebook = {
    background: "#3B5998",
    color: "white",
    "&:hover": {
        "background-color": "#000"
      }
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

export const SocialIconBar: FunctionComponent<{}> = ({ }) => <div css={iconBar}>
    <a href="#" style={facebook}><i className="fa fa-facebook"></i></a>
    <a href="#" style={twitter}><i className="fa fa-twitter"></i></a>
    <a href="#" style={google}><i className="fa fa-google"></i></a>
    <a href="#" style={youtube}><i className="fa fa-youtube"></i></a>
</div>

export default SocialIconBar;

