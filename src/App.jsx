import React from 'react'
import HomePage from './Pages/HomePage/HomePage'
import { Posts } from './dummyData/dummyData'
import Login from './Pages/login page/Login'

function App() {
  return (
    <>
      {/* {Posts.map((post) => (
        <HomePage key={post.id} p={post}/>
      ))} */}

      <Login />
    </>
  )
}

export default App
