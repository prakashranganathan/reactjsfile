import React, { useState } from "react";
function Printsheets(){
    const[width,setWidth]=useState('')
    const[height,setHeight]=useState('')
    const[noofcard,setNoofcard]=useState('')
   const[a1,a2,a3,a4]=useState({one:{id:"0", width: '594',height: '881'},two:{id:"1",width: '420',height: '594'},three:{id:"2", width: '297',height: '420'},four:{id:"3",width: '210',height: '297'}})
    // const[a4]=useState([{width: '210',height: '297'}])
    const[oneSheet,setOnesheet]=useState('')
    const[totalPages,setTotalPages]=useState('')
    const[rupee,setRupee]=useState('')
    const NumberofCardonSheets=(e)=>{
     const as=(e.target.value).map(items=>{return (Math.floor(items.width/width) * Math.floor(items.height/height))});
     setOnesheet(as)
    }
    const TotalA4Sheets=()=>{
        setTotalPages(noofcard/oneSheet)
    }
    console.log("==========>",noofcard)
    return(
        <>
        <div>
         <input  type="checkbox" value={a1}/>
        <label>A1</label>
        <input type="checkbox"value={a2}/>
        <label>A2</label>
        <input  type="checkbox" value={a3}/>
        <label>A3</label>
        <input  type="checkbox" value={a4}/>
        <label>A4</label> 
         
        <lable for="width"><b>width:</b></lable>
        <input type="number" id="witdh" value={width} onChange={(e)=>setWidth(e.target.value)}/>mm <></>
        <lable for="height"><b>height:</b></lable>
        <input type="number" id="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>mm <></>
        <lable for="card"><b>No.of cards:</b></lable>
        <input type="number" id="card" value={noofcard} onChange={(e)=>setNoofcard(e.target.value)}/> <></>
        <button type="submits" onClick={()=>{
            NumberofCardonSheets();
            TotalA4Sheets();
            setHeight('');
            setWidth('');
            setNoofcard('')}}>submit</button>
        <li>Number of Card's on single A4 Sheets: {oneSheet}</li>
        <h6>Total number of A4 Sheets needed:{Math.ceil(totalPages)}</h6>
        <li>per one A4 Sheets:<b>Rs.<input type="number" value={rupee} onChange={(e)=>setRupee(e.target.value)}/></b></li>
        <li>total amount:{(totalPages)*{rupee}}</li> 
        </div>
        </>
    )
}
export default Printsheets;