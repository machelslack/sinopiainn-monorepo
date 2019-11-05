
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { Component } from 'react';
import { HomepageContext } from '../compositions/page-content/home-page-content';


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

class SlideShowContainer extends Component<{ slideNumber: number }> {

    render() {
        return (
            <HomepageContext.Consumer>
                {
                    ({ changeSlide }) => (
                        <section className="slideshow-container" style={slideshowContainer}>
                            {this.props.children}
                            <a className="prev" style={buttons} onClick={() => { changeSlide(-1, this.props.slideNumber) }}>&#10094;</a>
                            <a className="next" style={buttons} onClick={() => { changeSlide(1, this.props.slideNumber) }} css={{
                                right: "0",
                                borderRadius: "3px 0 0 3px"
                            }}>&#10095;</a>
                        </section>
                    )
                }
            </HomepageContext.Consumer>
        )
    }
}

export default SlideShowContainer