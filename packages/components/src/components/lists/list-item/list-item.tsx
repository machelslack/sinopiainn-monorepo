import * as React from 'react'
import { FunctionComponent, Children } from 'react';


const medium = {

}


const mdlListItem = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "16px",
    fontWeight: 400,
    letterSpacing: ".04em",
    lineHeight: "1",
    minHeight: "48px",
    "-webkit-flex-direction": "row",
    "-ms-flex-direction": "row",
    "flex-direction": "row",
    "-webkit-flex-wrap": "nowrap",
    "-ms-flex-wrap": "nowrap",
    "flexWrap": "nowrap",
    padding: "16px",
    cursor: "default",
    color: "rgba(0, 0, 0, .87)",
    overflow: "hidden",
    "&.mdl-list__item--three-line": {
        height: "88px"

    },
    "& .mdl-list__item-primary-content": {
        "-webkit-order": 0,
        "-ms-flex-order": 0,
        order: 0,
        "-webkit-flex-grow": 2,
        "-ms-flex-positive": 2,
        "flex-grow": 2,
        "textDecoration": "none",
        height: "52px",
        lineHeight: "20px",
        display: "block"
    },

    "box-sizing": "border-box",
    display: "-webkit-flex -ms-flexbox flex",
    "-webkit-align-items": "center",
    "-ms-flex-align": "center",
    "align-items": "center"


} as React.CSSProperties;

const shared = {
    "boxSizing": "border-box",
    display: "-webkit-flex -ms-flexbox flex",
    "-webkit-align-items": "center",
    "-ms-flex-align": "center",
    "alignItems": "center"
} as React.CSSProperties;

const materialIcons = {
    float: "left",
    "fontFamily": 'Material Icons',
    "fontWeight": 400,
    "fontStyle": "normal",
    "fontSize": "24px",
    "lineHeight": 1,
    "letterSpacing": "normal",
    "textTransform": "none",
    display: "inlineBlock",
    "wordWrap": "normal",
    "-moz-font-feature-settings": "liga",
    "font-feature-settings": "liga",
    "-webkit-font-feature-settings": 'liga',
    "-webkit-font-smoothing": "antialiased"
}as React.CSSProperties;

const listBody = {
    "fontSize": "14px",
    "fontWeight": 400,
    "letterSpacing": 0,
    "lineHeight": "18px",
    height: "52px",
    color: "rgba(0, 0, 0, .54)",
    display: "block",
    padding: 0
} as React.CSSProperties;


const UnorderedListItem: FunctionComponent<{}> = ({ children }) =>
    <li className="mdl-list__item mdl-list__item--three-line" style={mdlListItem}>
        <span className="mdl-list__item-primary-content" style={shared}>
            <i className="material-icons  mdl-list__item-avatar amenitiesAvatar" style={materialIcons}>done</i>
            <medium>Outdoor Deck And Jerk Pit</medium>
            <span className="mdl-list__item-text-body" style={listBody}>
                <small>Sit back and relax with views of the cool countryside and a jerk pit ready and wood-stocked perfect for
      entertaining family and friends during your stay </small>
            </span>
        </span>
    </li>

export default UnorderedListItem;



