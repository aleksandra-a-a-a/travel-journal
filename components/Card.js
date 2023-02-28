import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.loc.imageUrl}`} className='card--image'/> 
            <div className='post'>              
                <div className='card--location'>
                    <img src="../images/location.png" className="card--pin"/>
                    <span className="gray">{props.loc.location}</span>
                    <span className="gray"><a href={`${props.loc.googleMapsUrl}`}> View on Google Maps </a></span>
                </div>
                    <h2 className="title">{props.loc.title}</h2>
                    <p className="date">{props.loc.startDate} - {props.loc.endDate}</p>
                    <span className="desc">{props.loc.description}</span>  
                </div>           
            </div>
    )
} 


// title: "Catania - Sicily",
//         location: "Italy",
//         googleMapsUrl: "https://goo.gl/maps/yTMykEyjF7WLJWx76",
//         startDate: "30 May, 2022",
//         endDate: "03 Jun, 2022",
//         description: `Catania is a vibrant city located on the eastern coast of Sicily, surrounded by majestic mountains and the stunning Ionian Sea.
//         With its charming narrow streets, historic monuments, and lively markets, Catania is a city that captures the heart of every traveler.
//         As one of the oldest cities in Italy, Catania boasts a rich cultural heritage, from ancient Greek and Roman ruins to magnificent Baroque architecture.`,
//         imageUrl: "https://source.unsplash.com/WLxQvbMyfas"