/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'
import React, { FunctionComponent } from 'react';


/* Create two columns that float next to eachother */
const column = {
    "float": "left",
    "width": "50%",
    "marginTop": "6px",
    "padding": "20px"
} as React.CSSProperties;

/* Clear floats after the columns */
const row = {
    "&:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    }
} as React.CSSProperties;

const breakpoints = [600]

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)


const TwoColumnRow: FunctionComponent<{ leftcolumn: any, rightcolumn: any }> = ({ leftcolumn, rightcolumn }) => <React.Fragment>

<Global
        styles={css`
        body {
            font-family: Arial, Helvetica, sans-serif;
          }
          
          * {
            box-sizing: border-box;
          }
          `}
    />

    <section style={row} className="row">
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
    </section>
</React.Fragment>



export default TwoColumnRow;


