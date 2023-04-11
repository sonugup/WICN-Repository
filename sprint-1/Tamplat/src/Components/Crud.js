import React, { useRef, useState } from 'react'

const Crud = () => {
    const list = [
        {
            id:1,
            section:"Section",
            heading:"Heading",
            task:"Task"
        }
      ]

      const [lists, setLists]  = useState(list)
      const [updateState, setUpdateState] = useState(-1)
      console.log(lists)
  return (
    <div className='table'>
        <AddList setLists={setLists}/>
<div>
    <form onSubmit={hendleSubmit}>
    {
        lists.map((cur) => {
           
            return(
                updateState===cur.id ? <EditList cur={cur} lists={lists} setLists={setLists} />:
<div className='tre'>
                <p>{cur.section} </p>
                <p>{cur.heading} </p>
                <p>{cur.task} </p>
                <td className=''>
                    <button className='editet' onClick={() => hendleEdit(cur.id)}>Edit</button>
                    <button className='deletet' type='button' onClick={() => hendleDelete(cur.id)}>Delete</button>
                </td>
            </div>
            )
            
        })
    }
    </form>
</div>
    </div>
  )

  function hendleEdit(id) {
    setUpdateState(id)
  }

  function hendleDelete(id){
    const newlist=lists.filter((li) => li.id !== id)
    setLists(newlist)
  }

  function hendleSubmit(event) {
    event.preventDefault()
    const section = event.target.elements.section.value;
    const heading=event.target.elements.heading.value;
    const task=event.target.elements.task.value
    const newlist = lists.map((li) => {
        return li.id === updateState ? {...li, section:section, heading:heading, task:task} : li
    })
    setLists(newlist)
    setUpdateState(-1)
  }

}


function EditList ({cur, lists, setLists}) {

     const handInputhead = (event) =>{
        const value=event.target.value;
        const newlist=lists.map((li) => {
            return(
                li.id === cur.id ? {...li, section:value} : li
            )
            
        })
        setLists(newlist)
        // const heading=event.target.heading;
        // const task=event.target.task;
    }
    const handInputheading = (event) => {
        const value= event.target.value;
        const newlist=lists.map((li) => {
            return(
                li.id === cur.id ? {...li, heading:value} : li
            )
        })
        setLists(newlist)
    }
    const handInputtask = (event) => {
        const value= event.target.value;
        const newlist=lists.map((li) => {
            return(
                li.id === cur.id ? {...li, task:value} : li
            )
        })
        setLists(newlist)
    }

    return (
        <div className='editbox'>
            <p> <input type="text" name='section' onChange={handInputhead} value={cur.section} placeholder=' Section' /> </p>
            <p> <input type="text" name='heading' onChange={handInputheading} value={cur.heading} placeholder=' Heading' /> </p>
            <p> <input type="text" name='task' onChange={handInputtask} value={cur.task} placeholder=' Task' /> </p>
            <p> <button className='btn' type='submit'>update</button> </p>
        </div>
    )
}


function AddList({setLists}) {

    const sectionRef=useRef();
    const headingRef=useRef();
    const taskRef = useRef();

    function hendleSubmit(event) {
        event.preventDefault()
        const section= event.target.elements.section.value;
        const heading= event.target.elements.heading.value;
        const task= event.target.elements.task.value;
        const newlist={
            id:2,
            section,
            heading,
            task
        }
        setLists((prevList) => {
            return prevList.concat(newlist)
        })

        sectionRef.current.value=""
        headingRef.current.value=""
        taskRef.current.value=""
    }
    return (
        <form className='formbox' onSubmit={hendleSubmit}>
            <input type='text' name='section' placeholder='Add Section' ref={sectionRef} />
            <input type='text' name='heading'  placeholder='Add Heading' ref={headingRef}/>
            <input type='text' name='task' placeholder='Add Task' ref={taskRef}/>
            <button type='submit' className='btn'>add</button>
        </form>
    )
}
export default Crud
