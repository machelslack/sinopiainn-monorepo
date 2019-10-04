/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FunctionComponent, Children } from 'react';

/* Style the container/contact section */
const container = {
    "border-radius": "5px",
    "background-color": "#f2f2f2",
    "padding": "10px"
}

const Container: FunctionComponent<{}> = () => <React.Fragment>
    <section style={container} className="container">
    </section>
</React.Fragment>



export default Container;


