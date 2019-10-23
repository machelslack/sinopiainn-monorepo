
import React, { FunctionComponent, Children } from 'react';

const zoom = {
  padding: "50px",
  backgroundColor: "green",
  transition: "transform .2s",
  width: "200px",
  height: "200px",
  margin: "0 auto",
  "&:hover": {
    "-msTransform": "scale(1.5)",
    "-webkitTransform": "scale(1.5)",
    "transform": "scale(1.5)"
  }
} as React.CSSProperties;


const ImageZoom: FunctionComponent<{}> = ({ children }) => <div className="zoom" style={zoom}></div>
export default ImageZoom;


