/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";
import React, { FunctionComponent } from "react";

/* Slideshow container */
const slideshowContainer = {
  maxWidth: "1000px",
  position: "relative",
  margin: "auto"
} as React.CSSProperties;

/* Next & previous buttons */
const buttons = {
  cursor: "pointer",
  position: "absolute",
  top: "50%",
  width: "auto",
  padding: "16px",
  marginTop: "-22px",
  color: "white",
  fontWeight: "bold",
  fontSize: "18px",
  transition: "0.6s ease",
  borderRadius: "0 3px 3px 0",
  userSelect: "none",
  "&:hover": " background - color: rgba(0, 0, 0, 0.8)"
} as React.CSSProperties;

/* Position the "next button" to the right */
const slides = {
  display: "none",
  verticalAlign: "middle",
  textAlign: "center"
} as React.CSSProperties;

const slidesImage = {
  width: "100%",
  verticalAlign: "middle"
} as React.CSSProperties;

/* Caption text */
const slideCaption = {
  color: "#f2f2f2",
  fontSize: "15px",
  padding: "8px 12px",
  position: "absolute",
  bottom: "8px",
  width: "100%",
  textAlign: "center"
} as React.CSSProperties;

// /* Fading animation */
// .fade {
//     -webkit-animation-name: fade;
//     -webkit-animation-duration: 1.5s;
//     animation-name: fade;
//     animation-duration: 1.5s;
//   }

//   @-webkit-keyframes fade {
//     from {opacity: .4}
//     to {opacity: 1}
//   }

//   @keyframes fade {
//     from {opacity: .4}
//     to {opacity: 1}
//   }

// css={css`
// animation: ${bounce} 1s ease infinite;
// `}

// const bounce = keyframes`
//   from, 20%, 53%, 80%, to {
//     transform: translate3d(0,0,0);
//   }

//   40%, 43% {
//     transform: translate3d(0, -30px, 0);
//   }

//   70% {
//     transform: translate3d(0, -15px, 0);
//   }

//   90% {
//     transform: translate3d(0,-4px,0);
//   }
// `

const large = {};

const medium = {};

const SlideShowTextSlide: FunctionComponent<{
  quote: any;
  quoteLink: any;
  quoteSource: any;
  slideNumber: any;
}> = ({ quote, quoteLink, quoteSource, slideNumber }) => (
  <div className={`mySlides${slideNumber} fade`} style={slides}>
    <span style={large}>
      <i>
        <q
          css={css`
             {
              font-family: Arial;
            }
          `}
        >
          {quote}{" "}
        </q>
      </i>
    </span>
    <br></br>
    <span style={medium}>
      <br></br>
      <a href={quoteLink}>
        <b>{quoteSource} </b>
      </a>
    </span>
  </div>
);

export default SlideShowTextSlide;
