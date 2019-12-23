import { Component } from "react";
import PropTypes from "prop-types";
export interface ReservePageContentState {
    rooms: any;
    toDate: any;
    fromDate: any;
    numberOfGuest: any;
    numOfNights: any;
    itinerary: any;
    checking: any;
}
export declare type ReservePageContentProps = {
    rooms: any;
    offers: any;
    amenities: any;
    itinerary: any;
    reservationId: any;
    updateRooms: any;
    updateAmenities: any;
};
export declare class ReservePageContent extends Component<ReservePageContentProps, ReservePageContentState> {
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
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any, snapshot: any): void;
    toogleRoom: (roomId: any) => any;
    toogleAmenity: (amenityName: any) => any;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof ReservePageContent, any>;
export default _default;
