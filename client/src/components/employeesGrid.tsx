import { useEffect, useState } from "react"
import { EmployeeCard } from "./employeeCard"

import { useAppSelector,useAppDispatch } from '../store/hooks'

import { readEmployeeData } from '../store/employeeActions'
import { employeesActions } from '../store/employeesSlice'


export const EmployeesGrid = () =>
{
    //store screen state
    const [isDesktop , setIsDesktop] = useState<boolean>(window.innerWidth >= 768)

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





    // get the dispatch
    const dispatch = useAppDispatch();
    useEffect(()=>
    {
        console.log('Dispatching action ... readEmployeeData');
        dispatch(readEmployeeData())
    },[dispatch])


    const employees = useAppSelector((state)=>state.employees.employees);
    console.log(employees)






    const componentStyle = {
        display:"Grid" ,
        justifyContent: 'space-around',
        gridTemplateColumns: `repeat(${isDesktop ? 2 : 1}, 1fr)`,
        gridTemplateRows: `repeat(${isDesktop ? 5 : 10}, 1fr)`,
        gap: '10px'
    }




    return(
        <div style = {componentStyle}>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
        </div>
    )
}