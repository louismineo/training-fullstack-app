import { createSlice} from "@reduxjs/toolkit";


interface EmployeesState
{
    employees:[],
    employeesCount:number 
}

const employeesSlice = createSlice(
    {
        name:'employees',
        initialState:
        {
            employees:[],
            employeesCount:0
        },
        reducers:
        {
            refreshData(state,action)
            {
                state.employees = action.payload;
                state.employeesCount = state.employees.length;
            },
            addEmployee(state,action)
            {

            },
            removeEmployee(state,action)
            {

            }
        }
    }
)

export default employeesSlice;
export const employeesActions = employeesSlice.actions;