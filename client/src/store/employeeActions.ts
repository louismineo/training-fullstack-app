import { employeesActions } from "./employeesSlice";
import axios from "axios";

export const createEmployeeData = () =>
{
    alert('unimplemented');
}

export const readEmployeeData = () =>
{
    return async (dispatch:any) =>
    {
        const fetchAllEmployeesFromDB = async() =>
        {
            const response = await axios.get('http://localhost:1337/employee')

            if(response.status !== 200)
                throw Error(response.data);

            //converting to json might take a while if too large
            return response.data;   
        }

        try
        {
            const employeeData = await fetchAllEmployeesFromDB();
            dispatch(employeesActions.refreshData(employeeData))
        }
        catch(e:any)
        {
            alert(e.message);
        }
    }
}

export const updateEmployeeData = () =>
{
    alert('unimplemented');
}

export const deleteEmployeeData = () =>
{
    alert('unimplemented');
}