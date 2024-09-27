
type HeaderProps = 
{
    headerText : string;
    buttonText : string;
    buttonCallback : ()=> void
}


export const Header = ({headerText, buttonText, buttonCallback} :HeaderProps ) =>
{
    return(
    <header style={{"display": "flex" , justifyContent:'space-between',"backgroundColor": "#365271", color:"white", alignItems:'center'}}>
        <h1 style={{marginLeft:'20px'}}>{headerText}</h1>
        <div>
            <button style={{color : "white", backgroundColor : "green", marginRight:'20px' }} onClick={buttonCallback}>{buttonText}</button>
        </div>
    </header>
    )
}