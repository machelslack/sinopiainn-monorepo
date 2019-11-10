import React, { Component } from 'react';
import { TwoColumnRow } from '../../../layouts/row';
import { SlideShowContainer, SlideShowSlide, SlideShowDots } from '../../slideshow';
import { UnorderedList, UnorderedListItem } from '../../lists';
import SlideShowTextSlide from '../../slideshow/slideshow-text-slide';

export interface HomepageContextInterface {
    changeSlide: any
}

export const HomepageContext = React.createContext<HomepageContextInterface>({
    changeSlide: ''
});

const listItems = [

    {
        title: 'Complimentary Breakfast',
        subtitle: 'Enjoy our traditional Jamaican breakfast included as part of our nightly room rates ',
    }, {
        title: 'On Site Security',
        subtitle: 'Relax and enjoy real peace of mind',
    }, {
        title: 'Complimentary Wireless Internet',
        subtitle: 'Free wireless internet access in guest rooms, meeting spaces and lounge ',
    }, {
        title: 'Outdoor Deck And Jerk Pit',
        subtitle: 'Sit back and relax with views of the cool countryside and a jerk pit ready and wood-stocked perfect for entertaining family and friends during your stay',
    }, {
        title: 'Local guided tours',
        subtitle: '',
    }, {
        title: 'Airport shuttle: pick up and drop off',
        subtitle: '',
    }, {
        title: 'Free parking',
        subtitle: '',
    }
]

const slideshowImages = [

    'assets/images/slideshow/homepage/photo_1.jpg',
    'assets/images/slideshow/homepage/photo_2.jpg',
    'assets/images/slideshow/homepage/photo_3.jpg',
    'assets/images/slideshow/homepage/photo_4.jpg',
    'assets/images/slideshow/homepage/photo_5.jpg',
    'assets/images/slideshow/homepage/photo_6.jpg',
    'assets/images/slideshow/homepage/photo_7.jpg',
]

const firstRowLeftcolumn = <React.Fragment><h1> SINOPIA INN</h1> <p> Set on two acres of lush green gardens, less than a stone’s throw away from Dragon Bay, location of Tom Cruise’s iconic Cocktail movie, you'll quickly understand why Hollywood came calling. And you'll see why the entire villa is the perfect holiday de-stress HQ for families.
There is air-conditioning in all  suites of Sinopia Inn, and  the coolness of the entire home will present a welcome respite to the heat.</p> </React.Fragment>;

const firstRowRightcolumn = <SlideShowContainer slideNumber={0}>
    {
        slideshowImages.map((src) => <SlideShowSlide imgSrc={src} slideNumber={1} />)
    }
    {/* <SlideShowDots /> */}
</SlideShowContainer>;


const roomsSlideShowImages = [

    'assets/images/slideshow/rooms/photo_1.jpg',
    'assets/images/slideshow/rooms/photo_2.jpg',
    'assets/images/slideshow/rooms/photo_3.jpg',
    'assets/images/slideshow/rooms/photo_4.jpg',
    'assets/images/slideshow/rooms/photo_5.jpg',
    'assets/images/slideshow/rooms/photo_6.jpg',
]

const secondRowLeftcolumn = <SlideShowContainer slideNumber={1}>
    {
        roomsSlideShowImages.map((imgsrc) => <SlideShowSlide imgSrc={imgsrc} slideNumber={2} />)
    }
    {/* <SlideShowDots /> */}
</SlideShowContainer>;


const secondRowRightcolumn = <React.Fragment><h1> OUR ROOMS</h1> <p> 

We offer 2 family sized air conditioned en suite bedrooms and 2 double occupancy en suite bedrooms, with modern interior decor that still evokes a feeling of Jamaica’s mid-19th century heyday.

The abundance of palm trees and other Jamaican flora make it a stunning hideaway in Portland, Jamaica.

These units are perfect for all types - families, couples, individuals or groups – all to use as a base to explore what many call the natural parish of Jamaica.
Here you are able to experience tranquil nights and great accommodation alternatives to the resort locations of Montego Bay, Ocho Rios and Negril

We like to think of our home as Jamaica East’s best-kept secret. And home to some of Jamaica's best positive alternative experiences - its cool countryside, hidden beaches, falls and its vibrant local culture.

</p> </React.Fragment>;


const amenitiesSlideShowImages = [

    'assets/images/slideshow/amenities/photo_1.jpg',
    'assets/images/slideshow/amenities/photo_2.jpg',
    'assets/images/slideshow/amenities/photo_4.jpg',
    'assets/images/slideshow/amenities/photo_5.jpg',
]


const thirdRowRightcolumn = <SlideShowContainer slideNumber={2}>
    {
        amenitiesSlideShowImages.map((imgsrc) => <SlideShowSlide imgSrc={imgsrc} slideNumber={3} />)
    }
    {/* <SlideShowDots /> */}
</SlideShowContainer>;


