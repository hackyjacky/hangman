import React, { useState, useEffect }  from 'react'
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Phrase from './Phrase';
import Figure from './Figure';
import Keyboard from './Keyboard';
import Button from 'react-bootstrap/Button'
import axios from 'axios';


const Hangman = ({phrase, category, setPlayable, score}) => {
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
	const [show, setShow] = useState(false)
	function playAgain(){
        setPlayable(false)
    }
	const [message, setMessage] = useState('')

    useEffect(() => {
        let isSolved=true
        for (let i=0; i<phrase.length; i++){
            if (!correctLetters.includes(phrase[i]) && phrase[i]!==' ' && phrase[i]!=='-'){
                isSolved=false
                break
            }
        }
        if (wrongLetters.length===6){
            setMessage("Game Over")
            setShow(true)
        }
        else if (isSolved===true){
            setMessage('Game Completed!')
            axios.post("../../../model/AddScore.php", {
                score: new Date() - score
            })
            .catch(e => console.log(e))
            setShow(true)
        }
    }, [correctLetters, wrongLetters])
    
    return (
        <>
            <h4 className="text-end">Category: <u>{category}</u></h4>
			
            <div className="game-container">
                <Phrase phrase={phrase} correctLetters={correctLetters}/>
                <Figure wrongLetters={wrongLetters}/>
            </div>

            {show === false ? (
                <Keyboard phrase={phrase} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters}/>
            ) : (
                <div className="message-container">
                    <h4 className="mt-2">{message}</h4>
                    <p>The answer is <i><u>{phrase}</u></i>.</p>
                    <Button className="mb-2" variant="primary" onClick={playAgain}>Play again</Button>
                </div>
            )}
        </>
    )
}

export default Hangman