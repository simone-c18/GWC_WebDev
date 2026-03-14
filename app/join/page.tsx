"use client";

import './join.css';
import { useEffect } from "react"
import { createBackground } from "../lib/createBackground" 
import {useBackground} from "../lib/backgroundContext"

export default function joinPage() {
    
    const {setCircles} = useBackground(); 
    // add another set of brackets after x: and you can set sm: (size) md: (diff-size) etc.
    useEffect(() => { setCircles([
        {x: 10, y: 22},
        {x: 15, y: 98}
    ])
    }, [])

    return (
        <div>
            <div className="font-alexandria mt-28 flex flex-col break-words justify-center items-center">
                {/* Steps Header */}
                <div className="flex flex-col items-center text-center">
                    <div className="text-gwc-darkblue font-bold text-3xl sm:text-5xl">ready to become a member?</div>
                    <div className="font-normal sm:text-base mt-4 text-xs">
                        <div>follow the steps below to become an official member of </div>
                        <div>ucf’s girls who code! no dues are needed :)</div>
                    </div>
                </div>
                {/* CollegeLoop Steps */}
                <div className="flex flex-col mx-2 md:ml-4">
                    <div className="md:flex text-gwc-darkblue font-bold text-left text-3xl sm:text-5xl mt-5 sm:mt-10">
                        <div className="whitespace-pre-wrap">→ join us on </div>
                        <div>college loop</div>
                    </div>
                    
                    <div className="font-normal sm:text-2xl  mt-1 sm:mt-4">
                        <div>1. Go to the <a href="https://hq.girlswhocode.com/" target="_blank"><button type="button" className="bg-buttonBlue text-gwc-darkblue font-bold rounded-md border-3 border-gwc-darkblue py-1 px-4 justify-center align-center">Girls Who Code HQ</button></a> website</div>
                        <div className="flex whitespace-pre-wrap">2. click<div className="font-bold text-gwc-darkblue"> ‘college & careers’</div></div>
                        <div className="flex whitespace-pre-wrap">3. <span className="text-gwc-darkblue font-bold">create</span> or <span className="text-gwc-darkblue font-bold">sign in</span> to your account</div>
                        <div><span className="whitespace-pre-wrap">4. under the page <span className="text-gwc-darkblue font-bold">‘my programs’</span>, click <span className="text-gwc-darkblue font-bold">‘join new’</span></span></div>
                        <div className="flex whitespace-pre-wrap">5. enter our loop code: <span className="text-gwc-darkblue font-bold">CL65361</span></div>
                        <div>6. fill out your information, and you’re done!</div>
                    </div>
                    {/* KnightConnect Steps */}
                    <div className="text-gwc-darkblue font-bold text-3xl sm:text-5xl mt-5 sm:mt-10">→ join us on knightconnect</div>
                    <div className="font-normal sm:text-2xl mt-1 sm:mt-4">
                        <p>1. Go to <a href="https://knightconnect.campuslabs.com/engage/organizations" target="_blank"><button type="button" className="bg-buttonBlue text-gwc-darkblue font-bold rounded-md border-3 border-gwc-darkblue py-1 px-4">KnightConnect</button></a></p>
                        <div className="flex whitespace-pre-wrap">2. <span className="text-gwc-darkblue font-bold">sign in</span> to your ucf account</div>
                        <div className="flex whitespace-pre-wrap">3. in the search bar, <span className="text-gwc-darkblue font-bold">type ‘girls who code’</span></div>
                        <div className="flex whitespace-pre-wrap">4. <span className="text-gwc-darkblue font-bold">click join</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}