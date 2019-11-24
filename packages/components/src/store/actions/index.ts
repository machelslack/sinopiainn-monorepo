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


export const toogleItem = (item:any,type:string) => ({
  type: type,
  item
})
