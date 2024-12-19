import { useState } from 'react'
import './App.css'
import Header from './Header'
import ArticleCard from './ArticleCard'
import AllArticles from './AllArticles'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <Header/>
      <AllArticles/>
    </>
  )
}

export default App
