/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react';


/* Create two columns that float next to eachother */
const column = {
  display: "table-cell",
    "float": "left",
    "width": "50%",
    "padding": "10px"
} as React.CSSProperties;

/* Clear floats after the columns */
const row = {

  display: "table",
  width: "100%",
    // "& :after": {
    //     "content": "",
    //     "display": "table",
    //     "clear": "both"
    // }
} as React.CSSProperties;

const breakpoints = [600]

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)


const TwoColumnRow: FunctionComponent<{ leftcolumn: any, rightcolumn: any }> = ({ leftcolumn, rightcolumn }) => <React.Fragment>

<div className="row" style={row}>
  <div className="column" style={column} >
  {leftcolumn}
  </div>
  <div className="column" style={column} >
   <p>{rightcolumn}</p>
  </div>
</div>


    {/* <section style={row} className="row">
        <div style={column} className="leftcolummn" css={css`
      [mq[0]]: {
        width: 100%;
        margin-top: 0;
      },
    `}>
            {leftcolumn}
        </div>
        <div style={column} className="rightcolummn" css={css`
   [mq[0]]: {
    width: 100%;
    margin-top: 0;
  },
    `}>
            {rightcolumn}
        </div>
    </section> */}
</React.Fragment>



export default TwoColumnRow;


