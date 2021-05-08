import React from "react"

type Card = {
    image: string
    title: string
}

const cards: Card[] = [
    {
        title: "Outdoor getaways",
        image: "https://placedog.net/200/150/b?random",
    },
    { title: "Unique stays", image: "https://placedog.net/200/150/b?random" },
    { title: "Entire homes", image: "https://placedog.net/200/150/b?random" },
    { title: "Pets allowed", image: "https://placedog.net/200/150/b?random" },
]

export const LiveAnywhere: React.VFC = () => {
    return (
        <div className="live-anywhere px-16 mt-16 mb-6">
            <h1 className="text-3xl font-bold mb-4">Live anywhere</h1>
            <div className="grid grid-flow-col auto-cols-auto gap-4">
                {cards.map((card) => (
                    <LiveAnywhereCard
                        title={card.title}
                        image={card.image}
                        key={card.title}
                    />
                ))}
            </div>
        </div>
    )
}

const LiveAnywhereCard: React.VFC<Card> = (props) => {
    const { title, image } = props
    return (
        <a href="#" className="flex flex-col">
            <img src={image} className="w-full h-auto rounded-lg mb-2" />
            <p className="text-lg">{title}</p>
        </a>
    )
}
