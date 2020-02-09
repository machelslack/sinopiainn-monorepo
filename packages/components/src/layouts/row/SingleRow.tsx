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


const SingleRow: FunctionComponent<{}> = ({ children }) =>
    <div className="row" css={row}>
        {children}
    </div>


export default SingleRow;


