"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
/* Slideshow container */
var slideshowContainer = {
    maxWidth: "1000px",
    position: "relative",
    margin: "auto"
};
/* Next & previous buttons */
var buttons = {
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
var slides = {
    display: "none"
};
var slidesImage = {
    width: "100%",
    verticalAlign: "middle"
};
/* Caption text */
var slideCaption = {
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
var SlideShowSlide = function (_a) {
    var caption = _a.caption;
    return core_1.jsx("div", { className: "mySlides fade", style: slides },
        core_1.jsx("img", { src: "img_snow_wide.jpg", style: slidesImage }),
        core_1.jsx("div", { className: "text", style: slideCaption }, caption));
};
exports.default = SlideShowSlide;