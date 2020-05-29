import React from 'react';
import './MainNav.css';

const MainNav = () => {
    return (
      
        <div className="MainNav invisible">
            <div className="logo"></div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Explore</li>
                    <li>Notifications</li>
                    <li>Messages</li>
                    <li>Bookmarks</li>
                    <li>Lists</li>
                    <li>Profile</li>
                    <li>More</li>
                </ul>
                <button className="tweetButton">Tweet</button>
            </div>
        </div>
    
    )
}

export default MainNav;