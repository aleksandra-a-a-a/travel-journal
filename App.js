import Header from "./components/Header.js"
import Card from "./components/Card.js"
import Footer from "./components/Footer.js"
import data from "./data.js"
import React from "react"

export default function App() {
    const cards = data.map(loc => {
        return (
            <Card 
            key={loc.id}
            loc={loc}
            
            />
        )
    })
 
    return (
        <div>
            <Header />
            {cards}
            <Footer />
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