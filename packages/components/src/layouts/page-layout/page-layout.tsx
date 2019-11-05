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
import { NavBar } from '../../components/navigation';
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
    imgSrc: 'assets/images/hero-images/hero-images-1.jpg',
    heading: 'WELCOME',
    paragragh: `Sinopia Inn would like to welcome you to its rustic hideaway. 
    Here you can experience tropical views with lush
    green hills and skies streaked with colour, 
    not to mention amazing sunsets that will have you feeling the
    vibes to just chill.`,
}

const PageLayout: FunctionComponent<{ pageData: any }> = ({ children, pageData }) => <React.Fragment>

    <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          body {
            font-family: Arial;
            background: #ffffff;
          }
          @font-face {
            font-family: 'Waiting for the Sunrise';
            font-style: normal;
            font-weight: 400;
            src: local('Waiting for the Sunrise'), local('WaitingfortheSunrise'), url(http://fonts.gstatic.com/s/waitingforthesunrise/v7/eNfH7kLpF1PZWpsetF-ha6dq3j6WwEb-fqwg9dMLRYwC1LhKU8qFLLahJuQDJSaO.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
          }
          @font-face {
            font-family: Fontspring;
            src: url(assets/fonts/fontSpring/Fontspring-DEMO-cera-medium.otf);
            }
            
            @font-face {
            font-family: FontspringLight;
            src: url(assets/fonts/fontSpring/Fontspring-DEMO-cera-light.otf);
            }
            
            @font-face {
            font-family: FontspringRegular;
            src: url(assets/fonts/fontSpring/Fontspring-DEMO-cera-regular.otf);
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
        <NavBar />
    </section>
    <section className="heroImage">
        <ImageTextBlock {...inmageBlockProps} />
    </section>
    <section className="datePicker">
        <DatePicker />
    </section>
    <section className="mainCotent">
        {children}
    </section>
    <section className="footer" css={css`{
            background-color:black;
            padding:30px;
            font-family: FontspringLight;
            color:white;
    }`}>
        <Row>
            <Column>
                <large>We are here</large><br></br>
                <p><small> Zion Hill</small><br></br>
                <small> Fairy Hill PO</small><br></br>
                <small> Port Antonio, Jamaica</small><br></br></p>
                <ImageZoom />
                <br></br>
                <small>contact us at 001-876-12345678</small>
            </Column>
            <Column>
                <large>Conntect with us</large>
                <p><SocialIconBar /></p>
            </Column>
            <Column>
                <large>Recent posts</large>
                <p></p>
            </Column>
            <Column>
                <large></large>
                <p></p>
            </Column>
        </Row>
    </section>
</React.Fragment>



export default PageLayout;


