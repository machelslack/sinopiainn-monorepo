/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FunctionComponent, Children } from 'react';

/* Style inputs */
const selectField = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    "margin-top": "6px",
    "margin-bottom": "16px",
    resize: "vertical"
  } as React.CSSProperties;
  

const SelectField: FunctionComponent<{inputName:any}> = () => <React.Fragment>
    <input type="text" style={selectField}> </input>
</React.Fragment>



export default SelectField;