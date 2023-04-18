import React from 'react'
import { Link } from "react-router-dom";
import { IconName } from "react-icons/ai";
import {AiFillDashboard } from "react-icons/ai" 
import {FcGraduationCap} from "react-icons/fc"
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
                    Dosbord
                    </div>
                </Link>
                <Link className='link' to={"/student"}>
                    <div>
                        <FcGraduationCap/>
                        Studend
                    </div>
                </Link>
                <Link className='link' to={"/result"}>
                    <div>
                        <AiFillFolderOpen/>
                       Result
                    </div>
                </Link>
                <Link className='link' to={"/questions"}>
                    <div>
                        <HiQuestionMarkCircle/>
                        Questions
                    </div>
                </Link>
                <Link className='link' to={"/quizs"}>
                    <div>
                        <GiStarKey/>
                        Quizs
                    </div>
                </Link>
                <Link className='link' to={"/studyMaterial"}>
                    <div>
                        <MdLibraryBooks/>
                        Study Material
                    </div>
                </Link>
               
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
