"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const row_1 = require("../../../layouts/row");
const slideshow_1 = require("../../slideshow");
const lists_1 = require("../../lists");
const slideshow_text_slide_1 = __importDefault(require("../../slideshow/slideshow-text-slide"));
exports.HomepageContext = react_1.default.createContext({
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
];
const slideshowImages = [
    'assets/images/slideshow/homepage/photo_1.jpg',
    'assets/images/slideshow/homepage/photo_2.jpg',
    'assets/images/slideshow/homepage/photo_3.jpg',
    'assets/images/slideshow/homepage/photo_4.jpg',
    'assets/images/slideshow/homepage/photo_5.jpg',
    'assets/images/slideshow/homepage/photo_6.jpg',
    'assets/images/slideshow/homepage/photo_7.jpg',
];
const firstRowLeftcolumn = react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("h1", null, " SINOPIA INN"),
    " ",
    react_1.default.createElement("p", null, " Set on two acres of lush green gardens, less than a stone\u2019s throw away from Dragon Bay, location of Tom Cruise\u2019s iconic Cocktail movie, you'll quickly understand why Hollywood came calling. And you'll see why the entire villa is the perfect holiday de-stress HQ for families. There is air-conditioning in all  suites of Sinopia Inn, and  the coolness of the entire home will present a welcome respite to the heat."),
    " ");
const firstRowRightcolumn = react_1.default.createElement(slideshow_1.SlideShowContainer, { slideNumber: 0 }, slideshowImages.map((src) => react_1.default.createElement(slideshow_1.SlideShowSlide, { imgSrc: src, slideNumber: 1 })));
const roomsSlideShowImages = [
    'assets/images/slideshow/rooms/photo_1.jpg',
    'assets/images/slideshow/rooms/photo_2.jpg',
    'assets/images/slideshow/rooms/photo_3.jpg',
    'assets/images/slideshow/rooms/photo_4.jpg',
    'assets/images/slideshow/rooms/photo_5.jpg',
    'assets/images/slideshow/rooms/photo_6.jpg',
];
const secondRowLeftcolumn = react_1.default.createElement(slideshow_1.SlideShowContainer, { slideNumber: 1 }, roomsSlideShowImages.map((imgsrc) => react_1.default.createElement(slideshow_1.SlideShowSlide, { imgSrc: imgsrc, slideNumber: 2 })));
const secondRowRightcolumn = react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("h1", null, " OUR ROOMS"),
    " ",
    react_1.default.createElement("p", null, "We offer 2 family sized air conditioned en suite bedrooms and 2 double occupancy en suite bedrooms, with modern interior decor that still evokes a feeling of Jamaica\u2019s mid-19th century heyday. The abundance of palm trees and other Jamaican flora make it a stunning hideaway in Portland, Jamaica. These units are perfect for all types - families, couples, individuals or groups \u2013 all to use as a base to explore what many call the natural parish of Jamaica. Here you are able to experience tranquil nights and great accommodation alternatives to the resort locations of Montego Bay, Ocho Rios and Negril We like to think of our home as Jamaica East\u2019s best-kept secret. And home to some of Jamaica's best positive alternative experiences - its cool countryside, hidden beaches, falls and its vibrant local culture."),
    " ");
const amenitiesSlideShowImages = [
    'assets/images/slideshow/amenities/photo_1.jpg',
    'assets/images/slideshow/amenities/photo_2.jpg',
    'assets/images/slideshow/amenities/photo_4.jpg',
    'assets/images/slideshow/amenities/photo_5.jpg',
];
const thirdRowRightcolumn = react_1.default.createElement(slideshow_1.SlideShowContainer, { slideNumber: 2 }, amenitiesSlideShowImages.map((imgsrc) => react_1.default.createElement(slideshow_1.SlideShowSlide, { imgSrc: imgsrc, slideNumber: 3 })));
const thirdRowLeftcolumn = react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("h1", null, " THINGS TO DO "),
    " ",
    react_1.default.createElement("p", null, "  Apart from its panoramic views, A trip to a local beach is a must as Portland is famous for its Winifred and Frenchman\u2019s Cove sea views. Sitting at the foot of the UNESCO Blue Mountains, a leisurely \u2013 or, for the more experienced \u2013 hearty hike into the area, will reaffirm your spirit with its stunning views and a chance to sample and buy the world\u2019s best coffee: Jamaica Blue Mountain, from its birthplace. For an additional fee, private tours can be arranged once you arrive on-site. And finally, let\u2019s not forget the Blue Lagoon. This adds the indescribable wow-factor to any visit. With its magical blue waters that change colour during the day through to every shade of blue, jade and emerald, going in for a dip is a must-do activity before you leave the area."),
    " ");
const fourthRowLeftcolumn = react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("h1", null, " Why book with us?"),
    react_1.default.createElement(lists_1.UnorderedList, null, listItems.map(item => {
        return react_1.default.createElement(lists_1.UnorderedListItem, { title: item.title, subtitle: item.subtitle, icon: '', image: '' });
    })));
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
];
const fourthRowRightcolumn = react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(slideshow_1.SlideShowContainer, { slideNumber: 3 }, slideshowTestimonials.map((testimonial) => react_1.default.createElement(slideshow_text_slide_1.default, Object.assign({}, testimonial, { slideNumber: 4 })))));
class HomePageContent extends react_1.Component {
    constructor(props) {
        super(props);
        this.slideIndex = [];
        this.slideId = [];
        this.plusSlides = (n, no) => {
            this.showSlides(this.slideIndex[no] += n, no);
        };
        this.showSlides = (n, no, auto = false) => {
            var i;
            var x;
            x = document.getElementsByClassName(this.slideId[no]);
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
            auto && setTimeout(() => {
                return this.showSlides(this.slideIndex[no] += 1, no, auto);
            }, 3000);
        };
        this.showSlides = this.showSlides.bind(this);
        this.plusSlides = this.plusSlides.bind(this);
    }
    componentDidMount() {
        this.slideIndex = [1, 1, 1, 1];
        this.slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"];
        this.showSlides(1, 0);
        this.showSlides(1, 1);
        this.showSlides(1, 2);
        this.showSlides(1, 3, true);
    }
    render() {
        return (react_1.default.createElement(exports.HomepageContext.Provider, { value: {
                changeSlide: this.plusSlides
            } },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(row_1.TwoColumnRow, { leftcolumn: firstRowLeftcolumn, rightcolumn: firstRowRightcolumn }),
                react_1.default.createElement(row_1.TwoColumnRow, { leftcolumn: secondRowLeftcolumn, rightcolumn: secondRowRightcolumn }),
                react_1.default.createElement(row_1.TwoColumnRow, { leftcolumn: thirdRowLeftcolumn, rightcolumn: thirdRowRightcolumn }),
                react_1.default.createElement(row_1.TwoColumnRow, { leftcolumn: fourthRowLeftcolumn, rightcolumn: fourthRowRightcolumn }))));
    }
}
exports.default = HomePageContent;
