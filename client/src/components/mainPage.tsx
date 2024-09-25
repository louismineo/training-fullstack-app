import { Header } from './header'
import { EmployeesGrid } from './employeesGrid'
import { Footer } from './footer'


import { useEffect } from "react"
import { useAppDispatch } from '../store/hooks'
import { readEmployeeData } from '../store/employeeActions'

export const MainPage = () =>
{

     // get the dispatch
     const dispatch = useAppDispatch();
     useEffect(()=>
     {
         console.log('Dispatching action ... readEmployeeData');
         dispatch(readEmployeeData())
     },[dispatch])



    return(
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
            <Header/>
            <EmployeesGrid/>
            <Footer/>
        </div>
    )
}