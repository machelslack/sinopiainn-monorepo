/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react'; // importing FunctionComponent


const logo = css`
display: block;
margin-left: auto;
margin-right: auto;
width:50%;
`


const Logo: FunctionComponent<{}> = () => <section> <img css={logo} className="logo" src="" alt="Sinopoa Inn Logo"></img></section>

export { Logo };

