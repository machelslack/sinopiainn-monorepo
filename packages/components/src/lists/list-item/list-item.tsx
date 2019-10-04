import React, { FunctionComponent, Children } from 'react';

const listSpan = {

    height: "auto!important",
    'overflow-y': " hidden !important",
    '-ms-overflow-style': "none"
}


const listAvatar = {


    color: "#cb410b",
    'background-color': "transparent"

}

const amenitiesAvatar = {

    color: "white!important",
    'background-color': "#cb410b!important",
    float: "left"
}


const listBody = {

    'font- size': "14px",
    'font-weight': "400",
    'letter-spacing': 0,
    'line-height': "18px",
    height: "52px",
    color: "rgba(0, 0, 0, .54)",
    display: "block",
    padding: 0

}


const mdlListItem = {
    'font-family': "Roboto, Helvetica, Arial, sans-serif",
    'font-size': "16px",
    'font-weight': "400",
    'letter-spacing': " .04em",
    'line - height': 1,
    'min - height': "48px",
    '-webkit-flex-direction': "row",
    '-ms-flex-direction': "row",
    'flex-direction': "row",
    '-webkit-flex-wrap': "nowrap",
    '-ms-flex-wrap': "nowrap",
    'flex-wrap': "nowrap",
    padding: "16px",
    cursor: "default",
    color: "rgba(0, 0, 0, .87)",
    overflow: " hidden",
    'box-sizing': " border - box",
    display: "-webkit-flex -ms-flexbox flex",
    '-webkit-align-items': "center",
    '-ms-flex-align': "center",
    'align-items': "center",
}

const mdlListItemThreeLine = {

    height: "88px"
}


const UnorderedListItem: FunctionComponent<{}> = ({ children }) =>

    <li style={[mdlListItem, mdlListItemThreeLine]} >
        <span style={listSpan} >
            <i style={[listAvatar, amenitiesAvatar]} > done</i >
            <medium>Complimentary Breakfast</medium>
            <span style={listBody} >
                <small>Enjoy our traditional Jamaican breakfast included as part of our nightly room rates </small>
            </span>
        </span >

    </li >



export default UnorderedListItem;