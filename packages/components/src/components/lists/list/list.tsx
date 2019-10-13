
import React, { FunctionComponent, Children } from 'react';

const listThree = {
    'textAlign': "left",
    display: "block",
    padding: "8px 0",
    'listStyle': "none"
} as React.CSSProperties;


const UnorderedList: FunctionComponent<{}> = ({ children }) => <React.Fragment>
    <ul className="list-three mdl-list" style={listThree}>{children} </ul>
</React.Fragment>

export default UnorderedList;
