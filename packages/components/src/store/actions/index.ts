/*
 * action types
 */

export const ADD_ROOM = 'ADD_ROOM'

/*
 * action creators
 */

export function addRoom(room:any) {
  return { type: ADD_ROOM, room }
}


export const addItem = (item:any,type:string) => ({
  type: type,
  item
})