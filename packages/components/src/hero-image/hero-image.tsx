import React, { FunctionComponent } from 'react'; // importing FunctionComponent

const styles = {
    'background-image': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('photographer.jpg')",
    height: "50%",
    'background-position': "center",
    'background-repeat': "no-repeat",
    'background-size': "cover",
    position: "relative",
};

export const HeroImage: FunctionComponent<{}> = ({ children }) => <section style={styles}>

    {children}

</section>

export default HeroImage;
