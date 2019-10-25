/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react';

const MenuItem: FunctionComponent<{ label: any }> = ({ label }) =>
    <React.Fragment>
        <a className="menuItem"> {label}</a>
        <span className="menudivider">| </span>
    </React.Fragment>

export default MenuItem;
