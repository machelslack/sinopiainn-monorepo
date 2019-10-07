import React, { FunctionComponent } from 'react';


const dotContainer = {
    textAlign: "center"
} as React.CSSProperties;


/* The dots/bullets/indicators */
const dot = {
    cursor: "pointer",
    height: "15px",
    width: "15px",
    margin: "0 2px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline-block",
    transition: "background-color 0.6s ease",
    "&:hover": " background-color: #717171;"
} as React.CSSProperties;


//   .active {
//     background-color: #717171;
//   }

const SlideShowDots: FunctionComponent<{}> = () =>
    <div style={dotContainer}>
        <span className="dot" style={dot} ></span>
        <span className="dot" style={dot} ></span>
        <span className="dot" style={dot} ></span>
    </div>

export default SlideShowDots;



