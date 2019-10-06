/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FunctionComponent, Children } from 'react';

// , select, textarea 
/* Style inputs */
const textArea = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    "marginTop": "6px",
    "marginBottom": "16px",
    resize: "vertical",
    height: "170px"
  } as React.CSSProperties;
  

const TextArea: FunctionComponent<{inputName:any}> = () => <React.Fragment>
    <input type="text" style={textArea}/>
</React.Fragment>



export default TextArea;
