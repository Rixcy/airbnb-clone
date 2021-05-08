import React from "react"

export const BecomeAHost: React.VFC = () => {
    return (
        <div
            className="become-a-host text-white mx-16 mb-6 px-16 py-24 mt-16 rounded-xl bg-cover"
            style={{ backgroundImage: "url('../../public/become-a-host.jpg')" }}
        >
            <h2 className="text-5xl font-bold mb-4">Become a Host</h2>
            <p className="mb-8">
                Earn extra income and unlock new opportunities by sharing your
                space.
            </p>
            <button
                type="button"
                className="bg-white px-4 py-3 rounded-xl text-darkest-grey"
            >
                Learn more
            </button>
        </div>
    )
}
