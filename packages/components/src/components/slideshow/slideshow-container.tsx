
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { FunctionComponent } from 'react';


/* Slideshow container */
const slideshowContainer = {
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
    "&:hover": " background - color: rgba(0, 0, 0, 0.8)",
    "&.next": {
        right: "0",
        borderRadius: "3px 0 0 3px"
    }
} as React.CSSProperties;

/* Position the "next button" to the right */
const next = {
    right: "0",
    borderRadius: "3px 0 0 3px"
} as React.CSSProperties;


const SlideShowContainer: FunctionComponent<{}> = ({ children }) =>
    <section className="slideshow-container" style={slideshowContainer}>
        {children}
        <a className="prev" style={buttons}>&#10094;</a>
        <a className="next" style={buttons} css={{
            right: "0",
            borderRadius: "3px 0 0 3px"
        }}>&#10095;</a>
    </section>

export default SlideShowContainer;
