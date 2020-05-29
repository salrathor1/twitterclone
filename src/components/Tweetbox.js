import React from 'react';
import './Tweetbox.css';

class Tweetbox extends React.Component {
    //state
    state = {
        tweet: ""
    }
    //methods
    handleTweetInput = (event) => {
        this.setState({ tweet: event.target.value })
    }
    
    //render
    render() {
        // const { addTweet } = this.props
        return (
            <div className="invisible">
                <div className="homeToolbar">
                    <h1>Home</h1>
                    <div>Icon</div>
                </div>

                <div className="tweetbox">
                <div><img className="profileImage" alt="profle" src="https://pbs.twimg.com/profile_images/1259399226246782977/luqRX_M5_400x400.jpg" /></div>
                <div className="column">
                    <input className="tweetInput" type="text" placeholder="What's happening?" onChange={this.handleTweetInput} value={this.state.tweet}></input>
                    <div className="tweetToolbar">
                        <div className="icons">Icons</div> 
                        <div className="tweetboxButtonHolder">
                            <button className="tweetboxButton" onClick={() => this.props.addTweet(this.state.tweet)}>Tweet</button>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>

        );
    }
}

export default Tweetbox;