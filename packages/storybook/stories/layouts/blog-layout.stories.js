import React from "react";
import { BlogLayout } from "@sinopiainn/components/lib/layouts/blog-layout";
import { BlogCard } from "@sinopiainn/components/lib/components/blog-card";
import {BlogImagePlaceholder } from "@sinopiainn/components/lib/components/blog-image-placeholder";
import { storiesOf } from "@storybook/react";


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


//footer

const footer =

  storiesOf("Blog Layout", module)
    .add("BlogPage", () => (
      <BlogLayout header={header} leftcolumn={leftcolumn} rightcolumn={rightcolumn} />
    ));

