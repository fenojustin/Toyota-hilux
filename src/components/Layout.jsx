// src/components/Layout.jsx
import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-black text-gray-900">
            {/* Conteneur responsive */}
            <div className="w-full left-0 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Contenu injecté par la page */}
                {children}
            </div>
        </div>
    )
}

export default Layout
