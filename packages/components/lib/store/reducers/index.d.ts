export declare const reducers: Readonly<{
    hotel: (state?: {
        _id: {
            $oid: string;
        };
        businessname: string;
        businessaddress: string;
        businessphone: string;
        businesswebsite: string;
        businessemail: string;
        businessdescription: string;
        country: string;
        coordinates: {
            Latitude: string;
            Longitude: string;
        };
        nameofevent: string;
        timeofevent: string;
        dateofevent: string;
        activity: {
            typeofbusiness: string;
            typeofservice: string;
        }[];
        typeofactivity: never[];
        contactname: string;
        location: string;
        logourl: string;
        showcaseurl: never[];
        comments: never[];
        averagerating: string;
        avergaeprice: string;
        date: string;
        enabled: string;
    }, { payload, type }?: any) => {
        _id: {
            $oid: string;
        };
        businessname: string;
        businessaddress: string;
        businessphone: string;
        businesswebsite: string;
        businessemail: string;
        businessdescription: string;
        country: string;
        coordinates: {
            Latitude: string;
            Longitude: string;
        };
        nameofevent: string;
        timeofevent: string;
        dateofevent: string;
        activity: {
            typeofbusiness: string;
            typeofservice: string;
        }[];
        typeofactivity: never[];
        contactname: string;
        location: string;
        logourl: string;
        showcaseurl: never[];
        comments: never[];
        averagerating: string;
        avergaeprice: string;
        date: string;
        enabled: string;
    };
    rooms: (state?: {
        _id: string;
        name: string;
        description: string;
        occupancy: string;
        icon: string;
        price: string;
        bookings: never[];
        adults: string;
        children: string;
        infants: string;
        photos: string[];
    }[], { payload, type }?: any) => any;
    amenities: (state?: {
        name: string;
        description: string;
        price: string;
        frequency: string;
        materialDesign: string;
    }[], { payload, type }?: any) => {
        name: string;
        description: string;
        price: string;
        frequency: string;
        materialDesign: string;
    }[];
    offers: (state?: ({
        _id: string;
        name: string;
        description: string;
        amount: string;
        validdate: string;
        exdate: string;
        token: string;
        nights: string;
        photos: string[];
    } | {
        _id: string;
        name: string;
        description: string;
        amount: string;
        validdate: string;
        exdate: string;
        token: string;
        nights: number;
        photos: string[];
    })[], { payload, type }?: any) => ({
        _id: string;
        name: string;
        description: string;
        amount: string;
        validdate: string;
        exdate: string;
        token: string;
        nights: string;
        photos: string[];
    } | {
        _id: string;
        name: string;
        description: string;
        amount: string;
        validdate: string;
        exdate: string;
        token: string;
        nights: number;
        photos: string[];
    })[];
    itinerary: (state?: {}, { payload, type }?: any) => any;
    reservationId: (state?: number, { payload, type }?: any) => number;
}>;
export declare const rootReducer: import("redux").Reducer<{
    readonly hotel: {
        _id: {
            $oid: string;
        };
        businessname: string;
        businessaddress: string;
        businessphone: string;
        businesswebsite: string;
        businessemail: string;
        businessdescription: string;
        country: string;
        coordinates: {
            Latitude: string;
            Longitude: string;
        };
        nameofevent: string;
        timeofevent: string;
        dateofevent: string;
        activity: {
            typeofbusiness: string;
            typeofservice: string;
        }[];
        typeofactivity: never[];
        contactname: string;
        location: string;
        logourl: string;
        showcaseurl: never[];
        comments: never[];
        averagerating: string;
        avergaeprice: string;
        date: string;
        enabled: string;
    };
    readonly rooms: any;
    readonly amenities: {
        name: string;
        description: string;
        price: string;
        frequency: string;
        materialDesign: string;
    }[];
    readonly offers: ({
        _id: string;
        name: string;
        description: string;
        amount: string;
        validdate: string;
        exdate: string;
        token: string;
        nights: string;
        photos: string[];
    } | {
        _id: string;
        name: string;
        description: string;
        amount: string;
        validdate: string;
        exdate: string;
        token: string;
        nights: number;
        photos: string[];
    })[];
    readonly itinerary: any;
    readonly reservationId: number;
}, import("redux").AnyAction>;
