/*
 * action types
 */

export const ADD_ROOM = 'ADD_ROOM'
export const TOGGLE_ROOMS = 'TOGGLE_ROOMS'

/*
 * action creators
 */

export function addRoom(room:any) {
  return { type: ADD_ROOM, room }
}


export const toogleItem = (item:any,type:string) => ({
  type: type,
  item
})


export const updateRooms= (payload:any,type:string) => (
  {
    payload,
    type
  }
)
