import React from 'react'
import HomePage from './Pages/HomePage/HomePage'
import { Posts } from './dummyData/dummyData'

function App() {
  return (
    <>
      {Posts.map((post) => (
        <HomePage key={post.id} p={post}/>
      ))}
    </>
  )
}

export default App
