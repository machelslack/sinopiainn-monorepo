export declare const ADD_ROOM = "ADD_ROOM";
export declare const TOGGLE_ROOMS = "TOGGLE_ROOMS";
export declare function addRoom(room: any): {
    type: string;
    room: any;
};
export declare const toogleItem: (item: any, type: string) => {
    type: string;
    item: any;
};
export declare const updateRooms: (payload: any, type: string) => {
    payload: any;
    type: string;
};
export declare const loadEnquiriesRequest: () => {
    type: string;
};
export declare const loadEnquirieSuccess: (posts: any) => {
    type: string;
    payload: any;
};
export declare const loadEnquirieFailure: (error: any) => {
    type: string;
    payload: any;
    error: boolean;
};
