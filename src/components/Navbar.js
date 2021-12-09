import { ChatIcon } from "@heroicons/react/solid";
import React from 'react';

export default function Navbar() {
	return(
		<header className="bg-yellow-600 md:sticky top-0 z-10">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Minor Mischief
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-yellow-500	flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 text-white hover:text-gray-300">
                        Projects
                    </a>
                    <a href="#about" className="mr-5 text-white hover:text-gray-300">
                        About
                    </a>
                </nav>
                <a href="#contact" className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-400 rounded text-white text-base mt-4 md:mt-0">
                    Contact Us
                    <ChatIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
	);
}