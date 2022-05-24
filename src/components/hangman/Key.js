import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

const Key = ({phrase, alphabet, correctLetters, setCorrectLetters, wrongLetters, setWrongLetters}) => {
    const [disabled, setDisabled] = useState(false)

    const handleOnclick = () => {
        setDisabled(true)
        const letter = alphabet.toLowerCase()
        if (phrase.toLowerCase().includes(letter)){
            if (!correctLetters.includes(letter)){
                setCorrectLetters(currentLetters => [...currentLetters, letter, letter.toUpperCase()])
            }
        }
        else{
            if (!wrongLetters.includes(letter)){
                setWrongLetters(currentLetters => [...currentLetters, letter])
            }
        }
    }

    useEffect(() => {
        const handleKeydown = event => {
            const {key} = event
            if (key.toLowerCase()===alphabet.toLowerCase()){
                handleOnclick()
            }
        }

        window.addEventListener("keydown", handleKeydown)
        return () => window.removeEventListener("keydown", handleKeydown)
    }, [correctLetters, wrongLetters])

    return (
        <Button className="keyboard-key" variant="secondary"  disabled={disabled} onClick={handleOnclick}>
            {alphabet.toUpperCase()}
        </Button>
    );
}

export default Key