
import { employeesActions } from "./employeesSlice";
import { uiActions } from "./uiSlice";
import axios from "axios";

export const createEmployeeData = () =>
{
    alert('unimplemented');
}


export const readEmployeeData = () => // returns array, not object
{
    return async (dispatch:any) =>
    {
        const fetchAllEmployeesFromDB = async() =>
        {
            const response = await axios.get('http://localhost:1337/employee')

            if(response.status !== 200)
                throw Error(response.data);

            //converting to json might take a while if too large
            return response.data['employees'];   
        }

        try
        {
            const employeeData = await fetchAllEmployeesFromDB();
            dispatch(employeesActions.refreshData(employeeData));
            dispatch(uiActions.update(employeeData.length));

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

export const deleteEmployeeData = (empUUID:string) =>
{
    return async (dispatch:any) =>
        {
            const deleteEmployeeFromDB = async(empUUID:string) =>
            {
                const response = await axios.delete('http://localhost:1337/employee/'+empUUID)
    
                if(response.status !== 204)
                    throw Error(response.data);  
            }
    
            try
            {
                await deleteEmployeeFromDB(empUUID);
                //refresh after deletion
                readEmployeeData();
    
            }
            catch(e:any)
            {
                alert(e.message);
            }
        }
}