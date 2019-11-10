import React, { Component } from 'react';
export interface ReservePageContextInterface {
}
export declare const ReservepageContext: React.Context<ReservePageContextInterface>;
declare class ReservePageContent extends Component<{
    rooms: any;
    amenities: any;
}> {
    constructor(props: any);
    render(): JSX.Element;
}
export default ReservePageContent;
