import React from "react"

type Card = {
    image: string
    title: string
    subTitle: string
}

const experiences: Card[] = [
    {
        subTitle: "Travel from home with Online Experiences.",
        image: "https://source.unsplash.com/TXxiFuQLBKQ/450x450",
        title: "Featured collection: Wanderlust",
    },
    {
        subTitle: "Live, interactive activities led by Hosts.",
        image: "https://source.unsplash.com/GNVxujZ_CxU/450x450",
        title: "Online Experiences",
    },
    {
        subTitle: "Local things to do, wherever you are.",
        image: "https://source.unsplash.com/wc_bUQFR7qc/450x450",
        title: "Experiences",
    },
]

export const DiscoverExperiences: React.VFC = () => {
    return (
        <div className="discover-experiences mt-16 mb-16 mx-8 md:mx-16">
            <h2 className="font-bold text-3xl mb-2">Discover Experiences</h2>
            <h3 className="text-2xl mb-6">
                Unique activities with local experts - in person or online.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {experiences.map((experience) => (
                    <DiscoverExperiencesCard
                        key={experience.title}
                        {...experience}
                    />
                ))}
            </div>
        </div>
    )
}

const DiscoverExperiencesCard: React.VFC<Card> = (props) => {
    const { subTitle, title, image } = props
    return (
        <a href="#" className="flex flex-col">
            <img
                src={image}
                className="rounded-xl mb-2 h-[300px] md:h-[450px] object-cover"
            />
            <h4 className="bold text-xl mb-2">{title}</h4>
            <p>{subTitle}</p>
        </a>
    )
}
