import { ADDMYQOUTE } from './actionType'


export function addMyQoute(payload){
    // console.log(payload, 'payload');
    return { type: 'addMyQoute', payload }
} 

export function addFavorites(payload){
    return { type: 'addFavorites', payload}
}