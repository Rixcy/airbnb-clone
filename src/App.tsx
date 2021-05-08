import React from "react"
import { CovidBanner } from "./components/CovidBanner"
import { Hero } from "./components/Hero"

function App() {
    return (
        <div className="min-h-screen">
            <CovidBanner />
            <Hero />
        </div>
    )
}

export default App
