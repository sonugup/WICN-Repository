import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <div> 
            <div>
              <Link to={"/student"}>
                <h3>Total Student</h3>
                <h2>224</h2>
              </Link>
            </div>
          </div>
          <div> 
            <div>
              <Link to={"/questions"}>
                <h3>Total Questions</h3>
                <h2>228</h2>
              </Link>
            </div>
          </div>
          <div> 
            <div>
              <Link to={"/quizs"}>
                <h3>Quiz Avilable</h3>
                <h2>224</h2>
              </Link>
            </div>
          </div>
          <div> 
            <div>
              <Link to={"/student"}>
                <h3>Total Users</h3>
                <h2>224</h2>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      Hi student
    </div>
  )
}

export default Home
