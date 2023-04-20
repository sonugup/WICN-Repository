import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

    const {id}=useParams();

    const [inputData, setInputData] = useState({
        id:id,
        email: "",
        name: "",
        contact: "",
        group: "",
      });
    
      const navigate=useNavigate()

      useEffect(() => {
        axios.get(`http://localhost:8080/student/${id}`)
        .then(res => setInputData(res.data))
        .catch(error => console.log(error))
      })
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8080/student/${id}`, inputData)
        .then(res => {
            alert("data update successfully")
            navigate("/student")
        })
      }

  return (
    <div className="d-flext w-100 vh-100 justify-content-center align-items-center">
      Add Student
      <div className="w-50 border bg-secondary text-white p-5">
     
        <form onSubmit={handleSubmit} key={id}>
          <div className="mb-3">
            <label  className="form-label" htmlFor='email'>
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={inputData.email}
              onChange={(e => setInputData({...inputData, email:e.target.value}))}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor='name'>Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={inputData.name}
              onChange={(e => setInputData({...inputData, name:e.target.value}))}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor='contact'>Contact Number</label>
            <input
              type="number"
              name="contact"
              className="form-control"
              value={inputData.contact}
              onChange={(e => setInputData({...inputData, contact:e.target.value}))}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor='group'>Group</label>
            <input 
            type="text" 
            name="group"
            className="form-control"
            value={inputData.group}
            onChange={(e => setInputData({...inputData, group:e.target.value}))}
             />
          </div>
          <button type="submit" className="btn btn-primary ">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default Update
