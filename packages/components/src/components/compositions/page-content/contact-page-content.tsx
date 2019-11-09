/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'
import React, { FunctionComponent } from 'react';
import { FlexTwoColumnRow } from '../../../layouts/row';
import { TextField, SelectField, TextArea, SubmitButton } from '../../form';
import HomePageContent from './home-page-content';

const divStyle = css `overflow:hidden;`
const mapDivStyle = css `height:100%;width:100%;`
const iframeStyles = css `margin:0px; flex-grow : 1;`
const mapOuterDiv = css `height:auto;display: flex;`
//leftcolumn

const leftcolumn = <React.Fragment>
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
  
   </React.Fragment>;

//rightcolumn 
const optionsArray = ['option 1', 'option 2', 'option 3'];

const rightcolumn =
  <React.Fragment>
    <form action="/action_page.php">
      <label>First Name</label>
      <TextField />
      <label>Last Name</label>
      <TextField />
      <label>Enquiry</label>
      <TextArea />
      <SubmitButton />
    </form>
  </React.Fragment>


const ContactPageContent: FunctionComponent<{}> = () => <React.Fragment>
<FlexTwoColumnRow leftcolumn={leftcolumn} rightcolumn={rightcolumn} />
</React.Fragment>

    


export default ContactPageContent;
