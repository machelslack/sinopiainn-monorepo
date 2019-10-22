/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'
import React, { FunctionComponent, Children } from 'react';
import { ImageTextBlock } from "../../components/image-text-block/";
import { IconBar, IconBarItem } from "../../components/icon-bar/";
import { MenuBar, MenuItem } from "../../components/menu/";
import { DatePicker } from '../../components/datepicker';
import { TwoColumnRow } from '../row';
import { SlideShowContainer, SlideShowSlide, SlideShowDots } from '../../components/slideshow';

const iconBarItems = [
    {class:'fa-phone' ,text:'001-876-12345678'},
]

const menuBarItems = [
    'HOME',
    'BLOG',
    'SHOP',
    'RESERVE',
]

const inmageBlockProps = {
    imgSrc: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
    heading: 'WELCOME',
    paragragh: `Sinopia Inn would like to welcome you to its rustic hideaway. 
    Here you can experience tropical views with lush
    green hills and skies streaked with colour, 
    not to mention amazing sunsets that will have you feeling the
    vibes to just chill.`,
}


const firstRowLeftcolumn = <React.Fragment><h1> SINOPIA INN</h1> <p> Set on two acres of lush green gardens, Sinopia Inn is an early twentieth century house refurbished with modern interior
decor that still evokes a feeling of going back in time. The abundance of palm trees and other Jamaican flora
make it a stunning hideaway in Portland, Jamaica. The units are perfect for families, couples or groups to
use as a base to explore the natural parish of Portland, Jamaica. Here you are able to experience tranquil
nights and great accommodation alternatives to the resort locations of Montego Bay, Ocho Rios and Negril. It’s
not like you’re turning your back on traditional island vacations that include all-inclusive beaches and drinks,
but it is a positive alternative experience of the cool countryside, its beaches and local culture.</p> </React.Fragment>;

const firstRowRightcolumn = <SlideShowContainer>
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


const PageLayout: FunctionComponent<{}> = ({children}) => <React.Fragment>

    <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          body {
            font-family: Arial;
            background: #f1f1f1;
          }
          `}
    />
    <section className="topNavigation">
        <IconBar>
            {
                iconBarItems.map(item => {
                    return <IconBarItem iconType={item} />
                })
            }
        </IconBar>
    </section>
    <section className="heroImage">
        <ImageTextBlock {...inmageBlockProps} />
    </section>
    <section className="mainNavigation">
        <MenuBar>
            {
                menuBarItems.map(item => {
                    return <MenuItem label={item} />
                })
            }
        </MenuBar>
    </section>
    <section className="datePicker">
        <DatePicker />
    </section>
    <section className="mainCotent">
        <TwoColumnRow  leftcolumn={firstRowLeftcolumn} rightcolumn={firstRowRightcolumn}/>
        <TwoColumnRow  leftcolumn={secondRowLeftcolumn} rightcolumn={secondRowRightcolumn}/>
    </section>
    <section className="footer">
    </section>
</React.Fragment>



export default PageLayout;


