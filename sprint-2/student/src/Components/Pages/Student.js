import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BiCircle } from "react-icons/bi";

const Student = () => {
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
    const respons= await axios.get(`http://localhost:8081/api/get`);
    setData(respons.data)
  }

  useEffect(() => {
    loadData();
  }, []);
  console.log(data);

  const handleDelete = (id) => {
    // const confirm = window.confirm("Do you like to Delete");
    if (window.confirm("Do you like to Delete")) {
      axios.delete(`http://localhost:8081/api/remove/${id}`);
       alert("Record Deleted");
        navigate("/student");
      
    }
  };

  return (
    <div>
      Total Student
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
                  <Link to={"/create"} className="btn btn-success">
                    Add
                  </Link>
                </span>
              </div>
            </div>
            <div className="inboxin">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">EMAI</th>
                    <th scope="col">FULL NAME</th>
                    <th scope="col">CONTAICT NUMBER</th>
                    <th scope="col">GTOUP</th>
                    <th scope="col">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((d, i) => {
                    return (
                      <tr key={i}>
                        <td>{d.email}</td>
                        <td>{d.name}</td>
                        <td>{d.contact}</td>
                        <td>{d.group}</td>
                        <td>
                          <Link
                            className="text-decoration-none btn btn-sm btn-success"
                            to={`/update/${d.id}`}
                          >
                            Update
                          </Link>
                          <button className="text-decoration-none btn btn-sm btn-danger" onClick={() => handleDelete(d.id)}>
                            Delete
                          </button>
                          <Link
                            className="text-decoration-none btn btn-sm btn-primary"
                            to={`/read/${d.id}`}
                          >
                            Read
                          </Link>
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
  );
};

export default Student;
