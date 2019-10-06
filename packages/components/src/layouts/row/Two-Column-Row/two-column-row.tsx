/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FunctionComponent, Children } from 'react';


/* Create two columns that float next to eachother */
const column = {
    "float": "left",
    "width": "50%",
    "margin-top": "6px",
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


const TwoColumnRow: FunctionComponent<{}> = () => <React.Fragment>
    <section style={row} className="row">
        <div style={column} className="colummn" css={css`
      [mq[0]]: {
        width: 100%;
        margin-top: 0;
      },
    `}>
        </div>
        <div style={column} className="colummn" css={css`
   [mq[0]]: {
    width: 100%;
    margin-top: 0;
  },
    `}>

        </div>
    </section>
</React.Fragment>



export default TwoColumnRow;


