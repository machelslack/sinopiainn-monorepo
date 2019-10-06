/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FunctionComponent, Children } from 'react';

/* Style inputs */
const selectField = {
  width: "100%",
  padding: "12px",
  border: "1px solid #ccc",
  "marginTop": "6px",
  "marginBottom": "16px",
  resize: "vertical"
} as React.CSSProperties;


const SelectField: FunctionComponent<{ options: any }> = ({ options }) => <React.Fragment>
  <select style={selectField}>

    {
      options.map((optionItem: any,) => <option key={optionItem}>{optionItem}</option>)
    }

  </select>
</React.Fragment>



export default SelectField;