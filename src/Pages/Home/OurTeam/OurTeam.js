import React from 'react';
import mominul from '../../../Media/OurTeam/captainDon.jpg'
import people1 from '../../../Media/OurTeam/people1.png'
import people2 from '../../../Media/OurTeam/people2.png'
import people3 from '../../../Media/OurTeam/people3.png'
import people4 from '../../../Media/OurTeam/people4.jpg'

const OurTeam = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-sky-500 underline underline-offset-4">Our Team</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                </div>
                <div class="flex flex-wrap -m-2">
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 ring-2" src={mominul}/>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Holden Caulfield</h2>
                                    <p class="text-gray-500">UI Designer</p>
                                </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg"> 
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 ring-2" src={people1}/>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Henry Letham</h2>
                                    <p class="text-gray-500">CTO</p>
                                </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 ring-2" src={people2}/>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Oskar Blinde</h2>
                                    <p class="text-gray-500">Founder</p>
                                </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 ring-2" src={people3}/>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">John Doe</h2>
                                    <p class="text-gray-500">DevOps</p>
                                </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 ring-2" src={people4}/>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Martin Eden</h2>
                                    <p class="text-gray-500">Software Engineer</p>
                                </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 ring-2" src={people4}/>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Boris Kitua</h2>
                                    <p class="text-gray-500">UX Researcher</p>
                                </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 ring-2" src={people4}/>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Atticus Finch</h2>
                                    <p class="text-gray-500">QA Engineer</p>
                                </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 ring-2" src={people4}/>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Alper Kamu</h2>
                                    <p class="text-gray-500">System</p>
                                </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 ring-2" src={people4}/>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
                                    <p class="text-gray-500">Product Manager</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;