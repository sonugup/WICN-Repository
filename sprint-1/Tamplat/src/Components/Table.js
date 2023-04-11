import React from 'react'

const Table = ({columns, datasour}) => {
  console.log(columns, datasour)
  return (
    <div>
      <h>Table</h>
      {
        datasour.map((el) => {
          return(
            <div>
              <table>
                <tbody>
                  <tr>
                  <td>{el.heading}</td>
                  <td>{el.task}</td>
                  <td>{el.notes}</td>
                  </tr>
                
                </tbody>
                
              </table>
            </div>
          )
        })
      }
    </div>
  )
}

export default Table
