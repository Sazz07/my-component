"use client"

import ProgressBar from "./ProgressBar";

export default function Navbar() {
    return (
        <div className="sticky top-0 z-50">
            {/* Your Navbar content */}
            <nav className="bg-gray-800 text-white p-4">
                <div className="flex justify-between items-center">
                    <h1>Navbar</h1>
                    <ul className="flex gap-2">
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </nav>
            <ProgressBar />
        </div>
    )
}
