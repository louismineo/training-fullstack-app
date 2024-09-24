import { useEffect, useState } from "react"
import { EmployeeCard } from "./employeeCard"

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

    const componentStyle = {
        display:"Grid" ,
        justifyContent: 'space-around',
        gridTemplateColumns: `repeat(${isDesktop ? 2 : 1}, 1fr)`,
        gridTemplateRows: `repeat(${isDesktop ? 5 : 10}, 1fr)`,
        gap: '10px'
    }

    console.log(isDesktop)
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