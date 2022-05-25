import React, { useState }  from 'react'
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Phrase from './Phrase';
import Figure from './Figure';
import Keyboard from './Keyboard';


const Hangman = ({phrase, category}) => {
    // const [playable, setPlayable] = useState(true)
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    
    return (
        <>
            <h4 className="text-end">Category: <u>{category}</u></h4>
			
            <div className="game-container">
                <Phrase phrase={phrase} correctLetters={correctLetters}/>
                <Figure wrongLetters={wrongLetters}/>
            </div>

            <div>
                <Keyboard phrase={phrase} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters}/>
            </div>

            <div className="message-container"></div>
        </>
    )
}

export default Hangman