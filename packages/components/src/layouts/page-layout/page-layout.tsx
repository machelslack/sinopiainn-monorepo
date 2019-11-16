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
    { class: 'fa-phone', text: '', href: '/contacts' },
]

const menuBarItems = [
    'HOME',
    'SHOP',
    'BLOG',
    'RESERVE',
]
const recentBlogPost = [

    {

        title: "TITLE HEADING",
        description: "Title description",
        postDate: " Dec 7, 2017",
        imageSrc: "",
        opening: "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {

        title: "TITLE HEADING",
        description: "Title description",
        postDate: " Dec 7, 2017",
        imageSrc: "",
        opening: "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {

        title: "TITLE HEADING",
        description: "Title description",
        postDate: " Dec 7, 2017",
        imageSrc: "",
        opening: "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    }

]

const recentPostTitle = css`text-decoration:none;color:white;`;

const PageLayout: FunctionComponent<{ pageData: any }> = ({ children, pageData }) => <React.Fragment>

    <Global
        styles={css`
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
          * {
            box-sizing: border-box;
          }
          body {
            font-family: FontspringRegular;
            background: #ffffff;
          }
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 700px) {
  .row {   
    flex-direction: column;
  }
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
        <ImageTextBlock imgSrc={pageData} {...pageData.imageBlock} />
    </section>
    <section className="datePicker">
        <DatePicker />
    </section>
    <section className="mainCotent" css={css`{
            background-color:#fbfbfb;
    }`}>
        {children}
    </section>
    <section className="footer" css={css`{
            background-color:black;
            padding:30px;
            font-family: FontspringLight;
            color:white;
    }`}>
        <Row>
            <Column >
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
                <large>Recent posts</large>
                <br></br>
                <ul>
                    {
                        recentBlogPost.map((post) => <li>
                            <a href="" css={recentPostTitle}> <medium className="recentPostTitle" >{post.title}</medium></a>
                            <br></br>
                            <small>{post.description},{post.postDate}</small>
                        </li>)
                    }
                </ul>
            </Column>
            <Column>

                <p></p>
            </Column>
        </Row>
    </section>
</React.Fragment>



export default PageLayout;


