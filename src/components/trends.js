import React from 'react';
import './trends.css';
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
                    
                        <div className="inside">
                        <li className="inner-card1" key={card.id}>{card.innerCard && card.innerCard.theme} </li>
                            <div className="row">
                            <li className="inner-card2" key={card.id}>{card.innerCard && card.innerCard.desc } </li>
                            <li className="inner-card" key={card.id}> <img src={card.innerCard && card.innerCard.image} alt=""/> </li>
                            </div>
                        </div>

                    <li className="people1" key={card.id}>  {card.people} </li>
                    </div>
        })




        return (
            <div className="outer">
                <div className="boxbox">
                    <input className="searchbox" placeholder="search twitter"></input>
                </div>

                <div className="main">


                    <div className="extradiv">
                        <p className="para1"> Trends for you <img className="cog" src={Cog} alt="" /> </p>

                        <ul className="list">
                            {eachCard}


                        </ul>
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
