import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BiCircle } from "react-icons/bi";


const Questions = () => {

  const [data, setData] = useState([]);

  const [curPage, setCurPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = curPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const number = [...Array(npage + 1).keys()].slice(1);

  const navigate = useNavigate;
  const prePage = () => {
    if (curPage !== firstIndex) {
      setCurPage(curPage - 1);
    }
  };
  const changePage = (id) => {
    setCurPage(id);
  };
  const nextPage = () => {
    if (curPage !== lastIndex) {
      setCurPage(curPage + 1);
    }
  };

  const loadData = async () =>{
    const resp= await axios.get(`http://localhost:8081/api/get`);
    setData(resp.data)
  }

  useEffect(() => {
    loadData();
  }, []);
  console.log(data);

  const handleDelete = (id) => {
    
    if (window.confirm("Do you like to Delete")) {
      axios.delete(`http://localhost:8081/api/remove/${id}`);
       alert("Record Deleted");
        navigate("/student");
      
    }
    console.log(id)
  };

  return (
    <div>
      <h2>Questions List</h2>
      <div className="box">
        <div className="secbox1">
          <div className="recen">
            <p>Recently Registered Students</p>
            <hr />
            <BiCircle />
            <hr />
          </div>
          <div className="inbox">
            <div className="topof">
              <div>
                <p>
                  Show
                  <select>
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                  </select>
                  entries
                </p>
              </div>
              <div>
                <span>
                  <Link to={"/addQues"} className="btn btn-success">
                    Add
                  </Link>
                </span>
              </div>
            </div>
            <div className="inboxin">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">QUESTION</th>
                    <th scope="col">QUESTION TYPE</th>
                    <th scope="col">CATEGORY/LEVEL</th>
                    <th>%CORRECT</th>
                    <th scope="col">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((d, i) => {
                    return (
                      <tr key={i}>
                        <td>Your php page is unexpectedly rendering as totally blank. Wh..</td>
                        <td>Multiple Choice Single Answer</td>
                        <td>General Test / Normal</td>
                        <td><input type="range" /></td>
                        <td>
                          <p>	
Added in quiz!</p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <nav>
                <ul className="pagination">
                  <li className="page-item">
                    <button className="page-link" onClick={prePage}>
                      prev
                    </button>
                  </li>
                  
                  {number.map((n, i) => {
                    return (
                      <li
                        className={`page-item ${curPage === n ? "activ" : ""}`}
                        key={i}
                      >
                        <button
                          className="page-item"
                          onClick={() => changePage(n)}
                        >
                          {n}
                        </button>
                      </li>
                    );
                  })}
                  <li className="page-item">
                    <button className="page-link" onClick={nextPage}>
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questions
