/** @jsx jsx */
import { jsx,css } from "@emotion/core";
import { Component } from "react";
import React from "react";
import { TextField, TextArea, SubmitButton } from "../form";
import { connect } from "react-redux";
import { loadEnquirieFailure, loadEnquirieSuccess } from "../../store/actions";

const axios = require("axios");

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
  email: any;
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
      email: "",
      message: "",
      enquiry: {}
    };
    this.updateEquiry = this.updateEquiry.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  componentDidMount() {
    //create reservationId
    console.log(`🍻🍻🍻🍻🍻🍻🍻 contact form component mount`, this.props);
  }

  clearForm = (err?: any) => {
    document.querySelectorAll(".contactFormField").forEach((elem: any) => {
      elem.value = "";
    });
    document.getElementById("errorMessage")!.innerHTML = !err
      ? "Your message has been sent, please check you email for confirmation."
      : err;
  };

  updateEquiry = (e: any) => {
    if (e.target.name === "email") {
      const contactFormSubmit = document.getElementById(
        "contactFormSubmit"
      )! as HTMLButtonElement;
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
      ) {
        this.setState({ [e.target.name]: e.target.value });
        document.getElementById("errorMessage")!.innerHTML = "";
        contactFormSubmit.disabled = false;
      } else {
        document.getElementById("errorMessage")!.innerHTML =
          "You have entered an invalid email address!";
        contactFormSubmit.disabled = true;
      }
    }
    this.setState({ [e.target.name]: e.target.value });
  };

  sendMessage = (e: any) => {
    e.preventDefault();
    this.setState(
      {
        enquiry: {
          "First Name": this.state.fname,
          "Last Name": this.state.lname,
          Email: this.state.email,
          Message: this.state.message
        }
      },
      () => {
        console.log("🤑🤑🤑🤑🤑🤑🤑🤑", this.state.enquiry);
        const equiry = this.state.enquiry;
        this.postEquiry(equiry);
      }
    );
  };

  postEquiry = (equiry: any) => {
    axios
      .post("/enquiry", equiry)
      .then((response: any) => {
        if (response.status === 200) return response.data;
        else throw new Error(response.statusText);
      })
      .then((response: any) => {
        this.props.logEnquirySuccess({
          enquiry_loading: false,
          enquiry_success: true,
          data: response.data
        });
        this.clearForm();
      })
      .catch((error: any) => {
        this.props.logEnquiryError({
          enquiry_loading: false,
          enquiry_success: false,
          data: error
        });
        this.clearForm(error);
        console.log(error);
      });
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
          className="contactFormField"
        />
        <label>Last Name</label>
        <input
          type="text"
          style={textInput}
          name="lname"
          onChange={this.updateEquiry}
          className="contactFormField"
        />
        <label>Email</label>
        <input
          type="email"
          style={textInput}
          name="email"
          onChange={this.updateEquiry}
          className="contactFormField"
        />
        <label>Enquiry</label>
        <textarea
          style={textArea}
          name="message"
          onChange={this.updateEquiry}
          className="contactFormField"
          wrap="hard"
        ></textarea>
        <span id="errorMessage" css={css`color:red`}></span>
        <br></br>
        <button
          type="button"
          style={inputSubmit}
          onClick={this.sendMessage}
          id="contactFormSubmit"
        >
          SEND
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    enquiry: state
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    logEnquirySuccess: (response: any) => {
      dispatch(loadEnquirieSuccess(response));
    },
    logEnquiryError: (response: any) => {
      dispatch(loadEnquirieFailure(response));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
