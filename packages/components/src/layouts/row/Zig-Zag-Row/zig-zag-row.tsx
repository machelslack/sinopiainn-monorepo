/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FunctionComponent } from 'react';

const breakpoints = [1000]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const row = {
    "&:after": {
        content: "",
        display: "table",
        clear: "both"
    }
} as React.CSSProperties;

const column66 = {
    float: "left",
    width: "66.66666%",
    padding: "20px"
} as React.CSSProperties;

const column33 = {
    float: "left",
    width: "33.33333%",
    padding: "20px"
} as React.CSSProperties;

const ZigZagRow: FunctionComponent<{}> = ({}) => <section style={row}>
    <div style={column66} css={{
    [mq[0]]: {
        width: "100%",
        'text-align': "center",
    },
  }}>

    </div>
    <div style={column33} css={{
    [mq[0]]: {
        width: "100%",
        'text-align': "center",
    },
  }}>

    </div>
</section>

export default ZigZagRow;