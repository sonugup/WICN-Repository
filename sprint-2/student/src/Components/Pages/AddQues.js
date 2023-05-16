import React from 'react'

const AddQues = () => {
  return (
    <div className='box'>
     <div>
     <form >
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
            Select question type *
            </label>
            <select className="form-control">
                <option value='0'>Select question type...</option>
                <option value="MCSA">Multiple Choice Single Answer</option>
                <option value="MCMA">Multiple Choice Multiple Answer</option>
                <option value="MTC"> Match the Column</option>
                <option value="SA">Sort Answer</option>
                <option value="LA">Long Answer</option>
            </select>
            
            
          </div>
          <div className="mb-3">
            <label className="form-label">Number of Options *</label>
            <input
              type="number"
              className="form-control"
              name="description"
              placeholder='4'
            />
          </div>
          <div className="mb-3">
            
            <input
              type="checkbox"
              name="description"
              placeholder='4'
            />
            <label className="form-label">With Paragraph</label>
          </div>
          <button type="submit" className="btn btn-primary btn-primery form-control">
            Next
          </button>
        </form>
     </div>
    </div>
  )
}

export default AddQues;