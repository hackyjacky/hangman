import React from 'react'
import Key from './Key'

const Keyboard = ({phrase, correctLetters, setCorrectLetters, wrongLetters, setWrongLetters}) => {
    return (
        <div className="keyboard ">
            <div className="d-flex align-items-center justify-content-center gap-2 my-2">
                {["a","b","c","d","e","f","g","h","i"].map((alphabet,index)=>{
                    return <Key key={alphabet} phrase={phrase} alphabet={alphabet} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters} />
                })}
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2 my-2">
                {["j","k","l","m","n","o","p","q","r"].map((alphabet,index)=>{
                    return <Key key={alphabet} phrase={phrase} alphabet={alphabet} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters} />
                })}
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2 my-2">
                {["s","t","u","v","w","x","y","z"].map((alphabet,index)=>{
                    return <Key key={alphabet} phrase={phrase} alphabet={alphabet} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters} />
                })}
            </div>
        </div>
    )
}

export default Keyboard