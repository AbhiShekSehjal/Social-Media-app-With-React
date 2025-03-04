import React, { useState } from 'react'
import "./HomePage.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ReplyIcon from '@mui/icons-material/Reply';
import { Users } from '../../dummyData/dummyData';


function HomePage({ p }) {

    const [like, setlike] = useState(p.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeCounter = () => {
        setlike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
    }

    return (
        <div className="postSection">
            <div className="topPostSection">
                <div className="profilePic"><img src={Users.filter(user => user.id === p.userId)[0].profilePicture} alt="" /></div>
                <div className="userName">{Users.filter(user => user.id === p.userId)[0].username}</div>
                <div className="postTime">{p.date}</div>
                <div className="infoAboutPost"><MoreVertIcon /></div>
            </div>
            <div className="discriptionOfPost">{p.desc}</div>
            <div className="middlePostSection"><img src={p.photo} alt="" /></div>
            <div className="bottomPostSection">
                <div className="likeBtn" onClick={likeCounter}><ThumbUpIcon /></div>
                <div className="likeCounter">{like}</div>
                <div className="commentBtn"><ChatBubbleIcon /></div>
                <div className="commentCounter">{p.comment}</div>
                <div className="shareBtn"><ReplyIcon /></div>
            </div>
        </div >

    )
}

export default HomePage
