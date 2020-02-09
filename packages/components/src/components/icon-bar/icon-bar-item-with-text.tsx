/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from "react";

const IconBarItemWithText: FunctionComponent<{ iconType: any }> = ({
  iconType
}) => (
  <div className="">
    <i className={`fa ${!!iconType.class && iconType.class}`}></i>
    <p className="service_icon-res-heading">
      <span
        css={css`
           {
            @media (max-width: 1200px) {
              font-size: 14px;
            }
          }
        `}
      >
        {iconType.title}{" "}
      </span>
      <br></br>
      <small
        className="service_icon-res-text"
        css={css`
           {
            @media (max-width: 1200px) {
              display: none;
            }
          }
        `}
      >
        {iconType.subtitle}{" "}
      </small>
    </p>
  </div>
);

export default IconBarItemWithText;
