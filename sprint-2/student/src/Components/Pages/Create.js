import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [inputData, setInputData] = useState({
    email: "",
    name: "",
    contact: "",
    group: "",
  });

  const navigate=useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8080/student`, inputData)
    .then(res => {
        alert("data posted successfully")
        navigate("/student")
    })
  }


  return (
    <div className="d-flext w-100 vh-100 justify-content-center align-items-center">
      Add Student
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              onChange={(e => setInputData({...inputData, email:e.target.value}))}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={(e => setInputData({...inputData, name:e.target.value}))}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contact Number</label>
            <input
              type="number"
              className="form-control"
              name="contact"
              onChange={(e => setInputData({...inputData, contact:e.target.value}))}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Group</label>
            <input 
            type="text" 
            className="form-control"
            name="group"
            onChange={(e => setInputData({...inputData, group:e.target.value}))}
             />
          </div>
          {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
          <button type="submit" className="btn btn-primary btn-info">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
