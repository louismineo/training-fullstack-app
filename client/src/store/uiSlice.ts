import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//defining a type for the slice state
interface UiState
{
    isDesktop:          boolean,
    maxRecords:         number,
    curentPageNumber:   number,
    minPageNumber:      number, // affected by employee count
    maxPageNumber:      number  // affected by employee count and self's maxRecords
}


//init the state using that type
const initialState : UiState =
{
    isDesktop: true,
    maxRecords:10,
    curentPageNumber: 1,
    minPageNumber:1,
    maxPageNumber: 1
}


const uiSlice = createSlice(
    {
        name:'ui',
        initialState,  // `createSlice` will infer the state type from the `initialState` argument
        reducers:
        {
            updateIsDesktop(state,action : PayloadAction<boolean>)
            {
                state.isDesktop = action.payload
            },
            update(state,action : PayloadAction<number>) // Use the PayloadAction type to declare the contents of `action.payload`
            {
                //change max page number here
                state.maxPageNumber = Math.floor(action.payload / state.maxRecords) + 1;
            },
            nextPage(state)
            {
                if((state.curentPageNumber+1) <= state.maxPageNumber)
                    state.curentPageNumber++;
            },
            previousPage(state)
            {
                if((state.curentPageNumber-1) >= state.minPageNumber)
                    state.curentPageNumber--;
            }
        }
    }
)

export default uiSlice;

export const uiActions = uiSlice.actions;