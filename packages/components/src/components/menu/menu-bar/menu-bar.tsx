import React, { FunctionComponent } from 'react'; // importing FunctionComponent

const scrollmenu = {
    backgroundColor: "#333",
    overflow: "auto",
    whiteSpace: "nowrap",
    "& a": {
        display: "inline-block",
        color: "white",
        textAlign: "center",
        padding: "14px",
        textDecoration: "none",
        "&:hover": {
            backgroundColor: "#777"
        }
    }
} as React.CSSProperties;

export const MenuBar: FunctionComponent<{}> = ({ children }) => <section style={scrollmenu} className="scrollmenu"> {children} </section>

export default MenuBar;