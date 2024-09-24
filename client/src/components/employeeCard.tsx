import {IconButton} from 'rsuite';
import "rsuite/dist/rsuite.min.css";
import { Edit,Trash } from '@rsuite/icons'

export const EmployeeCard = ()=>
{
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
                <h2>Name</h2>
                <h3>Dept</h3>
                <h3>Salary</h3>
            </div>
            <div style={{"width":"20%",display:"flex",verticalAlign:"center",justifyContent:'right'}}>
                <IconButton circle icon={<Edit/>} appearance="link" />
                <IconButton circle icon={<Trash/>} appearance="link" />
            </div>
        </div>
    )
}