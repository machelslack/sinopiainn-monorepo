
import React, { FunctionComponent, Children } from 'react';

const listThree = {
    'text-align': "left",
    display: "block",
    padding: "8px 0",
    'list-style': "none"
}


const UnorderedList: FunctionComponent<{}> = ({ children }) => <React.Fragment>
    <ul className="list-three mdl-list" style={listThree}>{children} </ul>
</React.Fragment>

export default UnorderedList;
