/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react';
const iconBarItem = {
    float: "right",
    width: "20%",
    textAlign: "center",
    padding: "5px 0",
    transition: "all 0.3s ease",
    color: "white",
    fontSize: "20px",
    '&:hover': {
        'background-color': "#ddd",
        color: "black"
    },
    fontFamily: "Arial"
} as React.CSSProperties;

const IconBarItem: FunctionComponent<{ iconType: any }> = ({ iconType }) =>
    <a style={iconBarItem} className="iconBarItem"><i className={`fa ${!!iconType.class && iconType.class}`}>
        &nbsp; {iconType.text}
    </i></a>

export default IconBarItem;

