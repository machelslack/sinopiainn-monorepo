"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = require("react");
/* Slideshow container */
const slideshowContainer = {
    maxWidth: "1000px",
    position: "relative",
    margin: "auto"
};
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
};
/* Position the "next button" to the right */
const slides = {
    display: "none",
    "backgroundColor": "white",
    padding: "10px",
    "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
};
const slidesImage = {
    width: "100%",
    verticalAlign: "middle"
};
/* Caption text */
const slideCaption = {
    color: "#f2f2f2",
    fontSize: "15px",
    padding: "8px 12px",
    position: "absolute",
    bottom: "8px",
    width: "100%",
    textAlign: "center"
};
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
class SlideShowSlide extends react_1.Component {
    render() {
        return (core_1.jsx("div", { className: `mySlides${this.props.slideNumber} fade`, style: slides },
            core_1.jsx("img", { src: this.props.imgSrc, style: slidesImage }),
            core_1.jsx("div", { className: "text", style: slideCaption })));
    }
}
exports.default = SlideShowSlide;