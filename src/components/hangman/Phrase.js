import React from 'react'

const Phrase = ({phrase, correctLetters}) => {
    const alphabets='abcdefghijklmnopqrstuvwxyz'
    return (
        <div className="phrase">
            {
                phrase.split(" ").map((word, i) => {
                    return(
                        <span className="word">
                            {
                                word.split("").map((letter, j) => {
                                    return(
                                        alphabets.includes(letter) || alphabets.toUpperCase().includes(letter) ? (
                                            <span className="letter" key={i+","+j}>
                                                {correctLetters.includes(letter) ? letter : ""}
                                            </span>
                                        ) : (
                                            <span className="space" key={i+","+j}>{letter}</span>
                                        )
                                    )
                                })
                            }
                        </span>
                    )
                })
            }
        </div>
    )
}

export default Phrase