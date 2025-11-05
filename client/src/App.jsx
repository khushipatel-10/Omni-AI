import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Community from './pages/Community'
import Layout from './pages/Layout'
import BlogTitles from './pages/BlogTitles'
import WriteArticle from './pages/WriteArticle'
import GenerateImage from './pages/GenerateImage'
import RemoveBg from './pages/RemoveBg'
import RemoveObj from './pages/RemoveObj'
import ReviewResume from './pages/ReviewResume'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="write-article" element={<WriteArticle />} />
          <Route path="blog-titles" element={<BlogTitles />} />
          <Route path="generate-image" element={<GenerateImage />} />
          <Route path="remove-background" element={<RemoveBg />} />
          <Route path="remove-object" element={<RemoveObj />} />
          <Route path="review-resume" element={<ReviewResume />} />
          {/* <Route path="community" element={<Community />} /> */}
        </Route>
      </Routes>
    </div >
  )
}

export default App
