import { Header } from './header'
import { EmployeesGrid } from './employeesGrid'
import { Footer } from './footer'


import { uiActions } from '../store/uiSlice'
import { useEffect } from "react"
import { useAppDispatch } from '../store/hooks'
import { readEmployeeData } from '../store/employeeActions'
import { useNavigate } from 'react-router-dom';


export const MainPage = () =>
{

    const navigate = useNavigate();

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

    const GoToAdd = () =>{
        navigate(`/addEdit`,{});
    }


    return(
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
            <Header headerText='Employees' buttonText='Add Employees' buttonCallback={GoToAdd}/>
            <EmployeesGrid/>
            <Footer/>
        </div>
    )
}