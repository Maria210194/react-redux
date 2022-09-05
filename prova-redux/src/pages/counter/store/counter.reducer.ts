import { decrement, increment, reset } from "./counter.actions";
import {createReducer} from '@reduxjs/toolkit';


export const counterReducer = createReducer(0, builder => 
    builder
        .addCase(increment, (state, action)=> state + action.payload)
        .addCase(decrement, (state, action)=> state - action.payload)
        .addCase(reset, ()=> 0)
    )


    
// modalità nuova, ma non la più efficace
// import { decrement, increment, reset } from "./counter.actions";
// import {createReducer, PayloadAction} from '@reduxjs/toolkit';

// export const counterReducer = createReducer(0, {
//     [increment.type]: (state: number, action: PayloadAction<number>) => state + action.payload,
//     [decrement.type]: (state: number, action: PayloadAction<number>) => state - action.payload,
//     [reset.type]:() => 0,
// })


// vecchia modalità per il reducer
// export function counterReducer(state = 0, action:any){
//     console.log(state, action)
//     switch (action.type){
//         case increment.type:
//             return state + action.payload;
//         case decrement.type:
//             return state - action.payload;
//         case reset.type:
//             return 0;
//     }
//     return state;
// }