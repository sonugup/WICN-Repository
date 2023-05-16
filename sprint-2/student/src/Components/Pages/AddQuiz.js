import React from 'react'

const AddQuiz = () => {
  return (
    <div className='box'>
     <div>
     <form >
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Quiz name
            </label>
            <input
              type="text"
              className="form-control"
              name="quiz"
              placeholder='Quiz name'
            />
            
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="textarea"
              className="form-control"
              name="description"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-success">
            Submit
          </button>
        </form>
     </div>
    </div>
  )
}

export default AddQuiz

