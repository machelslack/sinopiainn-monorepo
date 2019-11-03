/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react';

const MenuItem: FunctionComponent<{ label: any, href:any}> = ({ children,label,href }) =>
    <React.Fragment>
        {children}
        <a className="menuItem" href={href}> {label}</a>
        <span className="menudivider">| </span>
    </React.Fragment>

export default MenuItem;
