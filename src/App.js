import React from 'react';
import About from './components/About.js'
import Contact from './components/Contact.js'
import Navbar from './components/Navbar.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'

export default function App() {
	return (
		<main className="text-white bg-yellow-500 body-font">
			<Navbar />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</main>
	);
}
