/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'
import React, { FunctionComponent, Children, Component } from 'react';
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
  display: "table-cell",
  width: "75%",
} as React.CSSProperties;

/* Right column */
const rightcolumnStyles = {
  display: "table-cell",
  width: "25%",
  "paddingLeft": "20px",
} as React.CSSProperties;


/* Clear floats after the columns */
const rowStyles = {
  display: "table",
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

const header = () => React.createElement('large', {}, 'Blog Name');


const blogPost = [

  {

    title: "TITLE HEADING",
    description: "Title description",
    postDate: " Dec 7, 2017",
    imageSrc: "",
    opening: "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  }

]


const popularBlogPost = [

  {

    title: "TITLE HEADING",
    description: "Title description",
    postDate: " Dec 7, 2017",
    imageSrc: "",
    opening: "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  }

]
//leftcolumn

const leftcolumn =
  <React.Fragment>
    {
      blogPost.map((post) => <BlogCard>
        <h2>{post.title}</h2>
        <h5>{post.description},{post.postDate}</h5>
        <BlogImagePlaceholder imageSrc={post.imageSrc} />
        <p>{post.opening}</p>
      </BlogCard>)
    }
  </React.Fragment>
//rightcolumn 

const rightcolumn =
  <React.Fragment>
    <BlogCard>
      <h3>Popular Post</h3>
      {
        popularBlogPost.map((post) => <BlogImagePlaceholder imageSrc={post.imageSrc} />)
      }
    </BlogCard>

    <BlogCard>
      <h3>Follow Me</h3>
      <p>Some text..</p>
    </BlogCard>
  </React.Fragment>

class BlogPageContent extends Component<{}> {
  constructor(props: any) {
    super(props);
  }

  render() {

    return (

      <React.Fragment>
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
    )
  }
}

export default BlogPageContent