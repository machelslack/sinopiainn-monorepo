import React, { Component } from 'react';
export interface ReservePageContextInterface {
}
export declare const ReservepageContext: React.Context<ReservePageContextInterface>;
export declare class ReservePageContent extends Component<{}> {
    constructor(props: any);
    addItem: () => void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof ReservePageContent, any>;
export default _default;
