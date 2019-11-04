/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react'; // importing FunctionComponent


const logo = css`
display: block;
margin-left: auto;
margin-right: auto;
width:50%;
`
const logoSection = css`background-color:#f1f1f1;`


const Logo: FunctionComponent<{}> = () => <section css={logoSection}> <img css={logo} className="logo" src="assets/images/logo/logo.png" alt="Sinopoa Inn Logo"></img></section>

export { Logo };

