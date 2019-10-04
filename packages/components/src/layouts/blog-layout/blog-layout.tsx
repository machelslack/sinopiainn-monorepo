/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FunctionComponent, Children } from 'react';


/* Header/Blog Title */
const header = {
    padding: "30px",
    "font-size": "40px",
    "text-align": "center",
    background: "white"
}


/* Create two unequal columns that floats next to each other */
/* Left column */
const leftcolumn = {
    float: "left",
    width: "75%"
}

/* Right column */
const rightcolumn = {
    float: "left",
    width: "25%",
    "padding-left": "20px",
}


/* Clear floats after the columns */
const row = {
    "&:after": {
        content: "",
        display: "table",
        clear: "both"
    }
}

/* Footer */
const footer = {
    padding: "20px",
    "text-align": "center",
    background: "#ddd",
    "margin-top": "20px"
}




const BlogLayout: FunctionComponent<{}> = () => <React.Fragment>

    <section style={header} className="header">
    </section>

    <section className="row">
        <section style={leftcolumn} className="leftcolumn" css={css`
      @media screen and (max-width: 800px) {
        width: 100%;
    padding: 0;
      }
    `}>
        </section>
        <section style={rightcolumn} className="rightcolumn" css={css`
      @media screen and (max-width: 800px) {
        width: 100%;
    padding: 0;
      }
    `}>
        </section>
    </section>

    <section className="footer">
    </section>
</React.Fragment>



export default BlogLayout;


