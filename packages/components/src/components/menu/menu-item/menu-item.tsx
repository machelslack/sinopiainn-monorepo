/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react'; 

const menuItem = {
    cursor: "pointer",
    fontSize: 17,
    padding: "14px 16px",
    margin: 10,
    display: "block",
    color: "black",
    border: "red thin solid",
    'text-align': "center",
    'text-decoration': "none",
    '&:hover': {
        'background-color': "#ddd",
        color: "black"
    },
    float:"left"
} as React.CSSProperties;

const MenuItem: FunctionComponent<{label:any}> = ({ label }) => <a style={menuItem} className="menuItem"> {label}</a>

export default MenuItem;
