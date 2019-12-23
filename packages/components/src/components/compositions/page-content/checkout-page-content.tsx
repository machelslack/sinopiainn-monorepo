/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";

const column = css`
  display: table-cell;
  padding: 30px;
  h1 {
    border-bottom: thin dashed #cb410b;
    font-size: xxx-large;
    font-weight: 200;
    font-family: "FontspringLight";
    padding-bottom: 20px;
  }
`;

const firstColumn = css`
  width: 40%;
`;

const secondColumn = css`
  width: 60%;
`;

/* Clear floats after the columns */
const row = css`
  display: table;
  width: 100%;
  &:after: {
    content: ;
    display: table;
    clear: both;
  }
`;

const innerrow = css`{
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    margin: 0 -16px;
}`

const col25 = css`{
    -ms-flex: 25%; /* IE10 */
    flex: 25%;
    padding: 0 16px;
  }`
  
  const col50 = css`{
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
    padding: 0 16px;
  }`
  
  const col75 = css`{
    -ms-flex: 75%; /* IE10 */
    flex: 75%;
    padding: 0 16px;
  }`
  

  const container = css`{
    background-color: #f2f2f2;
    padding: 5px 20px 15px 20px;
    border: 1px solid lightgrey;
    border-radius: 3px;
  }`
  
  const textInput = css`{
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }`
  
  const label = css`{
    margin-bottom: 10px;
    display: block;
  }`
  
  const iconContainer = css`{
    margin-bottom: 20px;
    padding: 7px 0;
    font-size: 24px;
  }`
  
  const btn = css`{
    background-color: #4CAF50;
    color: white;
    padding: 12px;
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 17px;
    &:hover {
        background-color: #45a049;
      }
  }`
    
  const a = css`{
    color: #2196F3;
  }`
  
  const hr = css`{
    border: 1px solid lightgrey;
  }`
  
  const panPrice = css`{
    float: right;
    color: grey;
  }`

export class CheckoutPageContent extends Component<{}> {
  render() {
    return (
      <React.Fragment>
        <div className="row" css={row}>
          <div className="column" css={[column, firstColumn]}>
            <div className="container">
              <h4>
                ORDER SUMMARY{" "}
                <span className="price">
                  <i className="fa fa-shopping-cart"></i> <b>4</b>
                </span>
              </h4>
              <p>
                <a href="#">Product 1</a> <span className="price">$15</span>
              </p>
              <hr />
              <p>
                TOTAL{" "}
                <span className="price">
                  <b>$30</b>
                </span>
              </p>
            </div>
          </div>
          <div className="column" css={[column, secondColumn]}>
            <div className="container" css={container}>
              <form action="/action_page.php">
                <div className="row" css={innerrow}>
                  <div className="col-50" css={col50}>
                    <h3>Billing Address</h3>
                    <label data-forfor="fname" css={label}>
                      <i className="fa fa-user"></i> Full Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="John M. Doe"
                      css={textInput}
                    ></input>
                    <label data-for="email" css={label}>
                      <i className="fa fa-envelope"></i> Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      css={textInput}
                    ></input>
                    <label data-for="adr" css={label}>
                      <i className="fa fa-address-card-o"></i> Address
                    </label>
                    <input
                      type="text"
                      id="adr"
                      name="address"
                      placeholder="542 W. 15th Street"
                      css={textInput}
                    ></input>
                    <label data-for="city" css={label}>
                      <i className="fa fa-institution"></i> City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="New York"
                      css={textInput}
                    ></input>

                    <div className="row" css={container}>
                      <div className="col-50" css={col50}>
                        <label data-for="state" css={label}>State</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          placeholder="NY"
                          css={textInput}
                        ></input>
                      </div>
                      <div className="col-50" css={container}>
                        <label data-for="zip" css={label}>Zip</label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          placeholder="10001"
                          css={textInput}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-50" css={col50}>
                    <h3>Payment</h3>
                    <label data-for="fname" css={label}>Accepted Cards</label>
                    <div className="icon-container" css={iconContainer}>
                      <i className="fa fa-cc-visa"></i>
                      <i className="fa fa-cc-amex"></i>
                      <i className="fa fa-cc-mastercard"></i>
                      <i className="fa fa-cc-discover"></i>
                    </div>
                    <label data-for="cname">Name on Card</label>
                    <input
                      type="text"
                      id="cname"
                      name="cardname"
                      placeholder="John More Doe"
                      css={textInput}
                    ></input>
                    <label data-for="ccnum" css={label}>Credit card number</label>
                    <input
                      type="text"
                      id="ccnum"
                      name="cardnumber"
                      placeholder="1111-2222-3333-4444"
                      css={textInput}
                    ></input>
                    <label data-for="expmonth" css={label}>Exp Month</label>
                    <input
                      type="text"
                      id="expmonth"
                      name="expmonth"
                      placeholder="September"
                      css={textInput}
                    ></input>
                    <div className="row" css={container}>
                      <div className="col-50" css={col50}>
                        <label data-for="expyear" css={label}>Exp Year</label>
                        <input
                          type="text"
                          id="expyear"
                          name="expyear"
                          placeholder="2018"
                          css={textInput}
                        ></input>
                      </div>
                      <div className="col-50" css={col50}>
                        <label data-for="cvv" css={label}>CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder="352"
                          css={textInput}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <label css={label}>
                  <input type="checkbox" checked={true} name="sameadr">
                    {" "}
                    Shipping address same as billing
                  </input>
                </label>
                <input
                  type="submit"
                  value="Continue to checkout"
                  className="btn"
                  css={btn}
                ></input>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPageContent);
