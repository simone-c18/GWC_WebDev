"use client";

import './join.css';

export default function joinPage() {
    return (
        <div className="font-alexandria mt-8 flex flex-col">
            {/* Steps Header */}
            <div className="">
            <div className="text-deep-blue font-bold text-5xl">ready to become a member?</div>
            <div className="font-normal text-base">follow the steps below to become an official member of
            ucf’s girls who code! no dues are needed :)</div>
            </div>
             {/* CollegeLoop Steps */}
            <div className="text-deep-blue font-bold text-5xl">→ joining our college loop</div>
            <div className="font-normal text-2xl">
                <div>1. go to <a href="https://hq.girlswhocode.com/" className="underline">https://hq.girlswhocode.com/</a></div>
                <div>2. click ‘college & careers’</div>
                <div>3. create or sign in to your account</div>
                <div>4. under the page ‘my programs’, click ‘join new’</div>
                <div>5. enter our loop code: CL65361</div>
                <div>6. fill out your information, and you’re done!</div>
            </div>
            {/* KnightConnect Steps */}
            <div className="text-deep-blue font-bold text-5xl">→ joining us on knightsconnect</div>
            <div className="font-normal text-2xl">
                <div>1. go to <a href="https://knightconnect.campuslabs.com/engage/organizations" className="underline">https://knightconnect.campuslabs.com/engage/organizations</a></div>
                <div>2. sign into your ucf account</div>
                <div>3. in the search bar, type ‘girls who code’</div>
                <div>4. click join</div>
            </div>
        </div>
    );
}