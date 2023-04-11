import React, { useEffect } from 'react'
import { useState } from 'react'
import Tamplat from './Tamplat'

const handleButtonClick = () => {
  let list=localStorage.getItem("temlate");
 console.log(list)
  if(list){
    return JSON.parse(localStorage.getItem("temlate"))
  }else{
    return []
  }
 }
const CreateTamplat = () => {
  
    const [tname, setTname] = useState('')
    const [title, setTitle] = useState('')

    const [tamplatdata, setTamplatdata] =useState(handleButtonClick())

    const heandlChenge= (e) => {
    if(e.target.name==="title"){
      setTitle(e.target.value)
    }else{
      setTname(e.target.value)
    }
    }
    // console.log(tamplatdata)
    const addTamplatHandle = (e) => {
      e.preventDefault();

      setTamplatdata((prev) => {
        return (
          [...prev,
          {
            title:title,
            tname:tname,
            id:new Date().getTime()
          }]
        )
      })
    }

    useEffect(()=> {
      localStorage.setItem("temlate", JSON.stringify(tamplatdata))
    }, [tamplatdata])
    // console.log(tamplatdata)
  return (
    <div className='cretetample'>
      <h1 className='nav'>Add Template</h1>
      <form className='formbox'>

        <input type='text' placeholder='Tamplat Name' name='tname' value={tname} onChange={heandlChenge} />
        <input type='text' placeholder='Tamplat Title' name='title' value={title} onChange={heandlChenge} />

        
        <button onClick={addTamplatHandle}>add Section</button>
      </form>
      <div className='box'>
      {
        tamplatdata.length>0 && tamplatdata.map((el) => {
          return (
            <div>
              <Tamplat el={el}  tamplatdata={tamplatdata} setTamplatdata={setTamplatdata} />
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default CreateTamplat
