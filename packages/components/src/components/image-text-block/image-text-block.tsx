/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react';

const container = {
    position: "relative",
    fontFamily: "Arial",
 
} as React.CSSProperties;

const textBlock = css`
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: black;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    width: 25%;
    font-weight:200;
    opacity: 0.7;
    filter: alpha(opacity=70)
`

/* Position the "next button" to the right */
const image = {
    width: "100%"
} as React.CSSProperties;

const textBlockHeading = css`
    border-bottom: thin dashed #AA9D2E;
    text-align:center;
    color:#AA9D2E;
    font-weight:200;
    font-size:20px;
`

const ImageTextBlock: FunctionComponent<{ imgSrc: any, heading: any, paragragh: any }> = ({ imgSrc, heading, paragragh }) =>
    <section className="container" style={container}>
        <img src={imgSrc} alt={heading} style={image} />
        <div className="text-block" css={textBlock}>
            <h4 css={textBlockHeading}>{heading}</h4>
            <p>{paragragh}</p>
        </div>
    </section>

export default ImageTextBlock;
