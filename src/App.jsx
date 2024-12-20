import { useState } from 'react'
import './App.css'
import Header from './Header'
import AllArticles from './AllArticles'
import ArticlePage from './ArticlePage'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<AllArticles/>}/>
        <Route path="/articles/:article_id" element={<ArticlePage/>} />
      </Routes>
    </>
  )
}

export default App
