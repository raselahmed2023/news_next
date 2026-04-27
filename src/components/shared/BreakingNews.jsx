import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    { "id": 1, "headline": "Security breach at White House Correspondents' Dinner: Suspect Cole Allen arrested after shooting incident; Trump uninjured." },
    { "id": 2, "headline": "SpaceX successfully completes 50th Falcon 9 launch of 2026, deploying 25 Starlink satellites." },
    { "id": 3, "headline": "Aam Aadmi Party (AAP) seeks disqualification of 7 Rajya Sabha MPs who recently defected to BJP." },
    { "id": 4, "headline": "US-Iran peace negotiations stall as Strait of Hormuz blockade continues to affect global energy markets." },
    { "id": 5, "headline": "Chernobyl Anniversary: Zelenskyy warns of global man-made disaster risks amid ongoing regional conflict." },
    { "id": 6, "headline": "Palestinians cast votes in historic first elections since the Gaza war." },
    { "id": 7, "headline": "Sam Altman issues apology over ChatGPT account usage linked to recent British Columbia incident." }
]

const BreakingNews = () => {
    return (
      
        <div className='rounded-md flex justify-between gap-4 items-center bg-gray-300 container mx-auto py-2 '>
            
            <button className='m-2 btn bg-amber-900 text-white py-2  px-6'>
                Latest
            </button>
            
            <Marquee pauseOnHover speed={60} gradient={false}>
                {news.map(n => (
                    <div key={n.id} className="flex items-center">
                      
                        <span className='text-black font-medium mx-10'>
                            {n.headline}
                        </span>
                        <span className="text-xl">•</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default BreakingNews;