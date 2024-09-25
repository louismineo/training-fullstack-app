
import { EmployeeCard } from "./employeeCard"
import { Employee } from "../store/employeesSlice"

import { useAppSelector } from '../store/hooks'


export const EmployeesGrid = () =>
{
    const isDesktop:boolean = useAppSelector((state)=>state.ui.isDesktop)

    const componentStyle = {
        display:"Grid" ,
        justifyContent: 'space-around',
        gridTemplateColumns: `repeat(${isDesktop ? 2 : 1}, 1fr)`,
        gridTemplateRows: `repeat(${isDesktop ? 5 : 10}, 1fr)`,
        gap: '10px'
    }

    

    const employeesArray:Employee[] = useAppSelector((state)=>state.employees.employees);

    const pageNumber = useAppSelector((state)=>state.ui.curentPageNumber);
    const cardsPerPage = useAppSelector((state)=>state.ui.maxRecords);



    // get subset of employees to display
    function getPaginatedData<T>(array: T[], page: number, pageSize: number = 10): T[] 
    {
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return array.slice(startIndex, endIndex);
    }


    const current10Employees = getPaginatedData(employeesArray, pageNumber, cardsPerPage);
    //console.log(current10Employees)

    




    return(
        <div style = {componentStyle}>
            {current10Employees.map((emp,index) =>
                {
                    return(
                        <EmployeeCard key = {index} emp={emp}/>
                    )
                })}
        </div>
    )
}