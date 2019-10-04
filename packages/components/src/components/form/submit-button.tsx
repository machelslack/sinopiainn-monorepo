/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FunctionComponent, Children } from 'react';

const inputSubmit = {
    "background-color": "#4CAF50",
    color: "white",
    padding: "12px 20px",
    border: "none",
    cursor: "pointer",
    "&:hover":{
        "background-color":"#45a049"
    }
  }
  
const SubmitButton: FunctionComponent<{inputName:any}> = () => <React.Fragment>
    <input type="submit" style={inputSubmit}> </input>
</React.Fragment>

export default SubmitButton;
