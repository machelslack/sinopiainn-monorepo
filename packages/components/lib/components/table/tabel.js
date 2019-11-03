"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const table = core_1.css `
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
`;
const td = core_1.css `  text-align: left;
padding: 8px;`;
const tableDiv = core_1.css `overflow-x:auto;`;
const th = core_1.css `border:red thin solid; color red;text-align: left;
padding: 8px;`;
// tr: nth - child(even){ background - color: #f2f2f2 }
const Table = ({ headings, rows }) => core_1.jsx("div", { css: tableDiv },
    core_1.jsx("table", { css: table },
        headings.map((heading) => {
            return `<tr>
        ${heading.cell.map((content) => {
                return `<th css={th}>${content} </th>`;
            })}
        </tr>`;
        }),
        rows.map((row) => {
            return `<tr>
        ${row.cell.map((cell) => {
                return `<td css={td}>${cell} </td>`;
            })}
        </tr>`;
        })));
exports.default = Table;
