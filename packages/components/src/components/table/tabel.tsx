/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from 'react';

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

const Table: FunctionComponent<{ headings: any, rows: any }> = ({ headings, rows }) => <div css={tableDiv}>
    <table css={table}>
        {
            headings.map((heading: any) => {
                return `<tr>
        ${
                    heading.cell.map((content: any) => {
                        return `<th css={th}>${content} </th>`
                    })
                    }
        </tr>`
            })
        }
        {
            rows.map((row: any) => {
                return `<tr>
        ${
                    row.cell.map((cell: any) => {
                        return `<td css={td}>${cell} </td>`
                    })
                    }
        </tr>`
            })
        }
    </table>
</div>

export default Table;