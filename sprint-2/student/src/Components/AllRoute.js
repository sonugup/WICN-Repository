import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Home'
import Error from './Error';
import Student from './Pages/Student';
import Result from './Pages/Result';
import Questions from './Pages/Questions';
import Quizs from './Pages/Quizs';
import StudyMaterial from './Pages/StudyMaterial';
import Create from './Pages/Create';
import Update from './Pages/Update';
import Read from './Pages/Read';
const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/result" element={<Result />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/quizs" element={<Quizs />} />
        <Route path="/studyMaterial" element={<StudyMaterial />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default AllRoute
