import { createAction } from "@reduxjs/toolkit";

// con Redux toolkit posso scrivere così l'azione, le prime due accettano il parametro number:
export const increment = createAction<number>('counter/increment')
export const decrement = createAction<number>('counter/decrement')
export const reset = createAction('counter/reset')


// vecchio modo per scrivere le azioni
// export function incrementOLD(value: number) {
//     return {
//         type: 'increment', payload: value
//     }
// }