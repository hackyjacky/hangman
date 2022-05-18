import React from 'react';
import Button from 'react-bootstrap/Button';

const Word = ({ word, setCategory }) => {
	return (
		<Button variant="primary" onClick={setCategory}>
			{word}
		</Button>
	);
};

export default Word;
