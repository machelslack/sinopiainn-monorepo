/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TwoColumnRow } from '../../../layouts/row';
import { addItem } from "../../../store/actions";
import { getRooms, getAmenities, itinerary } from "../../../store/selectors";

export interface ReservePageContextInterface {
}

export const ReservepageContext = React.createContext<ReservePageContextInterface>({
});


//leftcolumn

const ul = css` list-style:none; width:100%;padding:0px;`;

const div = css`display:table`;

const innerDiv = css`display:table-cell; vertical-align:middle;`;

const i = css`font-size:40px;padding:10px; line-height:1;color:#CB410B;`;

const firstLine = css`font-size:16px;  font-family: 'FontspringRegular';`;

const secondLine = css`font-size:12px;  font-family: 'FontspringLight';`;

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

const leftcolumn = <React.Fragment><h1> ROOMS</h1> 
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

const rightcolumn = <React.Fragment><h1> AMENITIES</h1> 

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

</React.Fragment>

const secondRowLeftColumn = <React.Fragment></React.Fragment>

const secondRowRightColumn = <React.Fragment><h1> ITINERARY</h1> <p>

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
</p>
</React.Fragment>


const renderItem = (items: any) => {

  return <React.Fragment>

    {
      items.map((items: any) => <ul css={ul}>
        <li>
          <div css={div}>
            <div css={innerDiv}>
              <img className="material-icons  mdl-list__item-avatar amenitiesAvatar fa fa-check-circle" css={i} ></img>
            </div>
            <div css={innerDiv}>
              <span css={firstLine}>
                {items.name}
              </span>
              <br></br>
              <span css={secondLine}>
                {items.description}
              </span>
            </div>
            <div css={innerDiv}>
              <span className="close"> {`Add for $${items.rate}`}</span>
            </div>
          </div>
        </li>
      </ul>)
    }

  </React.Fragment>

}


export class ReservePageContent extends Component<{}> {

  constructor(props: any) {
    super(props);
    this.addItem = this.addItem.bind(this)
  }

  addItem = () => {
    
  }

  render() {
    return (<React.Fragment>
      {/* <TwoColumnRow leftcolumn={renderItem(this.props.rooms)} rightcolumn={renderItem(this.props.amenities)} /> */}
      <TwoColumnRow leftcolumn={leftcolumn} rightcolumn={rightcolumn} />
      <TwoColumnRow leftcolumn={secondRowLeftColumn} rightcolumn={secondRowRightColumn} />
    </React.Fragment>
    )
  }
}


const mapStateToProps = (state: any, ownProps: any) => {
  return {
    rooms:getRooms(state),
    amenities:getAmenities(state),
    itinerary:itinerary(state)
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    addItem:(item:any,type:any) => dispatch(addItem(item,type))
  }
}

// export default ReservePageContent;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservePageContent);
