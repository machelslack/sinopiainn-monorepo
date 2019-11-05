"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = require("react");
const home_page_content_1 = require("../compositions/page-content/home-page-content");
/* Slideshow container */
const slideshowContainer = {
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
    "&:hover": " background - color: rgba(0, 0, 0, 0.8)",
    "&.next": {
        right: "0",
        borderRadius: "3px 0 0 3px"
    }
};
/* Position the "next button" to the right */
const next = {
    right: "0",
    borderRadius: "3px 0 0 3px"
};
class SlideShowContainer extends react_1.Component {
    render() {
        return (core_1.jsx(home_page_content_1.HomepageContext.Consumer, null, ({ changeSlide }) => (core_1.jsx("section", { className: "slideshow-container", style: slideshowContainer },
            this.props.children,
            core_1.jsx("a", { className: "prev", style: buttons, onClick: () => { changeSlide(-1, this.props.slideNumber); } }, "\u276E"),
            core_1.jsx("a", { className: "next", style: buttons, onClick: () => { changeSlide(1, this.props.slideNumber); }, css: {
                    right: "0",
                    borderRadius: "3px 0 0 3px"
                } }, "\u276F")))));
    }
}
exports.default = SlideShowContainer;
