/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FunctionComponent } from 'react';

const breakpoints = [1000]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const img = {
    display: "block",
    height: "auto",
    'max-width': "100%"
  }


const ZigZagRowImage: FunctionComponent<{}> = ({ }) => <React.Fragment>

    <img src="/w3images/img_app.jpg" width="335" height="471" style={img}  css={{
    [mq[0]]: {
        margin: "auto",
    },
  }} />

</React.Fragment>

export default ZigZagRowImage;