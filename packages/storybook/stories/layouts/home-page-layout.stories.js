import React from "react";
import { TwoColumnRow } from "@sinopiainn/components/lib/layouts/row";
import { SlideShowContainer, SlideShowSlide, SlideShowDots } from "@sinopiainn/components/lib/components/slideshow/";
import { ImageTextBlock } from "@sinopiainn/components/lib/components/image-text-block/";
import { IconBar, IconBarItem } from "@sinopiainn/components/lib/components/icon-bar/";
import { MenuBar, MenuItem } from "@sinopiainn/components/lib/components/menu/";
import { DatePicker } from "@sinopiainn/components/lib/components/datepicker/";
import { UnorderedList, UnorderedListItem } from "@sinopiainn/components/lib/components/lists/";



import { storiesOf } from "@storybook/react";

const row1Leftcolumn = <React.Fragment><h1> SINOPIA INN</h1> <p> Set on two acres of lush green gardens, Sinopia Inn is an early twentieth century house refurbished with modern interior
decor that still evokes a feeling of going back in time. The abundance of palm trees and other Jamaican flora
make it a stunning hideaway in Portland, Jamaica. The units are perfect for families, couples or groups to
use as a base to explore the natural parish of Portland, Jamaica. Here you are able to experience tranquil
nights and great accommodation alternatives to the resort locations of Montego Bay, Ocho Rios and Negril. It’s
not like you’re turning your back on traditional island vacations that include all-inclusive beaches and drinks,
but it is a positive alternative experience of the cool countryside, its beaches and local culture.</p> </React.Fragment>;

const row1Rightcolumn = <SlideShowContainer>
  <SlideShowSlide />
  <SlideShowDots />
</SlideShowContainer>;

const secondRowLeftcolumn = <SlideShowContainer>
  <SlideShowSlide />
  <SlideShowDots />
</SlideShowContainer>;


const secondRowRightcolumn = <React.Fragment><h1> SINOPIA INN</h1> <p> Set on two acres of lush green gardens, Sinopia Inn is an early twentieth century house refurbished with modern interior
decor that still evokes a feeling of going back in time. The abundance of palm trees and other Jamaican flora
make it a stunning hideaway in Portland, Jamaica. The units are perfect for families, couples or groups to
use as a base to explore the natural parish of Portland, Jamaica. Here you are able to experience tranquil
nights and great accommodation alternatives to the resort locations of Montego Bay, Ocho Rios and Negril. It’s
not like you’re turning your back on traditional island vacations that include all-inclusive beaches and drinks,
but it is a positive alternative experience of the cool countryside, its beaches and local culture.</p> </React.Fragment>;

const iconBarItems = [
  'fa-phone',
]

const menuBarItems = [
  'HOME',
  'BLOG',
  'SHOP',
  'RESERVE',
]

const inmageBlockProps = {
  imgSrc: '',
  heaing: 'WELCOME',
  paragragh: `Sinopia Inn would like to welcome you to its rustic hideaway. Here you can experience tropical views with lush
  green hills and skies streaked with colour, not to mention amazing sunsets that will have you feeling the
  vibes to just chill.`,
}
storiesOf("Home Page Layout", module)
  .add("HomePage", () => (
    <React.Fragment>
      <IconBar>
        {
          iconBarItems.map(item => {
            return <IconBarItem iconType={item} />
          })
        }
        <i> 001 (876) xxxx</i>
      </IconBar>
      <ImageTextBlock {...inmageBlockProps} />
      <MenuBar>
        {
          menuBarItems.map(item => {
            return <MenuItem label={item} />
          })
        }
      </MenuBar>
      {/* <DatePicker /> */}
    </React.Fragment>
  ));

