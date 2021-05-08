import React from "react"
import {
    FaFacebookF,
    FaInstagram,
    FaPoundSign,
    FaTwitter,
} from "react-icons/fa"
import { BiGlobe } from "react-icons/bi"
import { Container } from "./Container"

type LinkGroup = {
    title: string
    links: string[]
}

const linkGroups: LinkGroup[] = [
    {
        title: "ABOUT",
        links: [
            "How Airbnb works",
            "Newsroom",
            "Investors",
            "Airbnb Plus",
            "Airbnb Luxe",
            "HotelTonight",
            "Airbnb for Work",
            "Made possible by Hosts",
            "Careers",
            "Founders' Letter",
        ],
    },
    {
        title: "COMMUNITY",
        links: [
            "Diversity & Belonging",
            "Accessibility",
            "Airbnb Assosiates",
            "Frontline Stays",
            "Guest Referrals",
            "Airbnb.org",
        ],
    },
    {
        title: "HOST",
        links: [
            "Host your home",
            "Host an Online Experience",
            "Host an Experience",
            "Responsible hosting",
            "Resource Centre",
            "Community Centre",
        ],
    },
    {
        title: "SUPPORT",
        links: [
            "Our COVID-19 Response",
            "Help Centre",
            "Cancellation options",
            "Neighbourhood Support",
            "Trust & Safety",
        ],
    },
]

export const Footer: React.VFC = () => {
    return (
        <div className="border-t border-[#DDDDDD] bg-[#F7F7F7] px-16 pt-16">
            <Container>
                <FooterLinks linkGroups={linkGroups} />
                <FooterInfo />
            </Container>
        </div>
    )
}

const FooterLinks: React.VFC<{ linkGroups: LinkGroup[] }> = (props) => {
    const { linkGroups } = props

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {linkGroups.map((linkGroup) => (
                <div className="flex flex-col" key={linkGroup.title}>
                    <h5 className="font-bold text-xs mb-4">
                        {linkGroup.title}
                    </h5>
                    {linkGroup.links.map((link) => (
                        <a
                            href="#"
                            className="mb-4 text-sm hover:underline hover:text-darkest-grey"
                            key={link}
                        >
                            {link}
                        </a>
                    ))}
                </div>
            ))}
        </div>
    )
}

const FooterInfo: React.VFC = () => {
    return (
        <div className="flex flex-col md:flex-row border-t mt-8 py-8 justify-between text-sm">
            <div className="flex flex-col md:flex-row mb-2 md:mb-0">
                <p className="mb-2 md:mb-0 whitespace-pre w-full md:w-auto">
                    © 2021 Airbnb, Inc.
                </p>
                <div>
                    <span className="hidden md:inline w-[16px] mx-2 text-center">
                        ·
                    </span>
                    <a href="#">Privacy</a>
                    <span className="w-[16px] mx-2 text-center">·</span>
                    <a href="#">Terms</a>
                    <span className="w-[16px] mx-2 text-center">·</span>
                    <a href="#">Sitemap</a>
                    <span className="w-[16px] mx-2 text-center">·</span>
                    <a href="#">UK Modern Slavery Act</a>
                    <span className="w-[16px] mx-2 text-center">·</span>
                    <a href="#">Company Details</a>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="mr-8 flex flex-row">
                    <div className="mr-8 flex flex-row items-center">
                        <BiGlobe />
                        <a href="#" className="ml-2 underline font-bold">
                            English (GB)
                        </a>
                    </div>
                    <div className="flex flex-row items-center">
                        <FaPoundSign className="w-[14px] h-[14px]" />
                        <a href="#" className="ml-2 underline font-bold">
                            GBP
                        </a>
                    </div>
                </div>
                <div className="flex flex-row">
                    <FaFacebookF className="mr-4 w-[18px] h-[18px]" />
                    <FaTwitter className="mr-4 w-[18px] h-[18px]" />
                    <FaInstagram className="w-[18px] h-[18px]" />
                </div>
            </div>
        </div>
    )
}
