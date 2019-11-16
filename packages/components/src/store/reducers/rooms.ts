
const defaultHotelAvailability = {
    rooms: [

    ],
    amenities: [

    ],
    initinary: {

    }
}



export default (state = {}, { payload, type } = {} as any) => {
    switch (type) {
        case 'ADD_ROOMS':
            return {
                ...state,
                // initinary:{
                //     ...state.initinary,
                //     rooms:{
                //         ...state.rooms,
                //     }
                // }
            }
        default:
            return state
    }
}
