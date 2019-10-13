/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'
import React, { FunctionComponent, Children } from 'react';
import { ImageTextBlock } from "../../components/image-text-block/";
import { IconBar, IconBarItem } from "../../components/icon-bar/";
import { MenuBar, MenuItem } from "../../components/menu/";

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
    heading: 'WELCOME',
    paragragh: `Sinopia Inn would like to welcome you to its rustic hideaway. Here you can experience tropical views with lush
    green hills and skies streaked with colour, not to mention amazing sunsets that will have you feeling the
    vibes to just chill.`,
}

const PageLayout: FunctionComponent<{}> = () => <React.Fragment>

    <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          body {
            font-family: Arial;
            padding: 20px;
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
            <i> 001 (876) xxxx</i>
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
    </section>
    <section className="mainCotent">
    </section>
    <section className="footer">
    </section>
</React.Fragment>



export default PageLayout;