const thirdRowLeftcolumn = <React.Fragment><h1> THINGS TO DO </h1> <p>  Apart from its panoramic views, A trip to a local beach is a must as Portland is famous for its Winifred and Frenchman’s Cove sea views.

Sitting at the foot of the UNESCO Blue Mountains, a leisurely – or, for the more experienced – hearty hike into the area, will reaffirm your spirit with its stunning views and a chance to sample and buy the world’s best coffee: Jamaica Blue Mountain, from its birthplace. For an additional fee, private tours can be arranged once you arrive on-site.

And finally, let’s not forget the Blue Lagoon. This adds the indescribable wow-factor to any visit. With its magical blue waters that change colour during the day through to every shade of blue, jade and emerald, going in for a dip is a must-do activity before you leave the area.</p> </React.Fragment>;


const fourthRowLeftcolumn = <React.Fragment>
    <h1> Why book with us?</h1>
    <UnorderedList>
        {
            listItems.map(item => {
                return <UnorderedListItem title={item.title} subtitle={item.subtitle} icon='' image=''></UnorderedListItem>
            })
        }

    </UnorderedList>
</React.Fragment>


const slideshowTestimonials = [

    {
        quote: `Portland is one my favourite destinations in Jamaica. I absolutely loved that this villa kept true to
    the vibe and spirit of Portland. It was close to a great beach (Frenchmans Cove) and the amazing jerk
    spot in Boston. I can't wait to return! Loved it!!!`,
        quoteLink: `https://www.tripadvisor.co.uk/VacationRentalReview-g147314-d12267757-Sinopia_Inn-Port_Antonio_Portland_Parish_Jamaica.html`,
        quoteSource: `via Trip advisor`
    }, {
        quote: `Jamaica, as we all know, is a bright jewel in the Caribbean clutch of precious islands. Portland, in
    the much-undiscovered east of the isle, is the island's diamond for which you rightly have to dig deep
    for. Having overdone the victuals over Xmas I needed somewhere to detox quietly and within my own space.`,
        quoteLink: `https://www.tripadvisor.co.uk/VacationRentalReview-g147314-d12267757-Sinopia_Inn-Port_Antonio_Portland_Parish_Jamaica.html`,
        quoteSource: `via Trip advisor`
    }, {
        quote: `Beautiful location - near to the Long Bay beach with its bright blue sea and EMPTY beach. Sinopia offers
    a glimpse of rural Jamaica but with all the modern conveniences.`,
        quoteLink: `https://www.tripadvisor.co.uk/VacationRentalReview-g147314-d12371237-The_Pimento_Room_in_Sinopia_Inn-Port_Antonio_Portland_Parish_Jamaica.html`,
        quoteSource: `via Trip advisor`
    }

]

const fourthRowRightcolumn = 
<React.Fragment>
  

<SlideShowContainer slideNumber={3}>
    {
        slideshowTestimonials.map((testimonial) => <SlideShowTextSlide {...testimonial} slideNumber={4} />)
    }
    {/* <SlideShowDots /> */}
</SlideShowContainer>
</React.Fragment>
;


class HomePageContent extends Component<{}> {
    slideIndex: number[] = [];
    slideId: string[] = [];

    constructor(props: any) {
        super(props);
        this.showSlides = this.showSlides.bind(this);
        this.plusSlides = this.plusSlides.bind(this)
    }

    componentDidMount() {
        this.slideIndex = [1, 1, 1, 1];
        this.slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
        this.showSlides(1, 0);
        this.showSlides(1, 1);
        this.showSlides(1, 2);
        this.showSlides(1, 3, true);
    }

    plusSlides = (n: any, no: any) => {
        this.showSlides(this.slideIndex[no] += n, no);
    }

    showSlides = (n: any, no: any, auto: boolean = false) => {
        var i;
        var x;
        x = document.getElementsByClassName(this.slideId[no]) as unknown as HTMLElement[];
        if (n > x.length) { this.slideIndex[no] = 1 }
        if (n < 1) { this.slideIndex[no] = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }

        x[this.slideIndex[no] - 1].style.display = "block";

        auto && setTimeout(() => {
            return this.showSlides(this.slideIndex[no] += 1, no, auto)
        }, 3000);

    }
    render() {

        return (
            <HomepageContext.Provider value={
                {
                    changeSlide: this.plusSlides
                }
            } >
                <React.Fragment>
                    <TwoColumnRow leftcolumn={firstRowLeftcolumn} rightcolumn={firstRowRightcolumn} />
                    <TwoColumnRow leftcolumn={secondRowLeftcolumn} rightcolumn={secondRowRightcolumn} />
                    <TwoColumnRow leftcolumn={thirdRowLeftcolumn} rightcolumn={thirdRowRightcolumn} />
                    <TwoColumnRow leftcolumn={fourthRowLeftcolumn} rightcolumn={fourthRowRightcolumn} />
                </React.Fragment>
            </HomepageContext.Provider>
        )
    }
}

export default HomePageContent