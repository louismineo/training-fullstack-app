export const Footer = () =>
{
    const pageNumbern:number = 1;
    const startRecordNumber:number = 1;
    const endRecordNumber:number = 10;
    const totalRecordCount:number = 24;

    return (
        <div style={{display: 'flex',flexDirection:'row',color: 'black',justifyContent : 'space-around'}}>
            <div style={{width:'20%'}} >Showing {startRecordNumber} - {endRecordNumber} out of {totalRecordCount} entries</div>
            <div style={{display:'flex', justifyContent:'space-evenly', width:'10%'}}>
                <a>Previous</a>
                <a>{pageNumbern}</a>
                <a>Next</a>
            </div>
        </div>
    )
}