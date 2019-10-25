import React, { FunctionComponent } from 'react'; // importing FunctionComponent

const iconBar = {
    width: "100%",
    overflow: "auto",
    padding:"10px"
} as React.CSSProperties;

export const IconBar: FunctionComponent<{}> = ({ children }) => <section style={iconBar} className="iconBar"> {children} </section>

export default IconBar;