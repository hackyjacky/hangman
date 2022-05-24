import './App.css';
import Category from './components/categories/Category';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Hangman from './components/hangman/Hangman';

function App() {
	const [category, setCategory] = useState('');
	const [keywords, setKeywords] = useState([]);
	const [status, setStatus] = useState('choose category');

	return (
		<div>
			<h1>Hangman</h1>
			{status === 'choose category' ? (
				<Category
					setCategory={setCategory}
					setKeywords={setKeywords}
					setStatus={setStatus}
				/>
			) : (
				<Hangman phrase={keywords[Math.floor(Math.random()*keywords.length)]} category={category}/>
			)}
		</div>
	);
}

export default App;
