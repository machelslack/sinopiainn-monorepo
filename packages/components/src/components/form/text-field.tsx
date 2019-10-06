/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { FunctionComponent, Children } from 'react';

/* Style inputs */
const textInput = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    "marginTop": "6px",
    "marginBottom": "16px",
    resize: "vertical"
  } as React.CSSProperties;
  

const TextField: FunctionComponent<{}> = () => <React.Fragment>
    <input type="text" style={textInput} /> 
</React.Fragment>



export default TextField;
