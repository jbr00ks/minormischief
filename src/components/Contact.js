import { PlayIcon, AtSymbolIcon } from "@heroicons/react/solid";

import React from 'react';

export default function Contact() {
	return (
		<section id="contact" className="relative bg-yellow-700">
			<div className="container px-5 py-10 mx-auto justify-center">
				<div className="bg-yellow-500 relative flex flex-wrap py-6 w-full rounded shadow-md">
					<div className="w-full">
						<h2 className="text-center title-font font-semibold text-white tracking-widest text-s">
							WHERE TO FIND US
						</h2>
						<div className="flex flex-wrap content-center justify-center">
							<div>
								<a href="https://www.youtube.com/channel/UC63cTSZzKvMzuzFVTxqcGPg" title="YouTube">
									<PlayIcon className="w-20 mt-2 mb-2" />
								</a>
							</div>
							<div>
								<a href="https://github.com/jbr00ks" title="GitHub">
									<img className="w-16 m-4" alt="GitHub" src="./github.png"/>
								</a>
							</div>
							<div>
								<a href="http://linkedin.com/in/joshua-brooks-09214219b" title="LinkedIn">
									<img className="w-16 m-4" alt="LinkedIn" src="./linkedin.png"/>
								</a>
							</div>
							<div>
								<a href="mailto: jdbrooks0516@gmail.com" title="Email">
									<AtSymbolIcon className="w-20 mt-2 mb-2" />
								</a>
							</div>
							<div>
								<a href="https://discord.com/channels/jbr00ks" title="Discord">
									<img className="w-16 m-4" alt="Discord" src="./discord.png"/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}