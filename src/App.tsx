import React from "react"
import { BecomeAHost } from "./components/BecomeAHost"
import { CookieBanner } from "./components/CookieBanner"
import { CovidBanner } from "./components/CovidBanner"
import { DiscoverExperiences } from "./components/DiscoverExperiences"
import { ExploreNearby } from "./components/ExploreNearby"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { LiveAnywhere } from "./components/LiveAnywhere"

function App() {
    return (
        <div className="min-h-screen">
            <CovidBanner />
            <Hero />
            <ExploreNearby />
            <LiveAnywhere />
            <BecomeAHost />
            <DiscoverExperiences />
            <Footer />
            <CookieBanner />
        </div>
    )
}

export default App
