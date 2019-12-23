import { Component } from "react";
import PropTypes from "prop-types";
import { ReservePageContentProps, ReservePageContentState } from "../compositions/page-content/reserve-page-content";
export declare class Datepicker extends Component<ReservePageContentProps, ReservePageContentState> {
    static defaultProps: {
        rooms: never[];
        offers: never[];
        amenities: never[];
        itinerary: {};
        reservationId: number;
        numOfNights: number;
    };
    static propTypes: {
        rooms: PropTypes.Requireable<any[]>;
        offers: PropTypes.Requireable<any[]>;
        amenities: PropTypes.Requireable<any[]>;
        itinerary: PropTypes.Requireable<object>;
        reservationId: PropTypes.Requireable<number>;
    };
    datePicker: any;
    stickPosition: any;
    constructor(props: any);
    componentDidMount(): void;
    toogleRoom: (roomId: any) => any;
    toogleAmenity: (amenityName: any) => any;
    setSticky: () => void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof Datepicker, any>;
export default _default;
