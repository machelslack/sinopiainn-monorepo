import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import { TextField } from '../form/';

const datepicker = {
    overflow: "hidden",
    backgroundColor: "#333",
    width: "100%",
    testAlign:"center"


} as React.CSSProperties;

const formInline = {
    // display: "flex",
    // flexFlow: "row wrap",
    alignItems: "center",
    textAlign:"center"
} as React.CSSProperties;


const inputStyles = {
    verticalAlign: "middle",
    margin: "5px 10px 5px 0",
    padding: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
} as React.CSSProperties

const buttonStyles = {
    padding: "10px 20px",
    backgroundColor: "dodgerblue",
    border: "1px solid #ddd",
    color: "white",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "royalblue"
    }
}

const sticky = {
    position: "fixed",
    top: "0",
    width: "100%"
  }
  
export const Datepicker: FunctionComponent<{}> = ({ children }) => <section style={datepicker} className="datepicker">
    <form className="form-inline" action="/action_page.php" style={formInline}>
        <input type="text" style={inputStyles} />
        <input type="text" style={inputStyles} />
        <input type="text" style={inputStyles} />
        <button type="submit" style={buttonStyles}>CHECK AVAILABILTY</button>
    </form>
</section>

export default Datepicker;