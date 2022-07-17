import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.scss';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import MyProjects from './Components/MyProjects/MyProjects';
import MySkills from './Components/MySkills/MySkills';
import Navbar from './Components/Navbar/Navbar';
function App() {
	const [homeRef, setHomeRef] = useState<HTMLDivElement | null>(null);
	const [projectsRef, setProjectsRef] = useState<HTMLDivElement | null>(null);
	const [contactRef, setContactRef] = useState<HTMLDivElement | null>(null);
	return (
		<div className='container'>
			<Toaster />
			<Navbar
				contactRef={contactRef}
				homeRef={homeRef}
				projectsRef={projectsRef}
			/>
			<Home setHomeRef={setHomeRef} />
			<MySkills />
			<MyProjects setProjectsRef={setProjectsRef} />
			<Contact setContactRef={setContactRef} />
			<Footer />
		</div>
	);
}

export default App;
