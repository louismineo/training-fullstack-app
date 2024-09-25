import { Header } from './header'
import { EmployeesGrid } from './employeesGrid'
import { Footer } from './footer'

export const MainPage = () =>
{

    return(
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
            <Header/>
            <EmployeesGrid/>
            <Footer/>
        </div>
    )
}