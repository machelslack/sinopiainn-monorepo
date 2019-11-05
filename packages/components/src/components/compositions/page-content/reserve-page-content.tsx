/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react';
import { TwoColumnRow } from '../../../layouts/row';
import { TextField, SelectField, TextArea, SubmitButton } from '../../form';

//leftcolumn

const ul = css` list-style:none; width:100%; `;

const div = css`display:table

& .innderDiv {
  display:table-cell; vertical-align:middle;
}

`;

const innerDiv = css`display:table-cell; vertical-align:middle;`;

const i = css`font-size:50px;padding:5px; line-height:1;`;

const firstLine = css`font-size:16px`;

const secondLine = css`font-size:11px`;

const close = css`position: absolute;
right: 0;
top: 0;
padding: 12px 16px 12px 16px;`;



const table = css`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
`

const td = css`  text-align: left;
padding: 8px;`

const tableDiv = css`overflow-x:auto;`

const th = css`border:red thin solid; color red;text-align: left;
padding: 8px;`

// tr: nth - child(even){ background - color: #f2f2f2 }

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
        <div css={innerDiv}>
          <span className="close">×</span>
        </div>
      </div>
    </li>
  </ul>
</React.Fragment>;

//rightcolumn 
const optionsArray = ['option 1', 'option 2', 'option 3'];

const rightcolumn = <React.Fragment>

  <div css={tableDiv}>
    <table css={table}>
      <tr>
        <th css={th} colSpan={3} >First Name</th>
      </tr>
      <tr>
        <td css={td}>First Name</td>
        <td css={td}>Last Name</td>
        <td css={td}>Points</td>
      </tr>
    </table>
  </div>




</React.Fragment>

const ReservePageContent: FunctionComponent<{}> = () => <React.Fragment>
  <TwoColumnRow leftcolumn={leftcolumn} rightcolumn={rightcolumn} />
  <TwoColumnRow leftcolumn={leftcolumn} rightcolumn={rightcolumn} />
</React.Fragment>

export default ReservePageContent;