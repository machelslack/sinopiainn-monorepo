/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react';

const menudivider = css`font-family:Arial`

const MenuItem: FunctionComponent<{ label: any, href:any}> = ({ children,label,href }) =>
    <React.Fragment>
        {children}
        <a className="menuItem" href={href}> {label}</a>
        <span className="menudivider" css={menudivider}>| </span>
    </React.Fragment>

export default MenuItem;
