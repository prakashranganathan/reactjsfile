import React, { useState } from "react";
import "../src/css/form.css";
function ValidationExample() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [array, setArray] = useState([]);
  let error = {};
  let data = [...array];
  const input = () => {
    if (username === "" || username.length < 4) {
      error.name = "plz enter the username";
    } else {
      // setErrors("");
      let findIndex = email.indexOf("@");
      if (email === "" || findIndex === -1) {
        error.email = "plz enter the email";
      } else {
        // setErrors("");
        if (phonenumber.length < 10) {
          error.phonenumber = "plz enter the phonenumber";
        } else {
          // setErrors("");
          if (gender === "") {
            error.gender = "plz enter ur gender";
          } else {
            // setErrors("");
            if (password === "") {
              error.password = "plz enter the passsword";
            } else if (password.length < 8) {
              error.password = "plz enter the password more then 8char";
            } else {
              // setErrors();
              console.log("validation");
              handlevalidatingForm();
            }
          }
        }
      }
    }
    setErrors(error);
  };
  const handlevalidatingForm = () => {
    let result = {
      Name: username,
      Email: email,
      Phone: phonenumber,
      Gender: gender,
      Password: password,
    };

    const getNames = data.map((items) => items.Name);
    const getEmail = data.map((items) => items.Email);
    const getphone = data.map((items) => items.Phone);
    const getPassword = data.map((items) => items.Password);
    let checkName, checkeEmail, checkPhone, checkPassword; //check input feilds
    const findExistingData = [
      (checkName = getNames.some((items) => items === username)),
      (checkeEmail = getEmail.some((items) => items === email)),
      (checkPhone = getphone.some((items) => items === phonenumber)),
      (checkPassword = getPassword.some((items) => items === password)),
    ];

    if (checkName === true) {
      error.name = "name alredy existing";
    } else {
      if (checkeEmail === true) {
        error.email = "email alredy existing";
      } else {
        if (checkPhone === true) {
          error.phonenumber = " phonenumber alredy existing";
        } else {
          if (checkPassword === true) {
            error.password = " password alredy existing";
          }
        }
      }
    }
    setErrors(error);
    const validationResult = findExistingData.some((items) => items === true);
    if (validationResult !== true) {
      data.push(result);
      setArray(data);
    }
  };
  console.log("array........>", array);
  console.log("data------", data);
  return (
    <>
      <div className="container">
        <div className="form">
          <h2>@7imeTech.info</h2>
          <br />
          <div className="main">
            <label htmlFor="username">Username:</label>
            <br />
            <input
              id="username"
              type="text"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p style={{ color: "red" }}>{<span>{errors.name}</span>}</p>
            {/* <p style={{ color: "red" }}>{<span>{errors.name}</span>}</p> */}
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <br />
            <input
              id="email"
              type="text"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p style={{ color: "red" }}>{<span>{errors.email}</span>}</p>
            {/* <p style={{ color: "red" }}>{<span>{errors.email}</span>}</p> */}
          </div>
          <div>
            <label htmlFor="phone">phonenumber:</label>
            <br />
            <input
              id="phone"
              value={phonenumber}
              type="number"
              name="phonenumber"
              onChange={(e) => setPhonenumber(e.target.value)}
            />
            <p style={{ color: "red" }}>{<span>{errors.phonenumber}</span>}</p>
            {/* <p style={{ color: "red" }}>{<span>{errors.phone}</span>}</p> */}
          </div>
          <div>
            <label>Gender:</label>
            <br />
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="others"
                checked={gender === "others"}
                onChange={(e) => setGender(e.target.value)}
              />
              others
            </label>
            <p style={{ color: "red" }}>{<span>{errors.gender}</span>}</p>
          </div>
          <div>
            <label htmlFor="password">password:</label>
            <br />
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            {/* <p style={{ color: "red" }}>{<span>{errors.password}</span>}</p> */}
          </div>
          <p style={{ color: "red" }}>{<span>{errors.password}</span>}</p>

          <button
            onClick={() => {
              input();
            }}
          >
            submit
          </button>
        </div>

        <div className="prints">
          {array.map((value, index, key) => {
            return (
              <>
                <div className="cards">
                  <h1>form Submission{index}</h1>
                  <p>
                    <b>Name: </b>
                    {value.Name}
                  </p>
                  <p>
                    <b>Email : </b>
                    {value.Email}
                  </p>
                  <p>
                    <b>Phone : </b>
                    {value.Phone}
                  </p>
                  <p>
                    <b>Gender : </b>
                    {value.Gender}
                  </p>
                  <p>
                    <b>Password: </b>
                    {value.Password}
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
export default ValidationExample;
