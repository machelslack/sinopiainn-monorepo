import React, { FunctionComponent } from 'react'; // importing FunctionComponent

const iconBar = {
    width: "100%",
    backgroundColor: "#555",
    overflow: "auto"
} as React.CSSProperties;

export const IconBar: FunctionComponent<{}> = ({ children }) => <section style={iconBar} className="iconBar"> {children} </section>

export default IconBar;