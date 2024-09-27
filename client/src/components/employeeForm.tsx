import { TextField, MenuItem, Select, FormControl, InputLabel, Button, SelectChangeEvent } from '@mui/material';
import { createEmployeeData, updateEmployeeData } from '../store/employeeActions';
import { useAppDispatch } from '../store/hooks';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: employee.name,
        salary: employee.salary,
        department: employee.department
    });

    const submitHandler = (e : FormEvent) =>
    {
        e.preventDefault();

        try 
        {
            if(isAdd)
            {
                dispatch(createEmployeeData(formData.name,formData.salary,formData.department))
                console.log(formData)
            }
            else
            {
                dispatch(updateEmployeeData(employee.uuid,formData.name,formData.salary,formData.department))
                console.log(formData)
            }

            //upon success, no erorrs thrown, go back to main page
            navigate('/',{});
        }
        catch(e:any)
        {
            alert(e.message)
        }
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
        const { name, value } = e.target;

        // if the name of the form input element is "salary", convert the value to a number
        const newValue = name === 'salary' ? Number(value):value;       
        
        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    return(
        <form>
            {/*name */}
            <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"

                required
                />

            {/*salary*/}
            <TextField
                    label="Salary"
                    name="salary"
                    type="number"
                    value={formData.salary}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                required
                />

            {/* Department Select */}
            <FormControl fullWidth margin="normal">
                <InputLabel id="department-label">Department</InputLabel>
                <Select
                    labelId="department-label"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    label="Department"
                    variant="outlined"
                required
                >
                    <MenuItem value="PS">PS</MenuItem>
                    <MenuItem value="HR">HR</MenuItem>
                </Select>
            </FormControl>

            {/* Submit Button */}
            <Button type="submit" variant="contained" color="primary" onClick={submitHandler}>
                    {isAdd?'Create':'Save'}
            </Button>

        </form>
    )
}

