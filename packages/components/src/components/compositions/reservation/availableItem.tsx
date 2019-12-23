/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const div = css`
  display: table;
  width: 100%;
`;

const innerDiv = css`
  display: table-cell;
`;

const i = css`
  font-size: 40px;
  padding: 10px;
  line-height: 1;
  color: #cb410b;
`;

const firstLine = css`
  font-size: 16px;
  font-family: "FontspringRegular";
`;

const secondLine = css`
  font-size: 12px;
  font-family: "FontspringLight";
`;

const AvailableItem = (item: any, onclick: any) => (
  <li>
    <div css={div}>
      <div css={innerDiv}>
        <i
          className="material-icons  mdl-list__item-avatar amenitiesAvatar fa fa-check-circle"
          css={i}
        ></i>
      </div>
      <div css={innerDiv}>
        <span css={firstLine}>${item.name}</span>
        <br></br>
        <span css={secondLine}>${item.description}</span>
      </div>
      <div css={innerDiv}>
        <span className="close" onClick={onclick}>
          {item.booked ? "REMOVE" : "ADD"}
        </span>
      </div>
    </div>
  </li>
);

export default AvailableItem;
