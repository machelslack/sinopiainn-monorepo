/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react';

const zoomContainer = css`

.zoom {
  padding: 50px;
  background-color: blue;
  transition: transform .2s;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
  .zoom:hover: {
    -ms-transform: scale(1.5); /* IE 9 */
    -webkit-transform: scale(1.5); /* Safari 3-8 */
    transform: scale(1.5); 
  }
`
const ImageZoom: FunctionComponent<{}> = () => <section css={zoomContainer}> <div className="zoom" ></div>  </section>
export default ImageZoom;


