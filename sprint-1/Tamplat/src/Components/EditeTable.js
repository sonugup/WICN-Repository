import React, { useState, useEffect } from 'react'
import {MdDeleteForever} from "react-icons/md";
import Table from './Table';

const EditeTable = () => {
    
    const [datasour, setDatasour] = useState([]);
    const [editT, setEditT] = useState(null)

    
    useEffect(() => {
        const data= [];
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
            
        },
       {
            heading:"heading",
            render:(_, record) => {
                
            }
        },
    ]
  return (
    <div>
        <Table 
        columns={columns}
        datasour={datasour}
        />
    </div>
  )
}

export default EditeTable
