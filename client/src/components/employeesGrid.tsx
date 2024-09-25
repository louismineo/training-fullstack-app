import { useEffect, useState } from "react"
import { EmployeeCard } from "./employeeCard"
import { Employee } from "../store/employeesSlice"

import { useAppSelector } from '../store/hooks'


export const EmployeesGrid = () =>
{

    //store screen state
    const [isDesktop , setIsDesktop] = useState<boolean>(window.innerWidth >= 768)

    const componentStyle = {
        display:"Grid" ,
        justifyContent: 'space-around',
        gridTemplateColumns: `repeat(${isDesktop ? 2 : 1}, 1fr)`,
        gridTemplateRows: `repeat(${isDesktop ? 5 : 10}, 1fr)`,
        gap: '10px'
    }

    //effect to handle screen resize
    useEffect(()=>
    {
        const handleResize = () =>
        {
            setIsDesktop(window.innerWidth >= 768);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
    },[])

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
    console.log(current10Employees)

    




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