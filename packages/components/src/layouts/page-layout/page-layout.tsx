/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'
import React, { FunctionComponent, Children } from 'react';
import { ImageTextBlock } from "../../components/image-text-block/";
import { IconBar, IconBarItem, SocialIconBar } from "../../components/icon-bar/";
import { MenuBar, MenuItem } from "../../components/menu/";
import { DatePicker } from '../../components/datepicker';
import { Column, Row } from '../row';
import { SlideShowContainer, SlideShowSlide, SlideShowDots } from '../../components/slideshow';
import { UnorderedList, UnorderedListItem } from '../../components/lists';
import { ImageZoom } from '../../components/image/'
import { Logo } from '../../components/logo';
import { mainContent } from '../../components/compositions';
const iconBarItems = [
    { class: '', text: '001-876-12345678' },
    { class: 'fa-phone', text: '' },
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

const PageLayout: FunctionComponent<{ pageData: any }> = ({ pageData }) => <React.Fragment>

    <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          body {
            font-family: Arial;
            background: #ffffff;
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
    <Logo />
    <section className="mainNavigation">
        <MenuBar>
            {
                menuBarItems.map(item => {
                    return <MenuItem label={item} />
                })
            }
        </MenuBar>
    </section>
    <section className="heroImage">
        <ImageTextBlock {...inmageBlockProps} />
    </section>
    <section className="datePicker">
        <DatePicker />
    </section>
    <section className="mainCotent">
        {console.log(pageData)}
        {mainContent[pageData]()}
    </section>
    <section className="footer" css={css`{
            background-color: black;
            padding:30px;
    }`}>
        <Row>
            <Column>
                <h3>We are here</h3>
                <ImageZoom />
            </Column>
            <Column>
                <h3>Conntect with us</h3>
                <SocialIconBar />
            </Column>
            <Column>
                <h3>Recent posts</h3>
            </Column>
            <Column>
                <h3>Find us at</h3>
            </Column>
        </Row>
    </section>
</React.Fragment>



export default PageLayout;


