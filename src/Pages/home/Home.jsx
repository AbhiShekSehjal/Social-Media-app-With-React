import React from 'react'
import "./home.css"
import Navbar from '../../Components/navbar/Navbar'
import LeftSidebar from '../../Components/leftSidebar/LeftSidebar'
import Centerbar from '../../Components/centerBar/Centerbar'
import RightSidebar from '../../Components/rightSidebar/RightSidebar'

function Home() {
    return (
        <>
            <Navbar />
            <div className="homePage">
                <LeftSidebar />
                <Centerbar />
                <RightSidebar />
            </div>
        </>
    )
}

export default Home
