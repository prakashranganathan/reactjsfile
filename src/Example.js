import React, { useEffect, useState } from "react";

function Example() {
    const [number, setName] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        let showError = (number.length > 8) ? "input not valid" : "";
        setError(showError)
        console.log("show", error)
    }, [number]);
    console.log("---->", error)
    return (
        <>
        <div style={{backgroundColor:"lightblue",padding:"5px",}}>
            <input
                type="number"
                value={number}
                number="number"
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <p>{error?" ":<button>submit</button>}</p>
            <p style={{color:"red"}}>{error}</p>
            </div>
        </>
    );
}

export default Example;
