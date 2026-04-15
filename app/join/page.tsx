"use client";

import './join.css';

export default function joinPage() {
    return (
        <div className="">
            <div className="font-alexandria pt-20 md:pt-28 flex flex-col break-words justify-center items-center pb-20">
                {/* Steps Header */}
                <div className="flex flex-col items-center text-center">
                    <div className="text-gwc-darkblue font-bold text-xl sm:text-5xl pt-8 mt-10">ready to become a member?</div>
                    <div className="font-normal sm:text-base mt-4 text-xs">
                        <div>follow the steps below to become an official member of </div>
                        <div>ucf’s girls who code! no dues are needed :)</div>
                    </div>
                </div>
                {/* CollegeLoop Steps */}
                <div className="flex flex-col mx-2 md:ml-4">
                    <div className="md:flex text-gwc-darkblue font-bold text-left text-3xl sm:text-5xl mt-5 sm:mt-10">
                        <div className="whitespace-pre-wrap">→ join our </div>
                        <div>college loop</div>
                    </div>
                    
                    <div className="font-normal sm:text-xl  mt-1 sm:mt-4">
                        <div className="flex whitespace-pre-wrap mt-4 align-center flex-wrap"><div>1. Go to the   </div><a href="https://hq.girlswhocode.com/" target="_blank"><button type="button" className="bg-buttonBlue text-gwc-darkblue font-bold rounded-md border-3 border-gwc-darkblue py-1 px-4 justify-center align-center text-md sm:text-xl md:text-2xl lg:txt-3xl -mt-2 md:-mt-2">Girls Who Code HQ</button></a><div>   website</div></div>
                        <div className="flex whitespace-pre-wrap mt-2 md:mt-4">2. click<div className="font-bold text-gwc-darkblue"> ‘college & careers’</div></div>
                        <div className="flex whitespace-pre-wrap">3. <span className="text-gwc-darkblue font-bold">create</span> or <span className="text-gwc-darkblue font-bold">sign in</span> to your account</div>
                        <div><span className="whitespace-pre-wrap">4. under the page <span className="text-gwc-darkblue font-bold">‘my programs’</span>, click <span className="text-gwc-darkblue font-bold">‘join new’</span></span></div>
                        <div className="flex whitespace-pre-wrap">5. enter our loop code: <span className="text-gwc-darkblue font-bold">CL65361</span></div>
                        <div>6. fill out your information, and you’re done!</div>
                    </div>
                    {/* KnightConnect Steps */}
                    <div className="text-gwc-darkblue font-bold text-3xl sm:text-5xl mt-5 sm:mt-10">→ join us on knightconnect</div>
                    <div className="font-normal sm:text-2xl mt-1 sm:mt-4">
                        <p className="flex whitespace-pre-wrap mt-4 align-center flex-wrap">1. Go to   <a href="https://knightconnect.campuslabs.com/engage/organizations" target="_blank"><button type="button" className="bg-buttonBlue text-gwc-darkblue font-bold rounded-md border-3 border-gwc-darkblue py-1 px-4 justify-center align-center text-md sm:text-xl md:text-2xl lg:txt-3xl -mt-2 md:-mt-2">KnightConnect</button></a></p>
                        <div className="flex whitespace-pre-wrap mt-2 md:mt-4">2. <span className="text-gwc-darkblue font-bold">sign in</span> to your ucf account</div>
                        <div className="flex whitespace-pre-wrap">3. in the search bar, <span className="text-gwc-darkblue font-bold">type ‘girls who code’</span></div>
                        <div className="flex whitespace-pre-wrap">4. <span className="text-gwc-darkblue font-bold">click join</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}