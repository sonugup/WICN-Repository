
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
        <tbody>
          {data.map((row, index) => (
            <EditableRow
              key={index}
              data={row}
              onChange={(newRowData) => handleRowChange(newRowData, index)}
            />
          ))}
        </tbody>
      </div>
    );
  }

  const initialData = [
    ["heding"],
    ["task"],
    
  ];

  function EditeTam() {
    const [data, setData] = React.useState(initialData);

    const handleDataChange = (newData) => {
      setData(newData);
    };
    console.log(data)

    return (
      <EditableTable data={data} onChange={handleDataChange} />
    );

  }

  export default EditeTam;
