/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FunctionComponent } from 'react';
import IconBarItemWithText from '../../../components/icon-bar/icon-bar-item-with-text';


/* Create two columns that float next to eachother */
//   color:#CB410B;
const column = css`
display: table-cell;
float: left;
width: 16.6%;
padding: 30px;
vertical-align:middle;
text-align:center;

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
position: absolute;
bottom: 0;
background-color: black;
height:50px;
color: white;
opacity: 0.7;
    filter: alpha(opacity=70);
    font-family: 'FontspringRegular';
  display: table;
  width: 100%;
  &:after: {
        content: ;
         display: table;
         clear: both;
     }
`

const breakpoints = [600]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)


interface IconItem {

  class: string,
  title: string,
  subtitle: string,
  text: string

}

const SixColumnRow: FunctionComponent<{ iconTypes: IconItem[] }> = ({ iconTypes }) => <React.Fragment>

  <div className="row" css={row}>
    {
      iconTypes.map((iconType:any) =>
        <div className="column" css={column} >
          <IconBarItemWithText iconType={iconType} />
        </div>
      )
    }
  </div>
</React.Fragment>



export default SixColumnRow;


