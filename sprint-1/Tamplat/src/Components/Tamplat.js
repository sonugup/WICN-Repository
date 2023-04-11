import React, { useEffect } from 'react'

import {MdDeleteForever} from "react-icons/md";
import EditeTam from './EditeTam';
import "./tamplat.css"
import EditeTable from './EditeTable';
import Crud from './Crud';

const Tamplat = ({el,  tamplatdata, setTamplatdata}) => {
  // console.log(el.length)
  useEffect(() => {
    const json = localStorage.getItem("notes");
    const savedNotes = JSON.parse(json);
    if (savedNotes) {
      setTamplatdata(savedNotes);
    }
  }, [tamplatdata]);
//   const handleButtonClick = (button, event) => {
//     setTamplatdata(button)
//     localStorage.setItem("btncourseId", event.target.id)
// }
// const coursebtn = localStorage.getItem("btncourseId")

// useEffect(() => {
//   coursebtn
// })

  return (
    <div className='temp'>
      <div className='namediv'>
      <h1>Tample Name: {el.tname}</h1>
      <h1> Title: {el.title} </h1>
      </div>
      
      <div className='note-footer'>
        
        <Crud/>
        
      </div>
      <div className='note-foot'>
      <small>15/08/2023</small>

     
      
      <button className='deletet' onClick={() => hendleDelete(el.id)}><MdDeleteForever className="delete-icon" size="1.3em"/></button>
        
      </div>
      
    </div>
  )
  function hendleDelete(id){
    const newdata=tamplatdata.filter((ele)=> {
      if(ele.id !== id) {
        return ele;
      }
    })
    setTamplatdata(newdata)
  }
}

export default Tamplat
