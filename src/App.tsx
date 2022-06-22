import React, { useEffect } from 'react';
import './App.scss';

function App() {
	useEffect(() => {
		setTimeout(() => {
			window.location.replace('https://linktr.ee/vakharia_heet');
		}, 5000);
	}, []);
	return (
		<div className='container'>
			<p>Portfolio</p>
			<p className='comming-soon'>Comming Soon</p>
			<p>Page will be automatically redirect to Lintr.ee in 5s</p>
			<a href='https://linktr.ee/vakharia_heet'>My Projects(Linktree)</a>
		</div>
	);
}

export default App;
