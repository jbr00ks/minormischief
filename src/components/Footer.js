import { PlayIcon, AtSymbolIcon } from "@heroicons/react/solid";

import React from 'react';

export default function Footer() {
	return (
		<section id="footer" className="relative bg-yellow-700">
			<div className="container px-5 py-10 mx-auto justify-center">
				<p className="text-xs">
					Copyright &copy; 2022 Bearly Built
				</p>
			</div>
		</section>
	);
}