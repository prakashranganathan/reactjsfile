import React,{useState} from "react";
function ButtonType(){
const[texting,setTexting]=useState()
const[show,setShow]=useState(true)
 const [count,setCount]=useState(false)
 const [click,setClick]=useState("clickMe")
 let as
    const Entertext=()=>{
      setShow(false)
    as= show? handleChanges():handleOutput()  
   }
  
   const handleOutput=()=>{
    setShow(true)
    setCount(true)
    setClick(texting)

   }
   const handleChanges=()=>{
      setTexting("")
      setCount(false)
   }
  return(
   <>
   <div className="textfields">
    { show? "":<input type="text" value={texting} onChange={(e)=>setTexting(e.target.value)}/>}
  
    <button typeof="button"  onClick={()=>{Entertext()}} >{count?texting:click}
        <br/></button>
    
    </div>
   </>
   );
}
export default ButtonType;