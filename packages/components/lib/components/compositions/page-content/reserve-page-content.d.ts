import { Component } from "react";
interface ReservePageContentState {
    rooms: any;
    toDate: any;
    fromDate: any;
    numberOfGuest: any;
}
declare type ReservePageContentProps = {
    rooms?: any;
    itinerary?: any;
    reservationId?: any;
    amenities?: any;
    updateRooms?: any;
    updateAmenities?: any;
};
export declare class ReservePageContent extends Component<ReservePageContentProps, ReservePageContentState> {
    constructor(props: any);
    componentDidMount(): void;
    toogleRoom: (roomId: any) => any;
    toogleAmenity: (amenityName: any) => any;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof ReservePageContent, any>;
export default _default;
