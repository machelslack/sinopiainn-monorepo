/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FunctionComponent } from 'react';


const IconBarItemWithText: FunctionComponent<{ iconType: any }> = ({ iconType }) =>
    <div className="">
        <i className={`fa ${!!iconType.class && iconType.class}`}></i>
        <p className="service_icon-res-heading">{ iconType.title} <br></br>
            <small className="service_icon-res-text">{ iconType.subtitle} </small>
        </p>
    </div>

export default IconBarItemWithText;
