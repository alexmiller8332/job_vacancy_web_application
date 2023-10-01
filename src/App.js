import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobList from './pages/JobList'
import JobDetail from './pages/JobDetail'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={<JobList />}/>
        <Route path='/detail/:url_params' element={<JobDetail />}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App

