/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FunctionComponent } from 'react';


/* Create two columns that float next to eachother */
//   color:#CB410B;
const column = css`
-ms-flex: 50%; /* IE10 */
flex: 50%;
padding: 30px;
vertical-align:middle;
h1 {
  border-bottom: thin dashed #CB410B;
  font-size:xxx-large;
  font-weight:200;
  font-family: 'FontspringLight';
  padding-bottom:20px;
}
`

/* Clear floats after the columns */
const row = css`

display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
`

const breakpoints = [600]

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)


const TwoColumnRow: FunctionComponent<{ leftcolumn: any, rightcolumn: any }> = ({ leftcolumn, rightcolumn }) => <React.Fragment>

<div className="row" css={row}>
  <div className="column" css={column} >
  {leftcolumn}
  </div>
  <div className="column" css={column} >
   <p>{rightcolumn}</p>
  </div>
</div>
</React.Fragment>



export default TwoColumnRow;


