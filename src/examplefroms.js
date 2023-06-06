import  { useState } from "react";
import HandleForms from "./HandleForms";
function PropsModel() {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [file, setFile] = useState([]);
    // const [errors, setErrors] = useState([]);
    // const [editTable, setEditTable] = useState("");
    const [edit, setEdit] = useState(false);
    // const error = {};
    const data = [...file];
    // input values are updating here with the onchange event  
    const handleInput = () => {
        let value = { Id: id, Name: name, Age: age, Gender: gender };
        let findId = data.map((element) => element.Id)
        let checkId = findId.some((element) => element === id) //here we gone a check wether the enter id are matching are not
        if (checkId === false) {
            data.push(value);
            setFile(data)
        }
        if (checkId === true || edit===true) {
            data.map((items, i) => {
                if (items.Id === id) {
                    console.log("iiiii", id);
                    console.log("items-id", items.Id, items.Name)
                    return (items.Id = id, items.Name = name, items.Age = age, items.Gender = gender);
                }
            })
        }
        //editing phase using array method
        // if (edit === true) {
        //     data.map((items, i) => {
        //         if (items.Id === id) {
        //             console.log("iiiii", id);
        //             setEdit(false);
        //             return (
        //                 items.Name = name, items.Age = age, items.Gender = gender
        //             );
        //         }
        //     });
        //     console.log("editdata", data);

        // }
    };
    // deleting phase on the onclick event handlemethod
    const handleDelete = (index) => {
        let newdata = file.filter((items, i) => {
            console.log("index", index);
            if (i !== index) {
                return items;
            }
        });
        setFile(newdata);
    };
    return (
        <>
            <div style={{ backgroundColor: "navajowhite", textAlign: "center" }}>
                <lable htmlfor="name">Id:</lable>
                <br />
                <input
                    type="number"
                    id="id"
                    value={id}
                    name="id"
                    onChange={(e) => setId(e.target.value)}
                />
                <br />
                {/* <p style={{ color: "red" }}>{<span>{errors.Id}</span>}</p> */}
                <lable htmlfor="name">UserName:</lable>
                <br />
                <input
                    type="text"
                    id="name"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <lable htmlfor="age">Age:</lable>
                <br />
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <br />
                <lable htmlfor="gender">Gender:</lable>
                <br />
                <input
                    type="text"
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
                <br />
                <br />
                <HandleForms name={name} age={age} gender={gender}></HandleForms>
                <button onClick={() => {
                    handleInput();
                    setId("");
                    setName("");
                    setAge("");
                    setGender("");

                }}>{edit ? "submit" : "submit"}</button>
                {console.log(file, "llllllllll")}
                <div>
                    {file.map((items, index) => {
                        return (
                            <>
                                <div
                                    style={{
                                        display: "block",
                                        float: "left",
                                        border: "2px solid black",
                                        width: "200px",
                                        margin: "4px",
                                        textAlign: "center",
                                        backgroundColor: "silver",
                                        boxShadow: "2px 2px 2px",
                                    }}
                                >
                                    <button
                                        onClick={() => {
                                            handleDelete(index);
                                        }}
                                    >
                                        delete
                                    </button>
                                    <button
                                        onClick={() => {
                                            setEdit(true);
                                            setId(items.Id)
                                            setName(items.Name);
                                            setAge(items.Age);
                                            setGender(items.Gender);
                                        }}
                                    >
                                        edit
                                    </button>
                                    <h3>Welcome to Leora</h3>
                                    <p>
                                        <b>ID-card-no:</b>
                                        {items.Id}
                                    </p>
                                    <p>
                                        <b>Name:</b>
                                        {items.Name}
                                    </p>
                                    <p>
                                        <b>Age:</b>
                                        {items.Age}
                                    </p>
                                    <p>
                                        <b>Gender:</b>
                                        {items.Gender}
                                    </p>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
export default PropsModel;
