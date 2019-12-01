declare const _default: () => {
    hotel: {
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
    rooms: {
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
    }[];
    amenities: {
        name: string;
        description: string;
        price: string;
        frequency: string;
        materialDesign: string;
    }[];
    offers: ({
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
    itinerary: {};
    reservationId: number;
};
export default _default;
