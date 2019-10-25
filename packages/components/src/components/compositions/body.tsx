import React from 'react';
import { PageLayout } from '../../layouts';


const BodyLayout = (props:any) => <React.Fragment>
    <body>
        <PageLayout pageData={props}/>
        <script src="/public/app.js" defer></script>
    </body>
</React.Fragment>

export default BodyLayout;