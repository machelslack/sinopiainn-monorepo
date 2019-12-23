/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { Component } from "react";

const ul = css`
   {
    list-style-type: none;
  }
`;

const month = css`
   {
    padding: 70px 25px;
    width: 100%;
    background: #cb410b;
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      li {
        color: white;
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 3px;
        &.prev {
          float: left;
          padding-top: 10px;
        }

        &.next {
          float: right;
          padding-top: 10px;
        }
      }
    }
  }
`;

const weekdays = css`
   {
    margin: 0;
    padding: 10px 0;
    background-color: #ddd;
    li {
      display: inline-block;
      width: 13.6%;
      color: #666;
    }
  }
`;

const days = css`
   {
    padding: 10px 0;
    background: #eee;
    margin: 0;
    li {
      list-style-type: none;
      display: inline-block;
      width: 13.6%;
      text-align: center;
      margin-bottom: 5px;
      font-size: 12px;
      color: #777;

      &.active {
        padding: 5px;
        background: #1abc9c;
        color: white !important;
      }
    }
  }
`;

class Calendar extends Component<
  { name: string },
  {
    currentMonth: any;
    currentDay: any;
    currentYear: any;
    days: any;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentMonth: 0,
      currentDay: 0,
      currentYear: 0,
      days: []
    };
    this.getDaysInMonth = this.getDaysInMonth.bind(this);
  }

  componentDidMount() {
    const date = new Date();
    this.setState({
      currentMonth: date.getDate(),
      currentDay: date.getMonth(),
      currentYear: date.getFullYear()
    });
  }

  /**
   * @param {int} The month number, 0 based
   * @param {int} The year, not zero based, required to account for leap years
   * @return {Date[]} List with date objects for each day of the month
   */
  getDaysInMonth = (month: any, year: any) => {
    var date = new Date(Date.UTC(year, month, 1));
    var days = [];
    var sunday = [],
      monday = [],
      tuesday = [],
      wednesday = [],
      thursday = [],
      friday = [],
      saturday = [],
      blank = [];
    while (date.getMonth() === month) {
      switch (date.getDay()) {
        case 0:
          sunday.push(new Date(date).getDate());
          break;
        case 1:
          monday.push(new Date(date).getDate());
          break;
        case 2:
          tuesday.push(new Date(date).getDate());
          break;
        case 3:
          wednesday.push(new Date(date).getDate());
          break;
        case 4:
          thursday.push(new Date(date).getDate());
          break;
        case 5:
          friday.push(new Date(date).getDate());
          break;
        case 6:
          saturday.push(new Date(date).getDate());
          break;
        default:
          blank.push('')
      }
      date.setDate(date.getDate() + 1);
    }
    days.push(sunday);
    days.push(monday);
    days.push(tuesday);
    days.push(wednesday);
    days.push(thursday);
    days.push(friday);
    days.push(saturday);
    return days;
  };

  renderDays = () => {
    const date = new Date();
    const currentMonth = date.getDate();
    const currentDay = date.getMonth();
    const currentYear = date.getFullYear();
    const days = this.getDaysInMonth(
      currentMonth,
      currentYear
    );
    for (let week = 0; week < 5; week++) {
      for (let dayOfWeek = 0; dayOfWeek < 6; dayOfWeek++) {
        const day = days[dayOfWeek][week];
        return `<li>${!!day ? day : ''}</li>`;
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="month" css={month}>
          <ul css={ul}>
            <li className="prev">&#10094;</li>
            <li className="next">&#10095;</li>
            <li>
              August<br></br>
              <span>2017</span>
            </li>
          </ul>
        </div>

        <ul className="weekdays" css={weekdays}>
          <li>Su</li>
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
        </ul>

        <ul className="days" css={days}>
          {this.renderDays()}
        </ul>
      </React.Fragment>
    );
  }
}
export default Calendar;
