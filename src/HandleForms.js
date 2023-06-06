import React, { useState } from "react";
function handleForms(props) {
    return (
        <>
            <h1>Id:{props.id}</h1>
            <h1>Name:{props.name}</h1>
            <h1>Age:{props.age}</h1>
            <h1>Gender:{props.gender}</h1>
        </>
    )
}
export default handleForms;