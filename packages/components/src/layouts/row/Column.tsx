import React, { FunctionComponent } from 'react';

/* Create two columns that float next to eachother */
const column = {
    display: "table-cell",
    "float": "left",
    "width": "25%",
    "padding": "10px"
} as React.CSSProperties;

const breakpoints = [600]

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const Column: FunctionComponent<{}> = ({ children }) =>
    <div className="column" style={column} >
        <p>{children}</p>
    </div>

export default Column;