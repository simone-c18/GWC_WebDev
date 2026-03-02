"use client";

import './join.css';

export default function joinPage() {
    return (
        <div className="font-alexandria mt-8 flex flex-col break-words justify-center items-center">
            {/* Steps Header */}
            <div className="flex flex-col items-center text-center">
                <div className="text-deep-blue font-bold text-3xl sm:text-5xl">ready to become a member?</div>
                <div className="font-normal sm:text-base mt-4 text-xs">
                    <div>follow the steps below to become an official member of </div>
                    <div>ucf’s girls who code! no dues are needed :)</div>
                </div>
            </div>
             {/* CollegeLoop Steps */}
            <div className="flex flex-col mx-2 md:ml-4">
                <div className="md:flex text-deep-blue font-bold text-left text-3xl sm:text-5xl mt-5 sm:mt-10">
                    <div className="whitespace-pre-wrap">→ joining our </div>
                    <div>college loop</div>
                </div>
                
                <div className="font-normal sm:text-2xl  mt-1 sm:mt-4">
                    <div>1. go to <a href="https://hq.girlswhocode.com/" className="underline">https://hq.girlswhocode.com/</a></div>
                    <div>2. click ‘college & careers’</div>
                    <div>3. create or sign in to your account</div>
                    <div>4. under the page ‘my programs’, click ‘join new’</div>
                    <div>5. enter our loop code: CL65361</div>
                    <div>6. fill out your information, and you’re done!</div>
                </div>
                {/* KnightConnect Steps */}
                <div className="text-deep-blue font-bold text-3xl sm:text-5xl mt-5 sm:mt-10">→ joining us on knightsconnect</div>
                <div className="font-normal sm:text-2xl mt-1 sm:mt-4">
                    <p>1. go to <a href="https://knightconnect.campuslabs.com/engage/organizations" className="underline">https://<wbr />knightconnect.campuslabs.com/<wbr />engage/organizations</a></p>
                    <div>2. sign into your ucf account</div>
                    <div>3. in the search bar, type ‘girls who code’</div>
                    <div>4. click join</div>
                </div>
            </div>
        </div>
    );
}