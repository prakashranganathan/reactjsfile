import Recat, { useState } from "react";
function Propforms(props) {
        const [values, setValues] = useState("");
        const [validation, setValidation] = useState(false);
        const [data, setData] = useState([]);
        const [edit, setEdit] = useState(false);
        const [handleEdit, setHandleEdit] = useState();
        const handelPropforms = () => {
                if (props.heading === "Name") {
                        if (values.length > 4) {
                                const dataList = [...data];
                                let newdata = { [props.heading]: values };
                                let findName = dataList.map((items, i) => {
                                        return items[props.heading];
                                });
                                let checkName = findName.some((element) => {
                                        return element === values;
                                });
                                console.log("findname", checkName);
                                if (checkName === false && edit === false) {
                                        dataList.push(newdata);
                                        setData(dataList);
                                } else {
                                        editData();
                                }
                                setValidation(false);
                        } else {
                                setValidation(true);
                        }
                }
                if (props.heading === "Phone") {
                        if (values.length === 10) {
                                const dataList = [...data];
                                let newdata = { [props.heading]: values };
                                let findName = dataList.map((items, i) => {
                                        return items[props.heading];
                                });
                                let checkName = findName.some((element) => {
                                        return element === values;
                                });
                                console.log("findname", checkName);
                                if (checkName === false && edit === false) {
                                        dataList.push(newdata);
                                        setData(dataList);
                                        setValidation(false);
                                } else {
                                        editData();
                                }
                                console.log("validationphone", validation);
                        } else {
                                setValidation(true);
                        }
                }
                if (props.heading === "Email") {
                        if (values.indexOf("@") !== -1) {
                                const dataList = [...data];
                                let newdata = { [props.heading]: values };
                                let findName = dataList.map((items, i) => {
                                        return items[props.heading];
                                });
                                let checkName = findName.some((element) => {
                                        return element === values;
                                });
                                console.log("findname", checkName);
                                if (checkName === false && edit === false) {
                                        dataList.push(newdata);
                                        setData(dataList);
                                        setValidation(false);
                                } else {
                                        editData();
                                }
                                setValidation(false);
                                console.log("validationindex", validation);
                        } else {
                                setValidation(true);
                        }
                }
        };
        const handleDelete = (index) => {
                let newfile = data.filter((items, i) => {
                        if (i !== index) {
                                return items;
                        }
                });
                setData(newfile);
                console.log("delete", data);
        };
        const editData = () => {
                let data1 = [...data];
                if (edit === true) {
                        let edited = data.map((element, i) => {
                                if (i === handleEdit) {
                                        return (element[props.heading] = values);
                                }
                        });
                        setData(data1, edited);
                        setEdit(false);
                }
                console.log("edit", data);
        };
        return (
                <>
                        <div>
                                <label for={props.text}>{props.heading}:</label>
                                <input
                                        type={props.inputTypes}
                                        id={props.text}
                                        value={values}
                                        onChange={(e) => setValues(e.target.value)}
                                />
                                <p style={{ color: "red" }}>
                                        {validation ? "is not valid enter" : " "}{" "}
                                </p>
                        </div>
                        <br />
                        <button
                                onClick={() => {
                                        handelPropforms();
                                        setValues("");
                                }}
                        >
                                submit
                        </button>
                        <h5>
                                {props.heading}:{values}
                        </h5>
                        <div>
                                {data.map((items, index) => {
                                        return (
                                                <>
                                                        <h3>{items[props.heading]}</h3>
                                                        <button type="submit" onClick={() =>{ handleDelete(index);setValues("")}}>
                                                                Delete
                                                        </button>
                                                        <button
                                                                onClick={() => {
                                                                        setEdit(true);
                                                                        setHandleEdit(index);
                                                                        setValues(items[props.heading]);
                                                                }}
                                                        >
                                                                edit
                                                        </button>
                                                </>
                                        );
                                })}
                        </div>
                </>
        );
}
export default Propforms;
