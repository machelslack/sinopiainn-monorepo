
const defaultHotelAvailability = {
    rooms: [

    ],
    amenities: [

    ],
    initinary: {

    }
}



export default (state = defaultHotelAvailability, { payload, type } = {} as any) => {
    switch (type) {
        case 'ADD_ROOMS':
            return Object.assign({}, state, {
                visibilityFilter: payload
            })
        default:
            return state
    }
}