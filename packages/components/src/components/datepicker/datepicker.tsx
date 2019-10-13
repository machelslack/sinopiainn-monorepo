import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import { TextField } from '../form/';

const datepicker = {

    overflow: "hidden",
    backgroundColor: "#333",
    position: "fixed",
    top: "0",
    width: "100%"

} as React.CSSProperties;

const formInline = {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    "& input": {
        verticalAlign: "middle",
        margin: "5px 10px 5px 0",
        padding: "10px",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
    },
    "& button": {
        padding: "10px 20px",
        backgroundColor: "dodgerblue",
        border: "1px solid #ddd",
        color: "white",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "royalblue"
        }
    }

} as React.CSSProperties;

export const MenuBar: FunctionComponent<{}> = ({ children }) => <section style={datepicker} className="datepicker">
    <form className="form-inline" action="/action_page.php" style={formInline}>
        <TextField />
        <TextField />
        <TextField />
        <button type="submit">Submit</button>
    </form>
</section>

export default MenuBar;