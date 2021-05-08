import React from "react"
import { CovidBanner } from "./components/CovidBanner"
import { ExploreNearby } from "./components/ExploreNearby"
import { Hero } from "./components/Hero"

function App() {
    return (
        <div className="min-h-screen">
            <CovidBanner />
            <Hero />
            <ExploreNearby />
        </div>
    )
}

export default App
