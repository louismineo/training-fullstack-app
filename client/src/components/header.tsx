export const Header = () =>
{
    return(
    <header style={{"display": "flex" , justifyContent:'space-between',"backgroundColor": "#365271", color:"white", alignItems:'center'}}>
        <h1 style={{marginLeft:'20px'}}>Employees</h1>
        <div>
            <button style={{color : "white", backgroundColor : "green", marginRight:'20px' }}> WIP Add Employee Placeholder</button>
        </div>
    </header>
    )
}