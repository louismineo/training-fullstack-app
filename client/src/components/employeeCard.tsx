import {IconButton} from 'rsuite';
import "rsuite/dist/rsuite.min.css";
import { Edit,Trash } from '@rsuite/icons'
import { Employee } from '../store/employeesSlice';
import Modal from './Modal';
import { useState } from 'react';
import { deleteEmployeeData } from '../store/employeeActions';
import { useAppDispatch } from '../store/hooks';
import { useNavigate } from 'react-router-dom';


type EmployeeCardProps = 
{
    emp: Employee
}



export const EmployeeCard = ({emp}: EmployeeCardProps)=>
{
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);

    const editEmployeeHandler = (emp:Employee) =>
    {
        console.log("EDITTING "+emp.name)
        navigate(`/addEdit/${emp.uuid}`, {state:emp})
    }

    const deleteEmployeeHandler = () =>
    {
        console.log(emp.name)
        setOpenModal(true)
    }

    const cancelDelete = () =>
    {
        setOpenModal(false);
    }

    const confirmDelete = (empUUID:string) =>
    {
        dispatch(deleteEmployeeData(empUUID))
        alert(empUUID+"DELETED");
        setOpenModal(false);
        window.location.reload();
    }

    return (
        <div style={
            {
                "width":"100%",
                "height":"150px",
                backgroundColor : '#EAEAEA',
                display: "flex",
                flexDirection: "row",
                alignItems:"center",
                justifyContent:'space-between'
            }}>
            <div style = {{"width":"80%", padding: 10}}>
                <h2>{emp.name}</h2>
                <h3>{emp.department}</h3>
                <h3>${emp.salary}</h3>
            </div>
            <div style={{"width":"20%",display:"flex",verticalAlign:"center",justifyContent:'right'}}>
                <IconButton circle icon={<Edit/>} appearance="link" onClick = {()=>editEmployeeHandler(emp)}/>
                <IconButton circle icon={<Trash/>} appearance="link" onClick={deleteEmployeeHandler} />
                <Modal isOpen = {openModal} emp={emp} cancelModalCallback={cancelDelete} confirmModalCallback={confirmDelete}/>
            </div>
        </div>
    )
}