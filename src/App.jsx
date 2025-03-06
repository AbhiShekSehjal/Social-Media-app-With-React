import React from 'react'
import HomePage from './Pages/HomePage/HomePage'
import { Posts } from './dummyData/dummyData'
import Login from './Pages/login page/Login'
import "./app.css"
import CreateAcc from './Pages/create account/CreateAcc'
import Home from './Pages/home/Home'

function App() {
  return (
    <>
      {/* {Posts.map((post) => (
        <HomePage key={post.id} p={post}/>
      ))} */}

      {/* <Login /> */}

      {/* <CreateAcc/> */}

      <Home />
    </>
  )
}

export default App
