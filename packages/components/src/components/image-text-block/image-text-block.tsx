/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react';
import { SixColumnRow } from "../../layouts/row";

const container = {
    position: "relative",
    fontFamily: "Arial",

} as React.CSSProperties;

const textBlock = css`
    position: absolute;
    top: 30%;
    right: 20px;
    background-color: black;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    width: 25%;
    font-weight:200;
    opacity: 0.7;
    filter: alpha(opacity=70);
    font-family: 'FontspringRegular';
`

/* Position the "next button" to the right */
const image = {
    width: "100%"
} as React.CSSProperties;

const textBlockHeading = css`
    border-bottom: thin dashed #AA9D2E;
    text-align:center;
  font-size:xxx-large;
  font-weight:200;
  font-family: 'FontspringLight';
  padding-bottom:5px;
`

const textBlockParagraph = css`
position:relative;top:-40px;
`

const iconTypes = [
    { class: 'fa fa-coffee', text: '', title: 'Jamaican Breakfast', subtitle: 'included in our room rates' },
    { class: 'fa fa-shield', text: '', title: 'On Site Security', subtitle: 'during your stay' },
    { class: 'fa fa-car', text: '', title: 'Free Parking', subtitle: 'for your entire stay' },
    { class: 'fa fa-bus', text: '', title: 'Airport Shuttle', subtitle: 'for all guests' },
    { class: 'fa fa-wifi', text: '', title: 'WIFI 24/7', subtitle: 'connection in all rooms ' },
    { class: 'fa fa-shopping-basket', text: '', title: 'Caribbean Inspired Baskets', subtitle: 'for 3 nights stay or more' },
]


const ImageTextBlock: FunctionComponent<{ imgSrc: any, heading: any, paragragh: any }> = ({ imgSrc, heading, paragragh }) =>
    <section className="container" style={container}>
        <img src={imgSrc} alt={heading} style={image} />
        <div className="text-block" css={textBlock}>
            <h4 css={textBlockHeading}>{heading}</h4>
            <p css={textBlockParagraph}>{paragragh}</p>
        </div>
        <SixColumnRow iconTypes={iconTypes}/>
    </section>

export default ImageTextBlock;
