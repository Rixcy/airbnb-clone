import React from "react"
import { BiGlobe } from "react-icons/bi"
import logo from "../../public/airbnb.svg"

export const Header: React.VFC = () => {
    return (
        <header className="h-[80px] left-0 w-full z-10 absolute">
            <div className="px-[80px] h-full flex justify-between">
                <a
                    href="#"
                    className="flex-1 min-w-[140px] h-full flex items-center"
                >
                    <img src={logo} className="" />
                </a>
                <div className="flex-1 flex flex-row items-center">
                    <a href="#" className="px-4 whitespace-pre">
                        Places to stay
                    </a>
                    <a href="#" className="px-4 whitespace-pre">
                        Experiences
                    </a>
                    <a href="#" className="px-4 whitespace-pre">
                        Online Experiences
                    </a>
                </div>
                <div className="flex flex-1 flex-row items-center">
                    <a
                        href="#"
                        className="ml-auto bg-transparent hover:bg-white px-4 py-2 rounded-full"
                    >
                        Become a host
                    </a>

                    <a
                        href="#"
                        className="px-4 py-2 rounded-full bg-transparent hover:bg-white h-[40px] flex items-center"
                    >
                        <BiGlobe />
                    </a>
                </div>
            </div>
        </header>
    )
}
