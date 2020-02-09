/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from "react";
import { SixColumnRow } from "../../layouts/row";

const container = {
  position: "relative",
  fontFamily: "Arial"
} as React.CSSProperties;

const textBlock = css`
  position: absolute;
  top: 20%;
  right: 20px;
  background-color: black;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  width: 25%;
  font-weight: 200;
  opacity: 0.7;
  filter: alpha(opacity=70);
  font-family: "FontspringRegular";
  @media (max-width: 1200px) {
    top: 15%;
    width: 80%;
    margin:0 auto;
    right:0;
    left: 20px;
    text-align:center;
  }
  @media (max-width: 600px) {
    top: 0;
    left: 5px;
  }
  @media (max-width: 992px) {
    top: 7%;
    left: 5px;
  }
`;

/* Position the "next button" to the right */
const image = {
  width: "100%"
} as React.CSSProperties;

const textBlockHeading = css`
  border-bottom: thin dashed #aa9d2e;
  text-align: center;
  font-size: xxx-large;
  font-weight: 200;
  font-family: "FontspringLight";
  padding-bottom: 5px;
  @media (max-width: 1200px) {
    font-size: xx-large;
  }
 }
`;

const textBlockParagraph = css`
  position: relative;
  top: -40px;
  @media (max-width: 1200px) {
    top: -20px;
  }
  @media (max-width: 583) {
    display: none;
  }
`;

const iconTypes = [
  {
    class: "fa fa-coffee",
    text: "",
    title: "Jamaican Breakfast",
    subtitle: "included in our room rates"
  },
  {
    class: "fa fa-shield",
    text: "",
    title: "On Site Security",
    subtitle: "available during your stay"
  },
  {
    class: "fa fa-car",
    text: "",
    title: "Free Parking",
    subtitle: "for your entire stay"
  },
  {
    class: "fa fa-bus",
    text: "",
    title: "Airport Shuttle",
    subtitle: "for all guests"
  },
  {
    class: "fa fa-wifi",
    text: "",
    title: "WIFI 24/7",
    subtitle: "connection in all rooms "
  },
  {
    class: "fa fa-shopping-basket",
    text: "",
    title: "Caribbean Inspired Baskets",
    subtitle: "for 3 nights stay or more"
  }
];

const ImageTextBlock: FunctionComponent<{
  imgSrc: any;
  heading: any;
  paragragh: any;
}> = ({ imgSrc, heading, paragragh }) => (
  <section className="container" style={container}>
    <img src={imgSrc} alt={heading} style={image} />
    <div className="text-block" css={textBlock}>
      <h4 css={textBlockHeading}>{heading}</h4>
      <p css={textBlockParagraph}>{paragragh}</p>
    </div>
    <div
      css={css`
         {
          @media (max-width: 992px) {
            display: none;
          }
        }
      `}
    >
      <SixColumnRow iconTypes={iconTypes} />
    </div>
  </section>
);

export default ImageTextBlock;
