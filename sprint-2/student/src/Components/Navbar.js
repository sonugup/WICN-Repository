import React from 'react'
import { Link } from "react-router-dom";
import { IconName } from "react-icons/ai";
import {AiFillDashboard } from "react-icons/ai" 
import {FaGraduationCap} from "react-icons/fa"
import {AiFillFolderOpen} from "react-icons/ai"
import {HiQuestionMarkCircle} from "react-icons/hi"
import {GiStarKey} from "react-icons/gi"
import {MdLibraryBooks} from "react-icons/md"
import "./Style/navbar.css"
const Navbar = () => {
  return (
    <div>
      <div>
        <div>
            <div className="navbar">
                <img className='iwcn' src='iwcn.png' />
            
                <Link className='link' component={Link} to={"/"}>
                    <div>
                    <AiFillDashboard/>
                    DASHBOARD
                    </div>
                </Link>
                <Link className='link' to={"/student"}>
                    <div>
                        <FaGraduationCap/>
                        STUDENT
                    </div>
                </Link>
                <Link className='link' to={"/result"}>
                    <div>
                        <AiFillFolderOpen/>
                       RESULT
                    </div>
                </Link>
                <Link className='link' to={"/questions"}>
                    <div>
                        <HiQuestionMarkCircle/>
                        QUESTIONS
                    </div>
                </Link>
                <Link className='link' to={"/quizs"}>
                    <div>
                        <GiStarKey/>
                        QUIZS
                    </div>
                </Link>
                <Link className='link' to={"/studyMaterial"}>
                    <div>
                        <MdLibraryBooks/>
                        STUDY MATERIAL
                    </div>
                </Link>
               
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
