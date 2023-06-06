import { useState, useEffect } from "react";

function LifeCycle() {
  const [forms, setForms] = useState([]);
  const [handleData, setHandleData] = useState([
    {
      firstName: "prakash",
      lastName: "jeya",
      gender: "male",
      age: "30",
      address: "earithanda village;thiruvannamalai-606708",
      phone: "+918973164151",
      image: "url('')",
    },
  ]);
  useEffect(() => {
    console.log("handledata", handleData);
    handleUpdate();
  }, [forms]);

  const handleUpdate = () => {
    handleData &&
      handleData.length > 0 &&
      handleData.map((element) => {
        element.firstName = "benson";
        console.log("mapelement", element);
        setHandleData(element);
        return setForms(handleData);
      });
  };

  console.log(forms.firstName);
  return (
    <div>
      <div>
        {forms.map((items) => {
          return (
            <div
              style={{
                display: "flexbox",
                border: "2px solid black",
                backgroundColor: "lightgreen",
                width: "300px",
                justifyContent: "center",
                alignItems: "center",
                fontStyle: "italic",
                margin: "2px",
              }}
            >
              <h2 style={{ padding: "30px" }}> Application Form</h2>
              <p>
                <b>Image</b>:{items.image}
              </p>
              <p>
                <b>FirstName</b>:{items.firstName}
              </p>
              <p>
                <b>LastName</b>:{items.lastName}
              </p>
              <p>
                <b>Gender</b>:{items.gender}
              </p>
              <p>
                <b>Address</b>:{items.address}
              </p>
              <p>
                <b>phone</b>:{items.phone}
              </p>
            </div>
          );
        })}
      </div>
      {/* <p>firstName:{(handleData.firstName).length}</p> */}
    </div>
  );
}
export default LifeCycle;
