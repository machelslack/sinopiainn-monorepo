/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react';
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
const iconBarItem = {
    float: "left",
    width: "20%",
    textAlign: "center",
    padding: "12px 0",
    transition: "all 0.3s ease",
    color: "white",
    fontSize: "36px",
    '&:hover': {
        'background-color': "#ddd",
        color: "black"
    },
} as React.CSSProperties;

const IconBarItem: FunctionComponent<{ iconType: any }> = ({ iconType }) => <a style={iconBarItem} className="iconBarItem"><i className={iconType}></i></a>

export default IconBarItem;
