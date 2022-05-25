import React from 'react'

const Figure = ({wrongLetters}) => {
    const mistakes = wrongLetters.length;
    return (
        <svg width = "200" height = "250" className = "figure">
            <line x1="60" y1="20" x2="140" y2="20" />
            <line x1="140" y1="20" x2="140" y2="50" />
            <line x1="60" y1="20" x2="60" y2="230" />
            <line x1="20" y1="230" x2="100" y2="230" />

            {/* head */}
            {mistakes > 0 && <circle cx="140" cy="70" r="20"/>}

            {/* torso */}
            {mistakes > 1 && <line x1="140" y1="90" x2="140" y2="150"/>}

            {/* arms */}
            {mistakes > 2 && <line x1="140" y1="100" x2="120" y2="140"/>}
            {mistakes > 3 && <line x1="140" y1="100" x2="160" y2="140"/>}

            {/* legs */}
            {mistakes > 4 && <line x1="140" y1="150" x2="120" y2="180"/>}
            {mistakes > 5 && <line x1="140" y1="150" x2="160" y2="180"/>}
        </svg>
    )
}

export default Figure