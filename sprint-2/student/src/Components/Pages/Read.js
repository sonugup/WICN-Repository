import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data1, setData1] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/get/${id}`)
      .then((res) => setData1(res.data[0]))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container">
      <div className="box">
        {
          <div key={data1.id} className="m-30 pt-10">
            <p> {data1.id} </p>
            <p>Email =: {data1.email} </p>
            <p>Name =: {data1.name} </p>
            <p>Contact =: {data1.contact} </p>
            <p>Group =: {data1.group} </p>
          </div>
        }
      </div>
      <Link to={"/student"}>Back</Link>
    </div>
  );
};

export default Read;
