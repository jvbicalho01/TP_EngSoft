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
import Conta from './pages/Conta.jsx'
import ProfileManager from './pages/ProfileManager.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/movie/video/:id' element={<Video />} />
        <Route path='/profileManager' element={<ProfileManager />} />
        <Route element={<App />}>
          <Route path='/home' element={<Home />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/search' element={<Search />} />
          <Route path='/conta' element={<Conta />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
