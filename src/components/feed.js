import React from 'react';
import './feed.css';
import Tweetbox from './Tweetbox';

class Feed extends React.Component {
    state = {
        tweets: [
        {
        profilePic: "https://pbs.twimg.com/profile_images/1096066608034918401/m8wnTWsX_400x400.png",
        name: "Alan",
        username: "@Lord_Sugar",
        postTime: "49s",
        postContent: "Test footage from Logan proves that Hugh Jackman never wore the fabled Wolverine mask. ",
        postImage: "https://pbs.twimg.com/media/EZG7aKfXgAEJWDQ?format=jpg&name=large",
        postLike: 2,
        postLikeChangeable: true,
        },
        {
        profilePic: "https://pbs.twimg.com/profile_images/1259399226246782977/luqRX_M5_400x400.jpg",
        name: "Andre",
        username: "@Andre_Camm",
        postTime: "1min 30s",
        postContent: "Just coding away",
        postImage: "",
        postLike: 0,
        postLikeChangeable: true,
        },
        {
        profilePic: "https://pbs.twimg.com/profile_images/1096066608034918401/m8wnTWsX_400x400.png",
        name: "Alan",
        username: "@Lord_Sugar",
        postTime: "49s",
        postContent: "Hi my name is Alan Sugar",
        postImage: "",
        postLike: 0,
        postLikeChangeable: true,
        },
        {
        profilePic: "https://pbs.twimg.com/profile_images/1259399226246782977/luqRX_M5_400x400.jpg",
        name: "Andre",
        username: "@Andre_Camm",
        postTime: "1min 30s",
        postContent: "Just coding away",
        postImage: "",
        postLike: 0,
        postLikeChangeable: true,
        }
    ]
}

likeHandler = (index) => {
    let currentData = this.state.tweets[index];
    console.log(currentData.postLikeChangeable);
    
        if(currentData.postLikeChangeable === true) {
            currentData.postLikeChangeable = false;
        this.setState({
            currentData: currentData.postLike++,
    })
}       else {
            currentData.postLikeChangeable = true;
            console.log("decrement")
    this.setState({
            currentData: currentData.postLike--,
        })
    }
}

render() {
    const eachTweet = this.state.tweets.map((tweet, index)=>{
        return <li key={index}>
            <div className="tweet">
                <div className="row">
                    <img className="profileImage" src={tweet.profilePic} alt="profileimage"></img>
                        <div className="column">
                            <div className="tweetMargin"><span className="bold">{tweet.name}</span><span className="italic"> {tweet.username} .</span><span className="time">{tweet.postTime}</span></div>
                                <p>{tweet.postContent}</p>
                                {tweet.postImage !== "" ? <img src={tweet.postImage} alt="postImage" className="postImage"></img> : null}
                                <div className="tweetBtns">
                                    <button className="tweetBtn">Comment</button>
                                    <button className="tweetBtn">retweet</button>
                                    <button className="tweetBtn" onClick={ () => this.likeHandler(index)}>♥️ {tweet.postLike}</button>
                                    <button className="tweetBtn">share</button>
                    </div>
                </div>
            </div>
        </div>
    </li>
})
return (
    <div className="feed">
        <h1>Home</h1>
        <Tweetbox />
        <hr/>
        <div className="tweet">
        {eachTweet}
        </div>
    </div>
        )
    }
}

export default Feed;