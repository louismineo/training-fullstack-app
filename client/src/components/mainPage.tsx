import { Header } from './header'
import { EmployeesGrid } from './employeesGrid'
import { Footer } from './footer'
import Modal from './Modal'

import { uiActions } from '../store/uiSlice'
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


    //effect to handle screen resize
    useEffect(()=>
    {
        const handleResize = () =>
        {
            dispatch(uiActions.updateIsDesktop((window.innerWidth >= 768)));
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
    },[dispatch])

    return(
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
            <Header/>
            <EmployeesGrid/>
            <Footer/>
        </div>
    )
}