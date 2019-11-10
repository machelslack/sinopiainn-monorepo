export declare const reducers: Readonly<{
    roomsReducer: (state?: {
        rooms: never[];
        amenities: never[];
        initinary: {};
    }, { payload, type }?: any) => {
        rooms: never[];
        amenities: never[];
        initinary: {};
    };
}>;
export declare const rootReducer: import("redux").Reducer<{
    readonly roomsReducer: {
        rooms: never[];
        amenities: never[];
        initinary: {};
    };
}, import("redux").AnyAction>;
