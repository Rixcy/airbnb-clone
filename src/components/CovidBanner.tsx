import React from "react"

export const CovidBanner: React.VFC = () => {
    return (
        <div className="w-full py-4 text-center px-4 bg-white md:bg-darkest-grey text-darkest-grey md:text-[#A3A3A3] underline">
            <a
                href="#"
                className="hover:text-black md:hover:text-[#A3A3A3CC] text-sm"
            >
                Get the latest on our COVID-19 response
            </a>
        </div>
    )
}
