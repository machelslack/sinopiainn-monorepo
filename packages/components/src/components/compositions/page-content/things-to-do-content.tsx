/** @jsx jsx */
import { Global, jsx, css } from "@emotion/core";
import React, { FunctionComponent } from "react";

/* The actual timeline (the vertical ruler) */
const timeline = css`
   {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    &:after {
      content: "";
      position: absolute;
      width: 6px;
      background-color: white;
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -3px;
    }
  }
`;

/* The actual timeline (the vertical ruler) */

/* Container around content */
const container = css`
   {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
    &:after {
      content: "";
      position: absolute;
      width: 25px;
      height: 25px;
      right: -17px;
      background-color: white;
      border: 4px solid #ff9f55;
      top: 15px;
      border-radius: 50%;
      z-index: 1;
    }
  }
`;

/* Place the container to the left */
const left = css`
   {
    left: 0;
    &:before {
      content: " ";
      height: 0;
      position: absolute;
      top: 22px;
      width: 0;
      z-index: 1;
      right: 30px;
      border: medium solid white;
      border-width: 10px 0 10px 10px;
      border-color: transparent transparent transparent white;
    }
  }
`;

/* Place the container to the right */
const right = css`
   {
    left: 50%;
    &:before {
      content: " ";
      height: 0;
      position: absolute;
      top: 22px;
      width: 0;
      z-index: 1;
      left: 30px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
    }
    &:after {
      left: -16px;
    }
  }
`;

/* The actual content */
const content = css`
   {
    padding: 20px 30px;
    background-color: white;
    position: relative;
    border-radius: 6px;
  }
`;

const fullWidthImage = css `{
  width:100%;
}`

const ThingsToDoPageContent: FunctionComponent<{}> = () => (
  <div className="timeline" css={timeline}>
    <div className="container left" css={[container, left]}>
      <div className="content" css={content}>
        <h2>2017</h2>
        <p>
          Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
          perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
          expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
          eam.
        </p>
      </div>
    </div>
    <div className="container right" css={[container, right]}>
      <div className="content" css={content}>
        <h2>2016</h2>
        <p>
          Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
          perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
          expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
          eam.
        </p>
      </div>
    </div>
    <div className="container left" css={[container, left]}>
      <div className="content" css={content}>
        <h2>2017</h2>
        <img src="assets/images/hero-images/hero-images-1.jpg" alt="Avatar" css={fullWidthImage} />
        <p>
          Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
          perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
          expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
          eam.
        </p>
      </div>
    </div>
    <div className="container right" css={[container, right]}>
      <div className="content" css={content}>
        <h2>2016</h2>
        <p>
          Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
          perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
          expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
          eam.
        </p>
      </div>
    </div>
  </div>
);

export default ThingsToDoPageContent;
