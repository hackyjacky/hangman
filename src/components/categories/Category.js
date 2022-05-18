import { useEffect, useState } from 'react';
import words from '../../shared/words.json';
import Word from './Word';

const Category = ({ setCategory, setKeywords, setStatus }) => {
	const changeCategory = (category, keywords) => {
		setCategory(category);
		setKeywords(keywords);
		setStatus('answer word');
	};

	const [categories, setCategories] = useState([]);

	useEffect(() => {
		let cats = words.categories.map((word) => word.type);
		setCategories(cats);
	}, []);

	return (
		<div className="d-flex vh-100 align-items-center justify-content-center gap-3">
			{categories.map((category) => {
				let keywords = words.categories.filter(
					(word) => word.type === category
				)[0].words;
				return (
					<Word
						word={category}
						key={category}
						setCategory={() => changeCategory(category, keywords)}
					/>
				);
			})}
		</div>
	);
};

export default Category;
