import React from "react"
import { FaLock } from "react-icons/fa"
import { useConfigStore } from "../stores/config"

export const CookieBanner: React.VFC = () => {
    const [acceptCookies, acceptedCookies] = useConfigStore((state) => [
        state.acceptCookies,
        state.acceptedCookies,
    ])

    return acceptedCookies ? null : (
        <div
            className="cookie-banner mx-8 md:mx-16 mb-6 p-6 flex-col lg:flex-row fixed z-100 bottom-0 bg-white rounded-xl"
            style={{ boxShadow: "rgb(0 0 0 / 28%) 0px 8px 28px" }}
        >
            <div className="flex flex-col mb-6">
                <h5 className="font-bold mb-2">
                    Your Privacy <FaLock className="text-blue ml-2 inline" />
                </h5>
                <p className="text-dark-grey">
                    We use cookies and similar technologies to help personalise
                    content, tailor and measure ads, and provide a better
                    experience. By clicking OK or turning an option on in Cookie
                    Preferences , you agree to this, as outlined in our{" "}
                    <a href="#" className="underline font-bold">
                        Cookie Policy
                    </a>
                    . To change preferences or withdraw consent, please update
                    your Cookie Preferences.
                </p>
            </div>
            <div className="flex flex-row">
                <button
                    type="button"
                    className="mr-2 border border-darkest-grey px-4 py-3 rounded-xl hover:bg-[#f7f7f7] transform transform-gpu focus:outline-none focus:scale-[0.96]"
                >
                    Cookie Preferences
                </button>
                <button
                    type="button"
                    className="bg-darkest-grey px-4 py-3 rounded-xl min-w-[160px] text-white hover:bg-black transform transform-gpu focus:outline-none focus:scale-[0.96]"
                    onClick={acceptCookies}
                >
                    OK
                </button>
            </div>
        </div>
    )
}
