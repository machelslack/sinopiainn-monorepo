/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent, Children } from 'react';

const ul = css` list-style:none; width:100%;padding:0px; `;

const UnorderedList: FunctionComponent<{}> = ({ children }) => <React.Fragment>
    <ul css={ul}> {children} </ul>
</React.Fragment>

export default UnorderedList;
