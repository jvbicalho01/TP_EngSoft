import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import Movie from './pages/Movie.jsx'
import Login from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Video from './pages/Video.jsx'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login />}/>
        <Route path='/cadastro' element={<Cadastro />}/>
        <Route element={<App />}>
          <Route path='/home' element={<Home />}/>
          <Route path='/movie/:id' element={<Movie />}/>
          <Route path='/movie/video/:id' element={<Video />}/>
          <Route path='/search' element={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
