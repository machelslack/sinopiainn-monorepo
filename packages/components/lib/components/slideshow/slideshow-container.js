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
    "&:hover": " background - color: rgba(0, 0, 0, 0.8)",
    "&.next": {
        right: "0",
        borderRadius: "3px 0 0 3px"
    }
};
/* Position the "next button" to the right */
var next = {
    right: "0",
    borderRadius: "3px 0 0 3px"
};
var SlideShowContainer = function (_a) {
    var children = _a.children;
    return core_1.jsx("section", { className: "slideshow-container", style: slideshowContainer },
        children,
        core_1.jsx("a", { className: "prev", style: buttons }, "\u276E"),
        core_1.jsx("a", { className: "next", style: buttons, css: {
                right: "0",
                borderRadius: "3px 0 0 3px"
            } }, "\u276F"));
};
exports.default = SlideShowContainer;
