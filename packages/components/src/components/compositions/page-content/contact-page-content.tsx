import React, { FunctionComponent } from 'react';
import { TwoColumnRow } from '../../../layouts/row';
import { TextField, SelectField, TextArea, SubmitButton } from '../../form';
import HomePageContent from './home-page-content';

//leftcolumn

const leftcolumn = <React.Fragment> <img src="/w3images/map.jpg" style={{'width' : '100%'}}></img> </React.Fragment>;

//rightcolumn 
const optionsArray = ['option 1', 'option 2', 'option 3'];

const rightcolumn =
  <React.Fragment>
    <form action="/action_page.php">
      <label>First Name</label>
      <TextField />
      <label>Last Name</label>
      <TextField />
      <label>Country</label>
      <SelectField options={optionsArray} /> 
      <label>Subject</label>
      <TextArea />
      <SubmitButton />
    </form>
  </React.Fragment>


const ContactPageContent: FunctionComponent<{}> = () => <React.Fragment>
<TwoColumnRow leftcolumn={leftcolumn} rightcolumn={rightcolumn} />
</React.Fragment>

    


export default ContactPageContent;
