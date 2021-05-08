import React from "react"
import { CovidBanner } from "./components/CovidBanner"
import { ExploreNearby } from "./components/ExploreNearby"
import { Hero } from "./components/Hero"
import { LiveAnywhere } from "./components/LiveAnywhere"

function App() {
    return (
        <div className="min-h-screen">
            <CovidBanner />
            <Hero />
            <ExploreNearby />
            <LiveAnywhere />
        </div>
    )
}

export default App
