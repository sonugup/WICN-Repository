import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {FaUserAlt} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {RiLockPasswordLine} from "react-icons/ri"
import {FaUserPlus} from "react-icons/fa"
import {CiLogin} from "react-icons/ci"

const Resistor = () => {
  const [userName, setUserName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

  const handleClick=(event) => {
    event.preventDefault();
    axios.post(`http://localhost:8081/register`, {
      Email:email,
      UserName:userName,
      Password:password
    }).then((res) => {
      console.log("user has been loged")
      console.log(res)
    })
  }
    // const [inputData, setInputData] = useState({
    //     email: "",
    //     name: "",
    //     password: ""
    //   });
    
    //   const {name, email, password} = inputData;
    //   const navigate = useNavigate();
    
    //   const handleSubmit = (event) => {
    //     event.preventDefault();
    
    //     if(!name || !email || !password){
    //       console.log("please fill the form")
    //     }
    //     else{
    //       axios.post(`http://localhost:8081/register`, {
    //         name, 
    //         email, 
    //         password,
    //       })
    
    
    
      return (
        <div className='mainpage'>
        <div className="d-flext w-100 vh-100 justify-content-center align-items-center">
          
          <div className="w-50 shadow-lg h-100 mb-5 bg-secondary  text-dark bg-opacity-50 rounded border  text-white p-5">
            <h1 className="m-2 p-2"><FaUserAlt/> Let Us Know You!</h1>
            <hr/>
            <hr/>
            <form >
              {/* //onSubmit={handleSubmit} */}
            <div className="mb-3">
                <label className="form-label"> <FaUserPlus/> UserName</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  // onChange={hendlechenge}
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                  // onChange={(e) =>
                  //   setInputData({ ...inputData, name: e.target.value })
                  // }
                />
              </div>
              <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                    <MdEmail/>
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  aria-describedby="emailHelp"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  // onChange={(e) =>
                  //   setInputData({ ...inputData, email: e.target.value })
                  // }
                  // onChange={hendlechenge}
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label"><RiLockPasswordLine/> Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  // onChange={hendlechenge}
                  // onChange={(e) =>
                  //   setInputData({ ...inputData, contact: e.target.value })
                  // }
                />
              </div>
              
              <button type="submit" onClick={handleClick} className="btn btn-primary btn-success">
                Sigin
              </button>
              <div className="mt-5 text-center bg-secondary p-3 text-dark bg-opacity-50 rounded text-white">
              <span>Have an account? <Link to="/" className="bg-secondary p-2 text-white bg-opacity-75 rounded border-none text-decoration-none">Sign UP <CiLogin/> </Link> </span>
              </div>
            </form>
          </div>
        </div>
        </div>
      );
    };

export default Resistor
