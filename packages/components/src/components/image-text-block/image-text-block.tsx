
import React, { FunctionComponent } from 'react';


const container = {
    position: "relative",
    fontFamily: "Arial"
} as React.CSSProperties;

const textBlock = {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    backgroundColor: "black",
    color: "white",
    paddingLeft: "20px",
    paddingRight: "20px"
} as React.CSSProperties;
/* Position the "next button" to the right */
const image = {
    width: "100%"
} as React.CSSProperties;



const ImageTextBlock: FunctionComponent<{ imgSrc: any, heading: any, paragragh: any }> = ({ imgSrc, heading, paragragh }) =>
    <section className="container" style={container}>
        <img src={imgSrc} alt={heading} style={image} />
        <div className="text-block" style={textBlock}>
            <h4>{heading}</h4>
            <p>{paragragh}</p>
        </div>
    </section>

export default ImageTextBlock;
