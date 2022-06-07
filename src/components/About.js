import { InformationCircleIcon } from "@heroicons/react/solid";
import React from 'react';

export default function About() {
	return (
		<section id="about">
			<div className="container px-5 py-10 mx-auto text-center lg:px-40">
				<div className="flex flex-col w-full mb-20">
				<InformationCircleIcon className="mx-auto inline-block w-10 mb-4" />
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
						About Us
						<br className="hidden lg:inline-block" />
					</h1>
					<p className="mb-8 leading-relaxed">
						Bearly Built is a development organization under which I, Josh Brooks, work on projects in my free time. I have taken up several small projects ranging from mobile applciations to virtual reality games.
					</p>
					<h2 className="sm:text-2xl text-1xl mb-4 font-medium text-white">
						About Josh
						<br className="hidden lg:inline-block" />
					</h2>
					<div className="flex justify-center">
						<img
							className="w-1/4 object-contain object-center rounded"
							alt="portrait"
							src="./portrait.JPG"
						/>
					</div>
					<p className="mb-8 leading-relaxed">
						<br className="hidden lg:inline-block" />
						I am a full-time software engineer for a major insurance company. I graduated from the University of Missouri - Columbia in 2019 with a B.S. of Computer Science. In my free time I like to work on personal coding projects, play guitar, hunt, fish, hike, or just hangout with my wife and pets. I also really enjoy biking or wrenching on cars.
					</p>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
				</div>
			</div>
		</section>
	);
}