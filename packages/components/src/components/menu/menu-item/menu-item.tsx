/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react';

const menuItem = {
    display: "inline-block",
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: 17,
    padding: "14px 16px",
    margin: 10,
    border: "red thin solid",
    'text-align': "center",
    'text-decoration': "none",
    '&:hover': {
        'background-color': "#ddd",
        color: "black"
    },
} as React.CSSProperties;

const MenuItem: FunctionComponent<{ label: any }> = ({ label }) =>
    <React.Fragment>
        <a style={menuItem} className="menuItem"> {label}</a>
        <span className="menudivider">| </span>
    </React.Fragment>

export default MenuItem;
