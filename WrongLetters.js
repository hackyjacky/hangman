import React from 'react'

const WrongLetters = ({wrongLetters}) => {
    return (
        <div>Wrong Letters: 
            {
                wrongLetters
                .map((letter, index) => <span key = {index}>{letter}</span>)
                .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)
            }
        </div>
    )
}

export default WrongLetters