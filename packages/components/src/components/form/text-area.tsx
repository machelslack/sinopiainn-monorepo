/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FunctionComponent, Children } from 'react';

// , select, textarea 
/* Style inputs */
const textArea = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    "margin-top": "6px",
    "margin-bottom": "16px",
    resize: "vertical"
  } as React.CSSProperties;
  

const TextArea: FunctionComponent<{inputName:any}> = () => <React.Fragment>
    <input type="text" style={textArea}> </input>
</React.Fragment>



export default TextArea;
