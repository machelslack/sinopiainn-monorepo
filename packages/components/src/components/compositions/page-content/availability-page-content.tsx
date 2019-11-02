/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react';
import { TwoColumnRow } from '../../../layouts/row';
import { TextField, SelectField, TextArea, SubmitButton } from '../../form';

//leftcolumn


const ul = css` list-style:none; width:100%; `;

const div = css`display:table`;

const innerDiv = css`display:table-cell; vertical-align:middle;`;

const i = css`font-size:50px;padding:5px; line-height:1;`;

const firstLine = css`font-size:16px`;

const secondLine = css`font-size:11px`;


{/* <ul class="middle">
  <li>
    <i class="icon-cog icon-2x"></i> <a href="#">very long multiline item one</a>
  </li>
  <li>
    <i class="icon-pencil icon-2x"></i> <a href="#">very long multiline item two</a>
  </li>
</ul> */}

const leftcolumn = <React.Fragment>
  <ul css={ul}>
    <li>
      <div css={div}>
        <div css={innerDiv}>
          <i className="material-icons  mdl-list__item-avatar amenitiesAvatar fa fa-check-circle" css={i} ></i>
        </div>
        <div css={innerDiv}>
          <span css={firstLine}>
            Complimentary Breakfast
          </span>
          <br></br>
          <span css={secondLine}>
            Enjoy our traditional Jamaican breakfast included as part of our nightly room rates
          </span>
        </div>
      </div>
    </li>
  </ul>
</React.Fragment>;

//rightcolumn 
const optionsArray = ['option 1', 'option 2', 'option 3'];

const rightcolumn = <React.Fragment></React.Fragment>

const AvailabilityPageContent: FunctionComponent<{}> = () => <React.Fragment>
  <TwoColumnRow leftcolumn={leftcolumn} rightcolumn={rightcolumn} />
</React.Fragment>

export default AvailabilityPageContent;