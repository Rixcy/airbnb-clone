import React from "react"
import { Container } from "./Container"

type Location = { name: string; duration: string; image: string }

const locations: Location[] = [
    {
        name: "Windermere",
        duration: "3-hour drive",
        image: "/windermere.jpg",
    },
    {
        name: "Whitby",
        duration: "2-hour drive",
        image: "/whitby.jpg",
    },
    {
        name: "Newquay",
        duration: "6.5-hour drive",
        image: "/newquay.jpg",
    },
    { name: "York", duration: "1-hour drive", image: "/york.jpg" },
    {
        name: "Blackpool",
        duration: "2-hour drive",
        image: "/blackpool.jpg",
    },
    {
        name: "Sheffield",
        duration: "45-minute drive",
        image: "/sheffield.jpg",
    },
    {
        name: "Harrogate",
        duration: "1-hour drive",
        image: "/harrogate.jpg",
    },
    {
        name: "Manchester",
        duration: "1.5-hour drive",
        image: "/manchester.jpg",
    },
]

export const ExploreNearby: React.VFC = () => {
    return (
        <Container className="px-8 md:px-16 mt-16 mb-6">
            <h2 className="text-3xl pb-4 font-bold">Explore nearby</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {locations.map((location) => (
                    <ExploreNearbyCard key={location.name} {...location} />
                ))}
            </div>
        </Container>
    )
}

const ExploreNearbyCard: React.VFC<Location> = (props) => {
    const { duration, name, image } = props
    return (
        <a href="#" className="flex">
            <div>
                <img className="h-16 rounded-lg" src={image} />
            </div>
            <div className="flex flex-col justify-center ml-4">
                <p className="font-bold mb-1">{name}</p>
                <p>{duration}</p>
            </div>
        </a>
    )
}
