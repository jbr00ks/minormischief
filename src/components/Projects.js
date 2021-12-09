import { CodeIcon } from "@heroicons/react/solid";
import React from 'react';

export default function Projects() {
	return(
        <section id="projects" className="text-white bg-yellow-700 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Some of our projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Coming soon!
                    </p>
                </div>
            </div>
        </section>
	);
}