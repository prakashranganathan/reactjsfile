import React, { useState } from "react";
import Propforms from "./Propforms";
function Propinputs() {
   return (
      <>
         < Propforms inputsTypes={"text"} heading={"Name"} text={"text"} />
         < Propforms inputsTypes={"number"} heading={"Phone"} text={"number"} />
         < Propforms inputsTypes={"email"} heading={"Email"} text={"email"} />
      </>

   )
}
export default Propinputs;