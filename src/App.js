import './App.css';
import Category from './components/categories/Category';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
	const [category, setCategory] = useState('');
	const [keywords, setKeywords] = useState([]);
	const [status, setStatus] = useState('choose category');

	return (
		<div>
			{status === 'choose category' ? (
				<Category
					setCategory={setCategory}
					setKeywords={setKeywords}
					setStatus={setStatus}
				/>
			) : (
				<></>
			)}
		</div>
	);
}

export default App;
