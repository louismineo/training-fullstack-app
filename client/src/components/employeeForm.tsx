import { TextField, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';

import { createEmployeeData, updateEmployeeData } from '../store/employeeActions';

export type employee = 
{
    uuid:string;
    name:string;
    salary:number;
    department:string;
}

type EmployeeFormProp = 
{
    isAdd:boolean;
    employee: employee;
}

export const EmployeeForm = ({isAdd, employee}:EmployeeFormProp) =>
{
    console.log("isAdd -- " + isAdd);
    return(
        <form>
            {/*name */}
            <TextField
                    label="Name"
                    name="name"
                    value={employee.name}
                    /*onChange={{}}*/
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />

            {/*salary*/}
            <TextField
                    label="Salary"
                    name="salary"
                    type="number"
                    value={employee.salary}
                    /*onChange={}*/
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />

            {/* Department Select */}
            <FormControl fullWidth margin="normal">
                <InputLabel id="department-label">Department</InputLabel>
                <Select
                    labelId="department-label"
                    name="department"
                    value={employee.department}
                    /*onChange={}*/
                    label="Department"
                    variant="outlined"
                >
                    <MenuItem value="PS">PS</MenuItem>
                    <MenuItem value="HR">HR</MenuItem>
                </Select>
            </FormControl>

            {/* Submit Button */}
            <Button type="submit" variant="contained" color="primary" >
                    {isAdd?'Create':'Save'}
            </Button>

        </form>
    )
}

