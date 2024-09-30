import { useAppSelector, useAppDispatch } from "../store/hooks";
import { useEffect } from "react";
import { uiActions } from "../store/uiSlice";


const invisibleButtonStyle = 
{
    backgroundColor : 'none!important',
    border:'none',
    color: 'blue',
    textDecoration : 'underline',

    padding: '0!important',
    cursor : 'pointer',
    display: 'inline'
}


export const Footer = () =>
{
    //get the slice data
    
    const pageNumber:number = useAppSelector((state)=> state.ui.curentPageNumber);
    const totalRecordCount:number = useAppSelector((state)=> state.employees.employeesCount);;
    const startRecordNumber:number = totalRecordCount===0?0:(((pageNumber-1)*10)+1) ;
    const endRecordNumber:number = ((startRecordNumber + 9)> totalRecordCount )? totalRecordCount : startRecordNumber + 9;

    const isDesktop:boolean = useAppSelector((state)=> state.ui.isDesktop)
    //dispatch action
    const dispatch = useAppDispatch();
    function goPreviousPage()
    {
        //console.log("BACK")
        dispatch(uiActions.previousPage())
        //console.log(pageNumber);
    }

    function goNextPage()
    {
       //console.log("NEXT")
        dispatch(uiActions.nextPage())
        //console.log(pageNumber);
    }



    return (
        <div style={{height:'5%', display: 'flex',flexDirection:'row',color: 'black',justifyContent : isDesktop? 'space-between' : 'center', marginLeft : isDesktop? '5%' : '0%', marginRight : isDesktop?'5%':'0%'}}>
            {isDesktop? <div style={{width:'20%'}} >Showing <strong>{startRecordNumber} - {endRecordNumber}</strong> out of <strong>{totalRecordCount}</strong> entries</div>: <></>}
            <div style={{display:'flex', justifyContent:'space-between', width:'10%'}}>
                <button style = {invisibleButtonStyle} onClick={goPreviousPage}><strong>Previous</strong></button>
                <button style = {invisibleButtonStyle} ><strong>{pageNumber}</strong></button>
                <button style = {invisibleButtonStyle} onClick={goNextPage}><strong>Next</strong></button>
            </div>
        </div>
    )
}