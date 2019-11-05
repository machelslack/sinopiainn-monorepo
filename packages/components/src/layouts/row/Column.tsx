/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'
import React, { FunctionComponent } from 'react';

/* Create two columns that float next to eachother */
const column = css`
    padding:10px;
    display: table-cell;
    width: 25%;
    border-right:thin dashed white;
    large {
        color:white;
    }
`

const breakpoints = [600]

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const Column: FunctionComponent<{}> = ({ children }) =>
    <div className="column" css={column} >
        <p>{children}</p>
    </div>

export default Column;