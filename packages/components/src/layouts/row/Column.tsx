/** @jsx jsx */
import { Global, jsx, css } from "@emotion/core";
import React, { FunctionComponent } from "react";

/* Create two columns that float next to eachother */
const column = css`
  -ms-flex: 33%; /* IE10 */
  flex: 33%;
  padding: 10px;
  display: table-cell;
  border-right: thin dashed white;
  large {
    color: white;
  }
  @media (max-width: 680px) {
    border:none
  }
`;

const breakpoints = [600];

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const Column: FunctionComponent<{}> = ({ children }) => (
  <div className="column" css={column}>
    <p>{children}</p>
  </div>
);

export default Column;
