import React from 'react';
import { TwoColumnRow } from '../../../layouts/row';
import { SlideShowContainer, SlideShowSlide, SlideShowDots } from '../../slideshow';
import { UnorderedList, UnorderedListItem } from '../../lists';


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
        title: 'Spacious lobby, dining and seating areas',
        subtitle: '',
    }, {
        title: 'Local guided tours',
        subtitle: '',
    }, {
        title: 'Airport shuttle: pick up and drop off can be arranged',
        subtitle: '',
    }, {
        title: 'Private car hire available for long and short trips',
        subtitle: '',
    }, {
        title: 'Free parking',
        subtitle: '',
    }
]

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


const secondRowRightcolumn = <React.Fragment><h1> OUR ROOMS</h1> <p> We offer 2 family sized air conditioned en suite bedrooms and 2 double occupancy en suite bedrooms. Prices include
breakfast and range from $115–$125 for a double and $130–$140 for a family sized room, depending on the day
and the season. The complete property sleeps 10 quite comfortably at $480 per night Please use the form to
search rates and availability. Guests are welcome to check in from 1pm onwards and we need them to check out
before 11am. A valid credit or debit card is required to confirm the booking. If the booking is cancelled less
than 45 days before arrival, then a charge may apply - depending on the season.  In the event of a ‘no show’
the full cost of the booking will be charged. During peak season, a minimum three-night stay may be required.</p> </React.Fragment>;


const thirdRowRightcolumn = <SlideShowContainer>
    <SlideShowSlide />
    <SlideShowDots />
</SlideShowContainer>;


const thirdRowLeftcolumn = <React.Fragment><h1> OUR AMENITIES</h1> <p>  Apart from its panoramic views, SINOPIA INN has an outdoor patio, a man-made jerk pit and an indoor lounge that doubles as
a meeting place to wile away an afternoon. These features make it ideal for hip travellers, family and friends.
Guests are encouraged to invite friends and family, making this a winning experience. It is a great holiday
location only 7 miles from the parish capital of Port Antonio, with the Blue Lagoon (Blue Hole) and Winnifred
Beach (Jamaica’s best) within walking distance either way. Close also are the internationally loved beaches
of Frenchman’s Cove and San San. We offer 2 double and 2 family sized rooms that can be booked collectively
for entertaining a great family / group vacation. Or the booking can be individual but with full access to
the property, but no matter whats in store for your vacation we are committed to making your stay memorable.
The whole property sleeps 10 quite comfortably. A few of our amenties and services are onsite security, complimentary
breakfast and wifi access for connection with work and home.</p> </React.Fragment>;


const fourthRowLeftcolumn = <React.Fragment>
    <h1> Why book with us?</h1>
    <UnorderedList>
        {
            listItems.map(item => {
                return <UnorderedListItem title={item.title} subtitle={item.subtitle}></UnorderedListItem>
            })
        }

    </UnorderedList>
</React.Fragment>


const fourthRowRightcolumn = <SlideShowContainer>
    <SlideShowSlide />
    <SlideShowDots />
</SlideShowContainer>;


const HomePageContent = (props: any) => <React.Fragment>
    <TwoColumnRow leftcolumn={firstRowLeftcolumn} rightcolumn={firstRowRightcolumn} />
    <TwoColumnRow leftcolumn={secondRowLeftcolumn} rightcolumn={secondRowRightcolumn} />
    <TwoColumnRow leftcolumn={thirdRowLeftcolumn} rightcolumn={thirdRowRightcolumn} />
    <TwoColumnRow leftcolumn={fourthRowLeftcolumn} rightcolumn={fourthRowRightcolumn} />
</React.Fragment>

export default HomePageContent;
