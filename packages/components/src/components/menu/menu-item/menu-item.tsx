/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react'; 

const styles = {
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
};

interface MenuItemProps {
    label: string;
}

const MenuItem: FunctionComponent<MenuItemProps> = ({ label }) => <a css={styles}> {label}</a>

export default MenuItem;
