import React from 'react';
import './Feed.css';
import Tweetbox from './Tweetbox';

class Feed extends React.Component {
    state = {
        tweets: [
            {
            profilePic: "https://pbs.twimg.com/profile_images/1096066608034918401/m8wnTWsX_400x400.png",
            name: "Alan",
            username: "@Lord_Sugar",
            postTime: "49s",
            postContent: "Hi my name is Alan Sugar",
            postLike: 0
            },
            {
            profilePic: "https://pbs.twimg.com/profile_images/1259399226246782977/luqRX_M5_400x400.jpg",
            name: "Andre",
            username: "@Andre_Camm",
            postTime: "1min 30s",
            postContent: "Just coding away",
            postLike: 0
            },
            {
            profilePic: "https://pbs.twimg.com/profile_images/1096066608034918401/m8wnTWsX_400x400.png",
            name: "Alan",
            username: "@Lord_Sugar",
            postTime: "49s",
            postContent: "Hi my name is Alan Sugar",
            postLike: 0
            },
            {
            profilePic: "https://pbs.twimg.com/profile_images/1259399226246782977/luqRX_M5_400x400.jpg",
            name: "Andre",
            username: "@Andre_Camm",
            postTime: "1min 30s",
            postContent: "Just coding away",
            postLike: 0
            }
        ]
        
    }

    render() {
        const eachTweet = this.state.tweets.map((tweet, index)=>{
            return <li key={index}>
            
                <div className="tweet">
                    <div className="row">
                        <img className="profileImage" src={tweet.profilePic} alt="profileimage"></img>
                        <div className="column">
                            <div><span className="bold">{tweet.name}</span><span className="italic"> {tweet.username} . {tweet.postTime}</span></div>
                            <p>{tweet.postContent}</p>
                            <div>Comment | Share | like | Retweet</div>
                        </div>
                        
                    </div>
                </div>
         
            </li>
        })
    return (
        <div className="feed">
            <h1>Home</h1>
            <Tweetbox />
            
            <h2> Feed Items</h2>
            <div className="tweet">
                {eachTweet}
            </div>
            
            
        </div>
        )
    }
}

export default Feed;