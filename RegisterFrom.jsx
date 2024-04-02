import React from 'react'
import { useState } from 'react';
import './Register.css'

const RegisterFrom = () => {

    // Register acount
  // data saving in this registerdata array
    let reisterdata = [];
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [checkbox, setcheckbox] = useState(false);

  const register = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      dateOfBirth: dateOfBirth,
      checkbox: checkbox,
    };
    reisterdata.push(data);
    alert("Register Successful");
    console.log("Register Successful:", reisterdata);
  };

  return (
    <div>
        <h3>Register Form</h3>
        <form onSubmit={register}>
          <label>
            First Name:
            <input 
              required
              type="text"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              name="fname"
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              required
              type="text"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              name="lname"
            />
          </label>
          <br />
          <label>
            Password:
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              name="password"
            />
          </label>
          <br />
          <label>
            Email:
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              name="email"
            />
          </label>
          <br />
          <label>
            <input
              required
              type="checkbox"
              value={checkbox}
              onChange={(e) => setcheckbox(e.target.value)}
            />{" "}
            I agree to the terms and conditions
          </label>
          <br />
          <label>
            Date of Birth:
            <input
              required
              type="date"
              value={dateOfBirth}
              onChange={(e) => setdateOfBirth(e.target.value)}
              name="dob"
            />
          </label>
          <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default RegisterFrom