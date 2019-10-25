/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react'; // importing FunctionComponent


const scrollmenu = css`
backgroundColor: #333;
overflow: auto;
white-space: nowrap;
text-align: center;
  span {
    color:#CB410B;
  }
  a {
    display: inline-block;
    color: black;
    text-decoration: none;
    cursor: pointer;
    font-size: 17;
    padding: 14px 16px;
    margin: 10;
    text-align: center;
  }
`


export const MenuBar: FunctionComponent<{}> = ({ children }) => <section css={scrollmenu} className="scrollmenu"> {children} </section>

export default MenuBar;