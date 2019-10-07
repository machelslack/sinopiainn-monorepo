import React from "react";
import { TwoColumnRow } from "@sinopiainn/components/lib/layouts/row";
import { SlideShowContainer } from "@sinopiainn/components/lib/components/slideshow/";
import { SlideShowSlide } from "@sinopiainn/components/lib/components/slideshow/";
import { SlideShowDots } from "@sinopiainn/components/lib/components/slideshow/";
import { ImageTextBlock } from "@sinopiainn/components/lib/components/image-text-block/";
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

storiesOf("Home Page Layout", module)
  .add("HomePage", () => (
    <React.Fragment>
      <ImageTextBlock />
      <TwoColumnRow leftcolumn={row1Leftcolumn} rightcolumn={row1Rightcolumn} />
    </React.Fragment>
  ));

