/** @jsx jsx */
import { Global, jsx, css } from "@emotion/core";
import React, { FunctionComponent, Component } from "react";

const breakpoints = [600];

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

/* The actual timeline (the vertical ruler) */
const timeline = css`
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
`;

/* The actual timeline (the vertical ruler) */

/* Container around content */
const container = css`
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
    &:before {
    }
`;

/* Place the container to the left */
const left = css`
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
    },
    &:after {
    }
`;

/* Place the container to the right */
const right = css`
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

const fullWidthImage = css`
   {
    width: 100%;
  }
`;

const tab = css`
   {
    overflow: hidden;
    text-align: center;
    width: 100%;
    border-bottom: thin solid #f1f1f1;
  }
`;

const tabButton = css`
   {
    display: inline-block;
    width: 33%;
    margin: 1px;
    font-size: 18px;
    border-right: thick solid #f1f1f1;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    &:hover {
      background-color: #ddd;
    }
  }
`;

const active = css`
   {
    background-color: #ccc;
  }
`;

const tabcontent = css`{

  display:none;
  padding: 6px 12px;
  border: 1px solid #ccc
  border-top:none;

}`;

class ThingsToDoPageContent extends Component<{}> {
  tabs: any = null;
  tabLinks: any = null;

  constructor(props: any) {
    super(props);
    this.openTab = this.openTab.bind(this);
  }

  componentDidMount() {
    this.tabs = document.getElementsByClassName("tabcontent");
    this.tabLinks = document.getElementsByClassName("tablinks");
  }

  openTab = (evt: any, tabID: any) => {
    for (let i = 0; i < this.tabs.length; i++) {
      this.tabs[i].style.display = "none";
    }
    for (let i = 0; i < this.tabLinks.length; i++) {
      this.tabLinks[i].className = this.tabLinks[i].className.replace(
        "active",
        ""
      );
    }
    document.getElementById(tabID)!.style.display = "block";
    evt.currentTarget.className += "active";
  };

  render() {
    return (
      <React.Fragment>
        <div className="tab" css={tab}>
          <div css={tabButton} className="tablinks">
            DAY 1
          </div>
          <div css={tabButton} className="tablinks">
            DAY 2
          </div>
          <div css={tabButton} className="tablinks">
            DAY 3
          </div>
        </div>
        <div className="tabcontent" id="day1">
          <div className="timeline" css={timeline}>
            <div className="container left" css={[container, left]}>
              <div className="content" css={content}>
                <h2>8:00 A.M</h2>
                <h3>DIP AND DINE</h3>
                <img
                  src="assets/images/hero-images/hero-images-1.jpg"
                  alt="Avatar"
                  css={fullWidthImage}
                />
                <p>
                  The only place to start your day is the mystical and world
                  famous Blue Lagoon. Take an invigorating and revitalising dip
                  in dark blue rock pools before swimming across to Kanopi House
                  for breakfast. Request to have your breakfast on the
                  waterfront, simply one of the best dining locations in the
                  island.
                </p>
              </div>
            </div>
            <div className="container right" css={[container, right]}>
              <div className="content" css={content}>
                <h2>10:00 A.M</h2>
                <h3>MONKEY AROUND ON PELLEW ISLAND</h3>
                <img
                  src="assets/images/hero-images/hero-images-1.jpg"
                  alt="Avatar"
                  css={fullWidthImage}
                />
                <p>
                  After that, catch a quick boart ride down t Pellew ( Monkey)
                  Island, where you can experience some beautiful snorkelling in
                  the crystal-clear sea. Let your breakfast digest as you wallow
                  in the shallow waters, and let the waves wash over you.
                </p>
              </div>
            </div>
            <div className="container left" css={[container, left]}>
              <div className="content" css={content}>
                <h2>1:00 P.M</h2>
                <h3>LUNCH AT CYNTHIA'S</h3>
                <img
                  src="assets/images/hero-images/hero-images-1.jpg"
                  alt="Avatar"
                  css={fullWidthImage}
                />
                <p>
                  Your commute for lunch never looked this good. Ask around for
                  a trusty boat man like "Boxer" or "Goofy" and hitch a boat
                  ride from Blue Lagoon to San San, down the coastline past
                  Dragon Bay to Winnifred Beach - stopping to take dips along
                  the way. Surfers will delight at the waves at Winnifred Beach.
                  Recuperate with lunch at Cynthia's and make sure to order her
                  famous Grilled Kingfish.
                </p>
              </div>
            </div>
            <div className="container right" css={[container, right]}>
              <div className="content" css={content}>
                <h2>3:00 P.M</h2>
                <h3>MARKET MEET-UP</h3>
                <img
                  src="assets/images/hero-images/hero-images-1.jpg"
                  alt="Avatar"
                  css={fullWidthImage}
                />
                <p>
                  Catch a little shopping and culture at The Village where you
                  can get to know some of the area's creative artisans. Whilst
                  there, grab a coffee at Yosch Cafe or head to cosy and quaint
                  Syd Cafe at Rebecca's Town House located on Harbour Street,
                  right in the middle of town.
                </p>
              </div>
            </div>
            <div className="container left" css={[container, left]}>
              <div className="content" css={content}>
                <h2>7:00 P.M</h2>
                <h3>AFTER DARK</h3>
                <img
                  src="assets/images/hero-images/hero-images-1.jpg"
                  alt="Avatar"
                  css={fullWidthImage}
                />
                <p>
                  Seafood lovers, head to the waterfront in Folly for the
                  freshest seafood at Wilkes. The coconut Curry Lobster is a fan
                  favourite. Looking for something a little more refined ? At
                  Geejam's Bushbar you never know whom you may sit next to.
                  Famous celebrities sucxh as Tom Cruise, Katie Holmes, Gwen
                  Stefani and Grace Jones have dined here; and some have even
                  recorded in the world class recording studio. No celebritry
                  sightings ? The spicy seafood pasta and the stylishy cool vibe
                  will make it the perfect ending to the day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ThingsToDoPageContent;
