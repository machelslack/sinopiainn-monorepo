
import React, { FunctionComponent, Children } from 'react';

const card = {
    "background-color": "white",
    padding: "20px",
    "margin-top": "20px"
}

const BlogCard: FunctionComponent<{}> = () => <React.Fragment>
    <div style={card} className="card">
    </div>
</React.Fragment>



export default BlogCard;