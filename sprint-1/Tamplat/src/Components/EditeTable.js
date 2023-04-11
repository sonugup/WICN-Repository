import React, { useState, useEffect } from 'react'
import {MdDeleteForever} from "react-icons/md";
import Table from './Table';

const EditeTable = () => {
    const [datasour, setDatasour] = useState([]);
    const [editT, setEditT] = useState(null)
    // console.log(ele.length)
    useEffect(() => {
        const data= [];
        data.push({
            heading:"heading",
            task:"task",
            note:"notes"
        })
        setDatasour(data)

    },[])


    const columns = [
        {
            heading:"heading",
            render:(text, record) => {
                if(editT===record.key){
                    return <div 
                    heading="heading"
                    rules = {[
                        {
                            required:true,
                            massage:"please enter your address"
                        }
                    ]}
                    >
                    <input/>
                    </div>
                }else{
                    return <p>{text}</p>
                }
            },
            task:"task",
            render:(text, record) => {
                if(editT===record.key){
                    return <div 
                    task="task"
                    rules = {[
                        {
                            required:true,
                            massage:"please enter your address"
                        }
                    ]}
                    >
                    <input/>
                    </div>
                }else{
                    return <p>{text}</p>
                }
            },
            note:"note"
            ,render:(text, record) => {
                if(editT===record.key){
                    return <div 
                    note="note"
                    rules = {[
                        {
                            required:true,
                            massage:"please enter your address"
                        }
                    ]}
                    >
                    <input/>
                    </div>
                }else{
                    return <p>{text}</p>
                }
            }
        },
        // {
        //     heading:"heading",
        //     task:"task",
        //     note:"note",
        //     
        // },
        {
            heading:"heading",
            render:(_, record) => {
                return(
                    <>
                    <button onClick={() => {
                        setEditT(record.key)
                    }}>Edit</button>
                    <button><MdDeleteForever className="delete-icon" size="1.3em"/></button>
                    </>
                )
            }
        },
    ]

  return (
    <div>
        <Table 
        columns={columns}
        datasour={datasour}
        />
      {/* <form className='form'>
        <input type='text' placeholder='heading'/>
        <input type='text' placeholder='task'/>
        
        <input type='text' placeholder='notes'/>
        <button className='btn'>add heding</button>
        <button className='btn'>add task</button>
        <button className='btn'>add no</button>
      </form> */}
    </div>
  )
}

export default EditeTable
