import React, { FunctionComponent } from 'react'; // importing FunctionComponent

const scrollmenu = {
    backgroundColor: "#333",
    overflow: "auto",
    whiteSpace: "nowrap",
    textAlign: "center",
} as React.CSSProperties;

export const MenuBar: FunctionComponent<{}> = ({ children }) => <section style={scrollmenu} className="scrollmenu"> {children} </section>

export default MenuBar;