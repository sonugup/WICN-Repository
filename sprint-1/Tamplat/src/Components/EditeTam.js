
import React from "react";


function EditableCell({ value, onChange }) {
 

  

    return (
      <div>
        
        
    );
  }

  function EditableTable({ data, onChange }) {
    const handleRowChange = (newData, index) => {
      const newDataList = [...data];
      newDataList[index] = newData;
      onChange(newDataList);
    };

    return (
      <div border="1px solid">
        
    );
  }

  const initialData = [
    ["heding"],
    ["task"],
    
  ];


  }

  export default EditeTam;
