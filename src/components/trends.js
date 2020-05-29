import React from 'react';
import './Trends.css';
import Moon from './moon.jpg'
import Cat from './cat.jpg'
import Cog from './settingscog.jpg'
// import { IconName } from "react-icons/fa";


class Trends extends React.Component {
    state = {
        cards: [
            {
                trending: "Trending Worldwide",
                hashtag: "#BreakingNews",
                innerCard: {
                    theme: "Space",
                    desc: "Lunar photography improves the discovery of the moon",
                    image: Moon,
                },
                people: "10,094 people are Tweeting about this",
            },

            {
                trending: "Trending Worldwide",
                hashtag: "#WorldNews",
                innerCard: {
                    theme: "",
                    desc: "",
                    image: "",
                },
                number: "125k Tweets",
                people: "5,094 people are Tweeting about this",



            },

            {
                trending: "Trending Worldwide",
                hashtag: "#BreakingNews",
                innerCard: {
                    theme: "Animals",
                    desc: "These cats are ready for #InternationalCatDay",
                    image: Cat,
                },
                people: " 2,757 people are Tweeting about this",

            },

            {
                trending: "Trending Worldwide",
                hashtag: "#GreatestOfAllTime",
                innerCard: {
                    theme: "",
                    desc: "",
                    image: "",
                },
                number: "100k Tweets",
                people: "4,123 people are Tweeting about this",


            },

        ]

    }

    render() {

        const eachCard = this.state.cards.map((card, index) => {

            return <div className="main1">
                <li className="trending" key={card.id}>  {card.trending} </li>
                <li className="hashtag" key={card.id}>  {card.hashtag} </li>

                {card.innerCard.theme === "" ? "" :
                    <div className="inside">
                        <div className="text">
                        <li className="inner-card1" key={card.id}>{card.innerCard && card.innerCard.theme} </li>
                        <li className="inner-card2" key={card.id}>{card.innerCard && card.innerCard.desc} </li>
                        </div>
                        <div className="picture">
                            <li className="inner-card" key={card.id}> <img className="trendimage"src={card.innerCard && card.innerCard.image} alt="" /> </li>
                        </div>
                    </div>
                }
                <li className="people1" key={card.id}>  {card.people} </li>
            </div>
        })




        return (
            <div className="outer invisible">
                <div className="boxbox">
                    <input className="searchbox" placeholder="    Search Twitter"></input>
                </div>

                <div className="main">


                    <div className="extradiv">
                        <p className="para1"> Trends for you <img className="cog" src={Cog} alt="" /> </p>

                        <ul className="list">
                            {eachCard}
                        </ul>
                        <button className="showMorebutton">Show more</button>
                    </div>
                </div>
            </div>




        )
    }

}

// const Card = () => {
//     return (
//         <div>
//             <h1>  </h1>

//         </div>

//     )
// }


export default Trends;
