
import React, { FunctionComponent, Children } from 'react';

/* Fake image */
const fakeimg = {
  "backgroundColor": "#aaa",
  width: "100%",
  padding: "20px",
  height: "200px"
}

const BlogImagePlaceholder: FunctionComponent<{ imageSrc: string }> = ({ imageSrc }) => <React.Fragment>
  <div style={fakeimg} className="fakeimg">
    <img src={imageSrc} />
  </div>
</React.Fragment>



export default BlogImagePlaceholder;