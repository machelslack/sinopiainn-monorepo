/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'
import React, { FunctionComponent, Children } from 'react';


/* Header/Blog Title */
const headerStyles = {
    padding: "30px",
    "fontSize": "40px",
    "textAlign": "center",
    backgroundColor: "white",
} as React.CSSProperties;


/* Create two unequal columns that floats next to each other */
/* Left column */
const leftcolumnStyles = {
    float: "left",
    width: "75%",
} as React.CSSProperties;

/* Right column */
const rightcolumnStyles = {
    float: "left",
    width: "25%",
    "paddingLeft": "20px",
} as React.CSSProperties;


/* Clear floats after the columns */
const rowStyles = {
    "&:after": {
        content: "",
        display: "table",
        clear: "both",
    }
} as React.CSSProperties;

/* Footer */
const footerStyles = {
    padding: "20px",
    "textAlign": "center",
    backgroundColor: "#ddd",
    "marginTop": "20px",
} as React.CSSProperties;




const BlogLayout: FunctionComponent<{ header: any, leftcolumn: any, rightcolumn: any }> = ({ header, leftcolumn, rightcolumn }) => <React.Fragment>


    <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          body {
            font-family: Arial;
            padding: 20px;
            background: #f1f1f1;
          }
          `}
    />

    <section style={headerStyles} className="header">
        {header()}
    </section>

    <section style={rowStyles} className="row">
        <section style={leftcolumnStyles} className="leftcolumn" css={css`
      @media screen and (max-width: 800px) {
        width: 100%;
    padding: 0;
      }
    `}>
            {leftcolumn}
        </section>
        <section style={rightcolumnStyles} className="rightcolumn" css={css`
      @media screen and (max-width: 800px) {
        width: 100%;
    padding: 0;
      }
    `}>
            {rightcolumn}
        </section>
    </section>

    <section style={footerStyles} className="footer">
    </section>
</React.Fragment>



export default BlogLayout;


