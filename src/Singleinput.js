import Recat, { useState } from "react";
function Singleinput() {
    const [inputData, setInputData] = useState();
    const [dataBase, setDataBase] = useState([]);
    const [isvalid, setIsvalid] = useState(false);

    const handelInput = () => {
        let id = ("_xz01" + inputData.slice(0, 3) + inputData.length)
        let storeData = [...dataBase]
        let getValues = { Id: id, Text: inputData };
        storeData.push(getValues)
        setDataBase(storeData)
        setInputData("")
    }
    const handelEdit = (Id) => {
        let copydataBase=[...dataBase]
        dataBase.forEach((items)=>{if(Id===items.id){
        setDataBase(copydataBase,items.Text=inputData)
        }})
        console.log(dataBase)
    }
    const handelDelete = (Id) => {
        let afterdelete = dataBase.filter((items, i) => (items.Id !== Id));
        setDataBase(afterdelete);
    };
    return (
        <>
            <input type="text" placeholder="Enter text here" value={inputData} onChange={(e) => setInputData(e.target.value)} />
            <button onClick={() => { isvalid ? handelEdit() : handelInput();setIsvalid(false);setInputData("")}}>+</button>
            <br />
            <br />
            {
                dataBase.map((items, index) => {
                    return (<div style={{ backgroundColor: "lightgray", width: "200px", boxShadow: "2px 2px 4px 2px ", padding: "2px", margin: "8px" }}>
                        <h5 style={{ color: "royalblue" }}>Text Box {index}</h5>
                        <p>id:{items.Id}</p>
                        <p>{items.Text}</p>
                        <button onClick={() => { handelDelete(items.Id); setInputData("") }}>delete</button>
                        <button onClick={() => { handelEdit(items.Id); setIsvalid(true); setInputData(items.Text); }}>edit</button>
                    </div>);
                })
            }
        </>
    )
}
export default Singleinput;