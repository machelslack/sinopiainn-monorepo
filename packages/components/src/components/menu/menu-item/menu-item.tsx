/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react';

const MenuItem: FunctionComponent<{ label: any }> = ({ children,label }) =>
    <React.Fragment>
        {children}
        <a className="menuItem"> {label}</a>
        <span className="menudivider">| </span>
    </React.Fragment>

export default MenuItem;
