import React from 'react'

const Phrase = ({phrase, correctLetters}) => {
    return (
        <div className="phrase">
            {
                phrase.split("").map((letter, index) => {
                    return(
                        letter===' ' ? (
                            <span className="space" key={index}></span>
                        ) : (
                            <span className="letter" key={index}>
                                {correctLetters.includes(letter) ? letter : ""}
                            </span>
                        )
                    )
                })
            }
        </div>
    )
}

export default Phrase