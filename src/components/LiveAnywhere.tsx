import React from "react"
import { Container } from "./Container"

type Card = {
    image: string
    title: string
}

const cards: Card[] = [
    {
        title: "Outdoor getaways",
        image: "https://source.unsplash.com/FKJgBUDoVC0/500x300",
    },
    {
        title: "Unique stays",
        image: "https://source.unsplash.com/9GoVKTE2wng/500x300",
    },
    {
        title: "Entire homes",
        image: "https://source.unsplash.com/_TPTXZd9mOo/500x300",
    },
    {
        title: "Pets allowed",
        image: "https://source.unsplash.com/ieEv01cucy0/500x300",
    },
]

export const LiveAnywhere: React.VFC = () => {
    return (
        <Container className="live-anywhere px-8 md:px-16 mt-16 mb-6">
            <h1 className="text-3xl font-bold mb-4">Live anywhere</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cards.map((card) => (
                    <LiveAnywhereCard
                        title={card.title}
                        image={card.image}
                        key={card.title}
                    />
                ))}
            </div>
        </Container>
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
