import React from "react"

type Location = { name: string; duration: string; image: string }

const locations: Location[] = [
    {
        name: "Windermere",
        duration: "3-hour drive",
        image: "../../public/windermere.jpg",
    },
    {
        name: "Whitby",
        duration: "2-hour drive",
        image: "../../public/whitby.jpg",
    },
    {
        name: "Newquay",
        duration: "6.5-hour drive",
        image: "../../public/newquay.jpg",
    },
    { name: "York", duration: "1-hour drive", image: "../../public/york.jpg" },
    {
        name: "Blackpool",
        duration: "2-hour drive",
        image: "../../public/blackpool.jpg",
    },
    {
        name: "Sheffield",
        duration: "45-minute drive",
        image: "../../public/sheffield.jpg",
    },
    {
        name: "Harrogate",
        duration: "1-hour drive",
        image: "../../public/harrogate.jpg",
    },
    {
        name: "Manchester",
        duration: "1.5-hour drive",
        image: "../../public/manchester.jpg",
    },
]

export const ExploreNearby: React.VFC = () => {
    return (
        <div className="px-8 md:px-16 mt-16 mb-6">
            <h2 className="text-3xl pb-4 font-bold">Explore nearby</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {locations.map((location) => (
                    <ExploreNearbyCard key={location.name} {...location} />
                ))}
            </div>
        </div>
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
