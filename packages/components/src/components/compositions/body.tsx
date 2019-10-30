import React from 'react';
import serialize from "serialize-javascript"

const BodyLayout = (bodyMarkup: any, pageData: any) => <React.Fragment>
    <body id="clientApp">
        {bodyMarkup}
        {/* {`<script>window.__INITIAL_DATA__ =
 ${serialize(pageData)}</script>`} */}
        <script src="/app.js" defer></script>
    </body>
</React.Fragment>

export default BodyLayout;