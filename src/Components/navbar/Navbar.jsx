import React from 'react'
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Groups2Icon from '@mui/icons-material/Groups2';
import AppsIcon from '@mui/icons-material/Apps';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Navbar() {
    return (
        <nav className="navBar">
            <div className="leftSideNavbar">
                <div className="fbLogo"><a href="">FakeBook</a></div>
                <div className="searchBar" >
                    <SearchIcon className='searchIcon' />
                    <input type="text" placeholder='Search fakebook' className='searchInput' />
                </div>
            </div>


            <div className="centerNavbar">
                <HomeIcon fontSize='large' className='homeBtn' />
                <PeopleAltIcon fontSize='large' className='friendsBtn' />
                <Groups2Icon fontSize='large' className='groupBtn' />
            </div>

            <div className="rightSideNavbar">
                <div className="findFriendBtn">Find friends</div>
                <div className="moreBtn"><AppsIcon /></div>
                <div className="messangerBtn"><MapsUgcIcon /></div>
                <div className="NotificationBtn"><NotificationsIcon /></div>
                <div className="profilePic"><img src="/public/Images/img22.jpg" alt="" /></div>
            </div>
        </nav>
    )
}

export default Navbar
