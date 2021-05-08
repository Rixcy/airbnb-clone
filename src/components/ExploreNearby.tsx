import React from "react"

type Location = { name: string; duration: string }

const locations: Location[] = [
    { name: "Windermere", duration: "3-hour drive" },
    { name: "Whitby", duration: "2-hour drive" },
    { name: "Newquay", duration: "6.5-hour drive" },
    { name: "York", duration: "1-hour drive" },
    { name: "Blackpool", duration: "2-hour drive" },
    { name: "Sheffield", duration: "45-minute drive" },
    { name: "Harrogate", duration: "1-hour drive" },
    { name: "Manchester", duration: "1.5-hour drive" },
]

export const ExploreNearby: React.VFC = () => {
    return (
        <div className="px-8 md:px-16 mt-16 mb-6">
            <h2 className="text-3xl pb-4 font-bold">Explore nearby</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {locations.map((location) => (
                    <ExploreNearbyCard
                        key={location.name}
                        name={location.name}
                        duration={location.duration}
                    />
                ))}
            </div>
        </div>
    )
}

const ExploreNearbyCard: React.VFC<Location> = (props) => {
    const { duration, name } = props
    return (
        <a href="#" className="flex">
            <div>
                <img
                    className="h-16 rounded-lg"
                    src="https://via.placeholder.com/64"
                />
            </div>
            <div className="flex flex-col justify-center ml-4">
                <p className="font-bold mb-1">{name}</p>
                <p>{duration}</p>
            </div>
        </a>
    )
}
