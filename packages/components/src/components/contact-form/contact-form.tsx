/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Component } from "react";
import React from "react";
import { TextField, TextArea, SubmitButton } from "../form";
import { connect } from "react-redux";
import { postEquiry } from "../../store/actions";

/* Style inputs */
const textInput = {
  width: "100%",
  padding: "12px",
  border: "1px solid #ccc",
  marginTop: "6px",
  marginBottom: "16px",
  resize: "vertical"
} as React.CSSProperties;

const textArea = {
  width: "100%",
  padding: "12px",
  border: "1px solid #ccc",
  marginTop: "6px",
  marginBottom: "16px",
  resize: "vertical",
  height: "170px"
} as React.CSSProperties;

const inputSubmit = {
  "background-color": "#4CAF50",
  color: "white",
  padding: "12px 20px",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    "background-color": "#45a049"
  }
};

export interface ContactFormState {
  fname: any;
  lname: any;
  message: any;
  enquiry: any;
}

export type ContactFormProps = {};

export class ContactForm extends Component<any, any> {
  static defaultProps = {
    sendEnquiry: () => {}
  };

  constructor(props: any) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      message: "",
      enquiry: {}
    };
    this.updateEquiry = this.updateEquiry.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    //create reservationId
    console.log(`🍻🍻🍻🍻🍻🍻🍻 contact form component mount`, this.props);
  }

  updateEquiry = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendMessage = (e: any) => {
    e.preventDefault();
    this.setState(
      {
        enquiry: {
          "First Name": this.state.fname,
          "Last Name": this.state.lname,
          Message: this.state.message
        }
      },
      () => {
        console.log("🤑🤑🤑🤑🤑🤑🤑🤑", this.state.enquiry);
        const equiry = this.state.enquiry;
        this.props.sendEnquiry(equiry);
      }
    );
  };

  render() {
    return (
      <form action="/action_page.php">
        <label>First Name</label>
        <input
          type="text"
          style={textInput}
          name="fname"
          onChange={this.updateEquiry}
        />
        <label>Last Name</label>
        <input
          type="text"
          style={textInput}
          name="lname"
          onChange={this.updateEquiry}
        />
        <label>Enquiry</label>
        <input
          type="text"
          style={textArea}
          name="message"
          onChange={this.updateEquiry}
        />
        <input type="submit" style={inputSubmit} onClick={this.sendMessage} />
      </form>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    enquiry: state.enquiry
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    sendEnquiry: (enquiry: any) => {
      dispatch(postEquiry(enquiry));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
