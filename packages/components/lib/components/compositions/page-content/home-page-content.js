"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const row_1 = require("../../../layouts/row");
const slideshow_1 = require("../../slideshow");
const lists_1 = require("../../lists");
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
];
const slideshowImages = [
    'assets/images/slideshow/homepage/photo_1.jpg',
    'assets/images/slideshow/homepage/photo_2.jpg',
    'assets/images/slideshow/homepage/photo_3.jpg',
];
const firstRowLeftcolumn = react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("h1", null, " SINOPIA INN"),
    " ",
    react_1.default.createElement("p", null, " Set on two acres of lush green gardens, Sinopia Inn is an early twentieth century house refurbished with modern interior decor that still evokes a feeling of going back in time. The abundance of palm trees and other Jamaican flora make it a stunning hideaway in Portland, Jamaica. The units are perfect for families, couples or groups to use as a base to explore the natural parish of Portland, Jamaica. Here you are able to experience tranquil nights and great accommodation alternatives to the resort locations of Montego Bay, Ocho Rios and Negril. It\u2019s not like you\u2019re turning your back on traditional island vacations that include all-inclusive beaches and drinks, but it is a positive alternative experience of the cool countryside, its beaches and local culture."),
    " ");
const firstRowRightcolumn = react_1.default.createElement(slideshow_1.SlideShowContainer, null,
    slideshowImages.map((src) => react_1.default.createElement(slideshow_1.SlideShowSlide, { imgSrc: src, slideNumber: 1 })),
    react_1.default.createElement(slideshow_1.SlideShowDots, null));
const secondRowLeftcolumn = react_1.default.createElement(slideshow_1.SlideShowContainer, null,
    slideshowImages.map((imgsrc) => react_1.default.createElement(slideshow_1.SlideShowSlide, { imgSrc: imgsrc, slideNumber: 2 })),
    react_1.default.createElement(slideshow_1.SlideShowDots, null));
const secondRowRightcolumn = react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("h1", null, " OUR ROOMS"),
    " ",
    react_1.default.createElement("p", null, " We offer 2 family sized air conditioned en suite bedrooms and 2 double occupancy en suite bedrooms. Prices include breakfast and range from $115\u2013$125 for a double and $130\u2013$140 for a family sized room, depending on the day and the season. The complete property sleeps 10 quite comfortably at $480 per night Please use the form to search rates and availability. Guests are welcome to check in from 1pm onwards and we need them to check out before 11am. A valid credit or debit card is required to confirm the booking. If the booking is cancelled less than 45 days before arrival, then a charge may apply - depending on the season.  In the event of a \u2018no show\u2019 the full cost of the booking will be charged. During peak season, a minimum three-night stay may be required."),
    " ");
const thirdRowRightcolumn = react_1.default.createElement(slideshow_1.SlideShowContainer, null,
    slideshowImages.map((imgsrc) => react_1.default.createElement(slideshow_1.SlideShowSlide, { imgSrc: imgsrc, slideNumber: 3 })),
    react_1.default.createElement(slideshow_1.SlideShowDots, null));
const thirdRowLeftcolumn = react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("h1", null, " OUR AMENITIES"),
    " ",
    react_1.default.createElement("p", null, "  Apart from its panoramic views, SINOPIA INN has an outdoor patio, a man-made jerk pit and an indoor lounge that doubles as a meeting place to wile away an afternoon. These features make it ideal for hip travellers, family and friends. Guests are encouraged to invite friends and family, making this a winning experience. It is a great holiday location only 7 miles from the parish capital of Port Antonio, with the Blue Lagoon (Blue Hole) and Winnifred Beach (Jamaica\u2019s best) within walking distance either way. Close also are the internationally loved beaches of Frenchman\u2019s Cove and San San. We offer 2 double and 2 family sized rooms that can be booked collectively for entertaining a great family / group vacation. Or the booking can be individual but with full access to the property, but no matter whats in store for your vacation we are committed to making your stay memorable. The whole property sleeps 10 quite comfortably. A few of our amenties and services are onsite security, complimentary breakfast and wifi access for connection with work and home."),
    " ");
const fourthRowLeftcolumn = react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("h1", null, " Why book with us?"),
    react_1.default.createElement(lists_1.UnorderedList, null, listItems.map(item => {
        return react_1.default.createElement(lists_1.UnorderedListItem, { title: item.title, subtitle: item.subtitle, icon: '', image: '' });
    })));
const fourthRowRightcolumn = react_1.default.createElement(slideshow_1.SlideShowContainer, null,
    slideshowImages.map((imgsrc) => react_1.default.createElement(slideshow_1.SlideShowSlide, { imgSrc: imgsrc, slideNumber: 4 })),
    react_1.default.createElement(slideshow_1.SlideShowDots, null));
class HomePageContent extends react_1.Component {
    constructor(props) {
        super(props);
        this.slideIndex = [];
        this.slideId = [];
        this.plusSlides = (n, no) => {
            this.showSlides(this.slideIndex[no] += n, no);
        };
        this.showSlides = (n, no) => {
            var i;
            var x;
            x = document.getElementsByClassName(this.slideId[no]);
            console.log(this.slideId[no]);
            if (n > x.length) {
                this.slideIndex[no] = 1;
            }
            if (n < 1) {
                this.slideIndex[no] = x.length;
            }
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[this.slideIndex[no] - 1].style.display = "block";
        };
        this.showSlides = this.showSlides.bind(this);
    }
    componentDidMount() {
        this.slideIndex = [1, 1, 1, 1];
        this.slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"];
        this.showSlides(1, 0);
        this.showSlides(1, 1);
        this.showSlides(1, 2);
        this.showSlides(1, 3);
    }
    render() {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(row_1.TwoColumnRow, { leftcolumn: firstRowLeftcolumn, rightcolumn: firstRowRightcolumn }),
            react_1.default.createElement(row_1.TwoColumnRow, { leftcolumn: secondRowLeftcolumn, rightcolumn: secondRowRightcolumn }),
            react_1.default.createElement(row_1.TwoColumnRow, { leftcolumn: thirdRowLeftcolumn, rightcolumn: thirdRowRightcolumn }),
            react_1.default.createElement(row_1.TwoColumnRow, { leftcolumn: fourthRowLeftcolumn, rightcolumn: fourthRowRightcolumn })));
    }
}
exports.default = HomePageContent;
