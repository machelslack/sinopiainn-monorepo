/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'
import React, { FunctionComponent, Children } from 'react';
import { BlogCard } from '../../blog-card';
import { BlogImagePlaceholder } from '../../blog-image-placeholder';


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



//header 

const header = () => React.createElement('h1', {}, 'Blog Name');

//leftcolumn

const leftcolumn = 
  <React.Fragment>
    <BlogCard>
      <h2>TITLE HEADING</h2>
      <h5>Title description, Dec 7, 2017</h5>
      <BlogImagePlaceholder />
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </BlogCard>

    <BlogCard>
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <BlogImagePlaceholder />
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </BlogCard>
  </React.Fragment>;


//rightcolumn 

const rightcolumn = 
  <React.Fragment>
    <BlogCard>
      <h2>About Me</h2>
      <BlogImagePlaceholder />
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </BlogCard>

    <BlogCard>

      <h3>Popular Post</h3>
      <BlogImagePlaceholder /><br></br>
      <BlogImagePlaceholder /><br></br>
      <BlogImagePlaceholder />
    </BlogCard>

    <BlogCard>
      <h3>Follow Me</h3>
      <p>Some text..</p>
    </BlogCard>
  </React.Fragment>


const BlogPageContent: FunctionComponent<{}> = () => <React.Fragment>


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

</React.Fragment>



export default BlogPageContent;
