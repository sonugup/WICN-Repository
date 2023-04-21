import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data1, setData1] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/${id}`)
      .then((res) => setData1(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container">
      <div className='box'>
        {
          <div key={data1.id}>
            <p> {data1.id} </p>
            <p> {data1.email} </p>
            <p> {data1.name} </p>
            <p> {data1.contact} </p>
            <p> {data1.group} </p>
          </div>
        }
      </div>
      <Link to={"/student"}>Back</Link>
    </div>
  );
};

export default Read;
