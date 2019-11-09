/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react';

const zoomContainer = css`
height:auto;
display: flex;
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

const divStyle = css `overflow:hidden;`
const mapDivStyle = css `height:100%;width:100%;`
const iframeStyles = css `margin:0px; flex-grow : 1;`
const mapOuterDiv = css `height:auto;display: flex;`

const ImageZoom: FunctionComponent<{}> = () => <section css={zoomContainer}> 
<iframe width='100%' height='100%' 
id='mapcanvas' 
src="https://maps.google.com/maps?q=Zion%20Hill,%20Fairy%20Hill%20PO,%20Port%20Antonio,%20Jamaica&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
// frameborder='0' 
scrolling='no' 
// marginheight='0' 
// marginwidth='0'
css={iframeStyles}
>
<div className="zxos8_gm">new website <a rel="bookmark"  href="https://www.codeguesser.co.uk/ao.com">called Code Guesser</a> 
tries to find vouchers by guessing</div>
<div css={divStyle}>
  <div id='gmap_canvas' css={mapDivStyle}></div>
  </div><div><small>Powered by <a href="https://www.embedgooglemap.co.uk">Embed Google Map</a></small></div></iframe>

 </section>
export default ImageZoom;


