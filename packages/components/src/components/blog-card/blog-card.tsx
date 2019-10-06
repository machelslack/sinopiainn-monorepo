
import React, { FunctionComponent } from 'react';

const card = {
    "backgroundColor": "white",
    padding: "20px",
    "marginTop": "20px"
}

const BlogCard: FunctionComponent<{}> = ({children }) => <React.Fragment>
    <div style={card} className="card">
        {children}
    </div>
</React.Fragment>



export default BlogCard;