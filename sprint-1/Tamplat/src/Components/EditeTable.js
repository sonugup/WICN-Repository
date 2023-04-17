import React, { useState, useEffect } from 'react'
import {MdDeleteForever} from "react-icons/md";
import Table from './Table';

const EditeTable = () => {
    
    const [datasour, setDatasour] = useState([]);
    const [editT, setEditT] = useState(null)

    
                
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
