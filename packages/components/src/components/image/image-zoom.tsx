/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react';

const zoom = css`
  padding: 50px;
  background-color: green;
  transition: transform .2s;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  ":hover": {
    background-color: blue;
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
`


const ImageZoom: FunctionComponent<{}> = () => <div className="zoom" css={zoom}></div>
export default ImageZoom;


