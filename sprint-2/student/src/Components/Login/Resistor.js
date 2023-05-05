import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FaUserAlt} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {RiLockPasswordLine} from "react-icons/ri"
import {FaUserPlus} from "react-icons/fa"

const Resistor = () => {
    const [inputData, setInputData] = useState({
        email: "",
        name: "",
        contact: "",
        group: "",
      });
    
      const {name, email, contact, group} = inputData;
      const navigate = useNavigate();
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        if(!name || !email || !contact || !group){
          console.log("please fill the form")
        }
        else{
          axios.post(`http://localhost:8081/api/post`, {
            name, 
            email, 
            contact,
            group
          })
          .then(() => {
            setInputData({name:"", email:"", contact:"", group:""});
          })
          .catch((err) =>console.log(err));
    
          alert("success")
          navigate("/student");
        }
    
        // axios.post(`http://localhost:8081/studetspost`, inputData).then((res) => {
        //   console.log(res)
        //   alert("data posted successfully");
        //   navigate("/student");
        // });
      };
    
      const hendlechenge =(e) => {
        const {name, value}=e.target;
        setInputData({...inputData, [name]:value});
      }
      return (
        <div className='mainpage'>
        <div className="d-flext w-100 vh-100 justify-content-center align-items-center">
          
          <div className="w-50 shadow-lg h-100 mb-5 bg-secondary  text-dark bg-opacity-50 rounded border  text-white p-5">
            <h1 className="m-2 p-2"><FaUserAlt/> Let Us Know You!</h1>
            <hr/>
            <hr/>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label"> <FaUserPlus/> UserName</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={hendlechenge}
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
                  // onChange={(e) =>
                  //   setInputData({ ...inputData, email: e.target.value })
                  // }
                  onChange={hendlechenge}
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label"><RiLockPasswordLine/> Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={hendlechenge}
                  // onChange={(e) =>
                  //   setInputData({ ...inputData, contact: e.target.value })
                  // }
                />
              </div>
              
              <button type="submit" className="btn btn-primary btn-success">
                Sigin
              </button>
            </form>
          </div>
        </div>
        </div>
      );
    };

export default Resistor
