import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//defining a type for the slice state
interface UiState
{
    maxRecords:         number,
    curentPageNumber:   number,
    minPageNumber:      number,
    maxPageNumber:      number
}


//init the state using that type
const initialState : UiState =
{
    maxRecords:10,
    curentPageNumber: 1,
    minPageNumber:1,
    maxPageNumber: 99
}


const uiSlice = createSlice(
    {
        name:'ui',
        initialState,  // `createSlice` will infer the state type from the `initialState` argument
        reducers:
        {
            initialise(state,action : PayloadAction<number>) // Use the PayloadAction type to declare the contents of `action.payload`
            {
                //change max page number here
                state.maxPageNumber = (action.payload / state.maxRecords) + 1;

            },
            nextPage(state)
            {
                if((state.curentPageNumber+1) <= state.maxPageNumber)
                    state.curentPageNumber++;
            },
            previousPage(state)
            {
                if((state.curentPageNumber-1) >= state.maxPageNumber)
                    state.curentPageNumber--;
            }
        }
    }
)

export default uiSlice;
