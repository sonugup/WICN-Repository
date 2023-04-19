import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Style/home.css";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GiStarKey } from "react-icons/gi";
import { FaUsersSlash } from "react-icons/fa";
import { BiCircle } from "react-icons/bi";
import Data from "./data/data";

const Home = () => {
  const [curPage, setCurPage] = useState(1)
  const recordsPerPage=5;
  const lastIndex=curPage * recordsPerPage;
  const firstIndex=lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage=Math.ceil(Data.length / recordsPerPage)
  const number=[...Array(npage+1).keys()].slice(1)
  console.log(Data)


  const prePage = () =>{

    if(curPage !== firstIndex) {
      setCurPage(curPage-1)
    }
  }
  const changePage = (id) =>{
    setCurPage(id)
  }
  const nextPage = () =>{
    if(curPage !== lastIndex) {
      setCurPage(curPage+1)
    }
  }

  return (
    <div className="contan">
      <div className="box">
        <div className="navbox">
          <div>
            <div className="divbox1">
              <Link className="link1" to={"/student"}>
                <h5>Total Student</h5>
                <h4>224</h4>
              </Link>
              <FaGraduationCap />
            </div>
          </div>
          <div>
            <div className="divbox2">
              <Link className="link1" to={"/questions"}>
                <h5>Total Questions</h5>
                <h4>228</h4>
              </Link>
              <AiOutlineQuestionCircle />
            </div>
          </div>
          <div>
            <div className="divbox3">
              <Link className="link1" to={"/quizs"}>
                <h5>Quiz Avilable</h5>
                <h4>224</h4>
              </Link>
              <GiStarKey />
            </div>
          </div>
          <div>
            <div className="divbox4">
              <Link className="link1" to={"/student"}>
                <h5>Total Users</h5>
                <h4>224</h4>
              </Link>
              <FaUsersSlash />
            </div>
          </div>
        </div>
        <div className="cont">
          <div>
            <div className="recen">
              <p>Recently Registered Students</p>
              <hr />
              <BiCircle />
              <hr />
            </div>
            <div>
              <div>
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
                    Search <input type="text" />
                  </span>
                </div>
              </div>
              <div>
                <table>
                  <thead>
                    <th>EMAI</th>
                    <th>FULL NAME</th>
                    <th>CONTAICT NUMBER</th>
                  </thead>
                  <tbody>
                    {
                      records.map((d, i) => {
                        return (
                          <tr key={i}>
                            <td>{d.emil}</td>
                            <td>{d.name}</td>
                            <td>{d.contact}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
                <nav>
                  <ul className="pagination">
                    <li className="page-item">
                      <button  className="page-link" onClick={prePage}>
                        prev
                      </button>
                    </li>
                    {
                      number.map((n, i) => {
                        return (
                          <li className={`page-item ${curPage === n ? `activ` : ``}`} key={i}>
                            <button  className="page-item" onClick={() => changePage(n)}>{n}</button>
                          </li>
                        )
                      })
                    }
                    <li className="page-item">
                      <button  className="page-link" onClick={nextPage}>
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>
      Hi student
    </div>
  );
  
};

export default Home;
