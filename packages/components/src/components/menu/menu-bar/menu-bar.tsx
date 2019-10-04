import React, { FunctionComponent } from 'react'; // importing FunctionComponent

const styles = {
    "background-color": "#333",
    overflow: "hidden"

};

export const MenuBar: FunctionComponent<{}> = ({ children }) => <section style={styles}>

    {children}

</section>

export default MenuBar;