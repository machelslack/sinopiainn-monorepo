/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FunctionComponent, Children } from 'react';

// , select, textarea 
/* Style inputs */
const textInput = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    "margin-top": "6px",
    "margin-bottom": "16px",
    resize: "vertical"
  } as React.CSSProperties;
  

const TextField: FunctionComponent<{inputName:any}> = () => <React.Fragment>
    <input type="text" style={textInput}> </input>
</React.Fragment>



export default TextField;
