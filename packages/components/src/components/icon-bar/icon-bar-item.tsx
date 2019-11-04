/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react';

const iconBarItem = css`
float: right;
textAlign: center;
transition: all 0.3s ease;
color: #CB410B;
fontSize: 20px;
fontFamily: FontspringRegular;
  i {
    display: table;
    padding:0px!important;
    span {
        color:black;
        cursor: pointer;
        display: table-cell;
        vertical-align:middle;
        font-weight:200;
      }
  }
`

const IconBarItem: FunctionComponent<{ iconType: any }> = ({ iconType }) =>
    <a css={iconBarItem} className="iconBarItem"><i className={`fa ${!!iconType.class && iconType.class}`}>
        &nbsp; <span> {iconType.text} </span>
    </i></a>

export default IconBarItem;

