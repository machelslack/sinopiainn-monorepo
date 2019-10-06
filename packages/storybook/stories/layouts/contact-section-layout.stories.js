import React from "react";
import { TwoColumnRow } from "@sinopiainn/components/lib/layouts/row";
import { SelectField } from "@sinopiainn/components/lib/components/form";
import { SubmitButton } from "@sinopiainn/components/lib/components/form";
import { TextArea } from "@sinopiainn/components/lib/components/form";
import { TextField } from "@sinopiainn/components/lib/components/form";
import { storiesOf } from "@storybook/react";


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


storiesOf("Contact Section Layout", module)
  .add("ContactSection", () => (
    <TwoColumnRow leftcolumn={leftcolumn} rightcolumn={rightcolumn} />
  ));

