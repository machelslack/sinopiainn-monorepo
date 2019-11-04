/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import * as React from 'react'
import { FunctionComponent, Children } from 'react';


const div = css`display:table`;

const innerDiv = css`display:table-cell; vertical-align:middle;`;

const i = css`font-size:40px;padding:5px; line-height:1;color:#CB410B;`;

const firstLine = css`font-size:16px;  font-family: 'FontspringRegular';`;

const secondLine = css`font-size:12px;  font-family: 'FontspringLight';`;

const UnorderedListItem: FunctionComponent<{ title: any, subtitle: any , icon:any, image:any}> = ({ title, subtitle ,icon, image}) =>
    <li>
        <div css={div}>
            <div css={innerDiv}>
                <i className={`material-icons  mdl-list__item-avatar amenitiesAvatar ${icon ? icon : 'fa fa-check-circle'}`} css={i} ></i>
            </div>
            <div css={innerDiv}>
                <span css={firstLine}>
                    {title}
                </span>
                <br></br>
                <span css={secondLine}>
                    {subtitle}
                </span>
            </div>
        </div>
    </li>
export default UnorderedListItem;



