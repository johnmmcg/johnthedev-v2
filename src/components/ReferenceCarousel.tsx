
import React, { useState } from 'react';
import { useWindowSize } from '../hooks';
import './Thing.css';

const REFS = [ 
    {   
        name: "Emma Bostian",
        image_url: "https://media.licdn.com/dms/image/C4D03AQEvPrBvNujANA/profile-displayphoto-shrink_100_100/0/1603366792796?e=1680134400&v=beta&t=IvR5XqgqrKDiVP6PvjyaxsJdXTua0SQT0e3NpOI7p1Q",
        role: 'Engineering Manager',
        company: "Spotify",
        text: "I don't have enough kind words to describe John... He was always willing to jump into difficult tasks. And he made everyone feel welcomed and included...Any company would be lucky to have John. I hope we can work together in the future.",
        url: "https://www.linkedin.com/in/emmabostian/"
    },
    {   
        name: "Rob Sliwa",
        image_url: "https://media.licdn.com/dms/image/C5103AQH5XHsE_xT0Pg/profile-displayphoto-shrink_100_100/0/1516349636068?e=1680134400&v=beta&t=-lDFPKR5rLtYIXYq1RlfvsvYT3P_YNBCxk3NM3G-5DI",
        role: "Senior Systems Engineer",
        company: "Somos & Comcast",
        text: "John is one of the most creative front-end developers I ever worked with. When faced with the need to learn new technologies, he never hesitated and was very quick in getting himself up to speed...  He is able to motivate teams, and everyone wants to work with him.",
        url: "https://www.linkedin.com/in/rob-sliwa-5609b01/"
    },
    {   
        name: "Danielle Nourok",
        image_url: "https://media.licdn.com/dms/image/C4E03AQEMSZRFhyJdIQ/profile-displayphoto-shrink_100_100/0/1517533808518?e=1680134400&v=beta&t=zHKzkVtIvu9cxi6t1wvZdOfy0uj5eBxY0iHbu9JBDfE",
        role: "Engineering Manager",
        company: "Spotify & Disney",
        text: "John is an example of a team player. He is an excellent communicator, supportive to his teammates and a very positive person. He is a problem solver and excels at breaking down technical requirements, working cross team and debugging tough problems.",
        url: "https://www.linkedin.com/in/dnourok/"
    },
    {   
        name: "Steven Bruno",
        image_url: "https://media.licdn.com/dms/image/C4E03AQFImHjy3QRtHA/profile-displayphoto-shrink_100_100/0/1638245525010?e=1680134400&v=beta&t=SXfuIFDxB30yH4g3o__0931X0nkMPvTtjI1WGnJDEj0",
        role: 'Product Designer',
        company: "Spotify",
        text: "[John] is knowledgeable, efficient, and cares deeply about quality engineering. I really enjoyed working alongside John - any team would be lucky to have him as a teammate.",
        url: "https://www.linkedin.com/in/stevenjbruno/"
    },
    {   
        name: "Steven 'Mac' McKeon",
        image_url: "https://media.licdn.com/dms/image/C4E03AQFoIRt_1knqwQ/profile-displayphoto-shrink_100_100/0/1604251048311?e=1680134400&v=beta&t=Typ8Ano26db2CLdDaAWr3m383SqvA6cbZdeRTswwaOE",
        role: "CEO",
        company: "MacGuyverTech",
        text: "[John] was routinely throughout that time the most creative and capable web developer we had. His coding was excellent and his designs were unique and innovative, so clients were always happy. He was always thoughtful and considerate, an excellent team player...",
        url: "https://www.linkedin.com/in/stevenpmckeon/"
    },
    {   
        name: "Brian Isely",
        image_url: "https://media.licdn.com/dms/image/C4E03AQFIZOJbydZZug/profile-displayphoto-shrink_100_100/0/1614623125118?e=1680134400&v=beta&t=f7dt4mg6MK55290jXv3o-0vXOzf39jdLILAdrC9pEMU",
        role: "Executive VP",
        company: "Center City Film & Video",
        text: "[John] is always on time, focused, courteous, extremely intelligent, humble and hard working. I give John my highest recommendation and am certain he will be an asset to any organization that is lucky enough to employ him.",
        url: "https://www.linkedin.com/in/brianisely/"
    },
];

const Reference = ({item}) => {
    const { isSmallScreen } = useWindowSize();

    return (
        <div className="flex flex-1 flex-col gap-5 justify-start" style={{ width: isSmallScreen ? '100%' : 'auto', minHeight: isSmallScreen ? '200px' : '250px' }}>
            <a href={item.url} target="_blank" className="flex flex-row gap-2 items-center hover:underline">
                <img className="rounded-full w-auto" style={{ height: '60px' }} src={item.image_url} alt={`LinkedIn Profile Image of ${item.name}`} />
                <p className="flex flex-col justify-center items-start text-left text-sm sm:text-base">
                    <b>{item.name}</b>
                    <span className="text-xs">{item.role} at {item.company}</span>
                </p>
            </a>
            <p className="text-left italic text-sm sm:text-base">
                "{item.text}"
            </p>
        </div>
    )
}

const ReferenceCarousel = ({ items = REFS }) => {
    const [displayedItems, setDisplayedItems] = useState(items);
    const { isSmallScreen } = useWindowSize()

    const handlePreviousClick = () => {
        let newDisplayedItems = [...displayedItems];
        newDisplayedItems.unshift(newDisplayedItems.pop());
        setDisplayedItems(newDisplayedItems);
    }

    const handleNextClick = () => {
        let newDisplayedItems = [...displayedItems];
        newDisplayedItems.push(newDisplayedItems.shift());
        setDisplayedItems(newDisplayedItems);
    }

    return (
        <div className="flex flex-row center justify-center w-full gap-5">
            <button onClick={handlePreviousClick} className="scale-1 transition hover:scale-125">←</button>
            <div className="flex flex-row justify-center center gap-5">
                {displayedItems.slice(0,2).map((item, idx) => {
                    if ((idx === 1) && isSmallScreen) {
                        return;
                    } else {
                        return <Reference item={item} key={idx} />;
                    }
                })
            }
            </div>
            <button onClick={handleNextClick} className="scale-1 transition hover:scale-125">→</button>
        </div>
    );
}
    
export default ReferenceCarousel;