/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FunctionComponent } from 'react';


/* Create two columns that float next to eachother */
//   color:#CB410B;
const column = css`
    flex: 1 1 100%;
width: 50%;
padding: 30px;
vertical-align:middle;
flex: 1 1 100%;

h1 {
  border-bottom: thin dashed #CB410B;
  font-size:xxx-large;
  font-weight:200;
  font-family: 'FontspringLight';
  padding-bottom:20px;
}

p{
  font-weight:100;
  font-family: 'FontspringRegular';
  line-height:2;

}
`

/* Clear floats after the columns */
const row = css`

height:auto;
display: flex;
flex-flow: row column;
  width: 100%;
`

const breakpoints = [600]

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)


const FlexTwoColumnRow: FunctionComponent<{ leftcolumn: any, rightcolumn: any }> = ({ leftcolumn, rightcolumn }) => <React.Fragment>

<div className="row" css={row}>
  <div className="column" css={column} >
  {leftcolumn}
  </div>
  <div className="column" css={column} >
   <p>{rightcolumn}</p>
  </div>
</div>
</React.Fragment>



export default FlexTwoColumnRow;


