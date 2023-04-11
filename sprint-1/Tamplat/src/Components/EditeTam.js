
import React from "react";


function EditableCell({ value, onChange }) {
    return (
      <td>
        <input className="int"  type="text" value={value} onChange={onChange} />
        
      </td>
    );
  }

  function EditableRow({ data, onChange }) {
    const handleChange = (event, index) => {
      const newData = [...data];
      newData[index] = event.target.value;
      onChange(newData);
    };

    return (
      <div>
        
        {data.map((value, index) => (
          <EditableCell
            key={index}
            value={value}
            onChange={(event) => handleChange(event, index)}
          />
        ))}
      </div>
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