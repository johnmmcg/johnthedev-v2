import React, { useRef, useState } from 'react';
import './Thing.css';
import './ReferenceCarousel.css';

const REFS = [
  {
    name: "Steven 'Mac' McKeon",
    image_url:
      'https://media.licdn.com/dms/image/C4E03AQFoIRt_1knqwQ/profile-displayphoto-shrink_100_100/0/1604251048311?e=1680134400&v=beta&t=Typ8Ano26db2CLdDaAWr3m383SqvA6cbZdeRTswwaOE',
    role: 'CEO',
    company: 'MacGuyverTech',
    text: '[John] was routinely throughout that time the most creative and capable web developer we had. His coding was excellent and his designs were unique and innovative, so clients were always happy. He was always thoughtful and considerate, an excellent team player...',
    url: 'https://www.linkedin.com/in/stevenpmckeon/',
  },
  {
    name: 'Emma Bostian',
    image_url:
      'https://media.licdn.com/dms/image/C4D03AQEvPrBvNujANA/profile-displayphoto-shrink_100_100/0/1603366792796?e=1680134400&v=beta&t=IvR5XqgqrKDiVP6PvjyaxsJdXTua0SQT0e3NpOI7p1Q',
    role: 'Engineering Manager',
    company: 'Spotify',
    text: "I don't have enough kind words to describe John... He was always willing to jump into difficult tasks. And he made everyone feel welcomed and included...Any company would be lucky to have John. I hope we can work together in the future.",
    url: 'https://www.linkedin.com/in/emmabostian/',
  },
  {
    name: 'Albetro Núñez Acosta',
    image_url:
      'https://media.licdn.com/dms/image/C4D03AQFBiVygBS5L4w/profile-displayphoto-shrink_100_100/0/1516823323464?e=1681948800&v=beta&t=CoQYjCBdKN2hGiFxJA9wEttZn8PUxsrLrxNXNpC-R_0',
    role: 'Senior Engineering Manager',
    company: 'Spotify',
    text: "John is a committed professional and a fantastic colleague. John was hired into a newly created team and soon stood out as someone who takes ownership, breaks down problems and gets work done. He's a pleasure to communicate with, and creates a greate team atmosphere.",
    url: 'https://www.linkedin.com/in/anunezacosta/',
  },
  {
    name: 'Rob Sliwa',
    image_url:
      'https://media.licdn.com/dms/image/C5103AQH5XHsE_xT0Pg/profile-displayphoto-shrink_100_100/0/1516349636068?e=1680134400&v=beta&t=-lDFPKR5rLtYIXYq1RlfvsvYT3P_YNBCxk3NM3G-5DI',
    role: 'Senior Systems Engineer',
    company: 'Somos & Comcast',
    text: 'John is one of the most creative front-end developers I ever worked with. When faced with the need to learn new technologies, he never hesitated and was very quick in getting himself up to speed...  He is able to motivate teams, and everyone wants to work with him.',
    url: 'https://www.linkedin.com/in/rob-sliwa-5609b01/',
  },
  {
    name: 'Danielle Nourok',
    image_url:
      'https://media.licdn.com/dms/image/C4E03AQEMSZRFhyJdIQ/profile-displayphoto-shrink_100_100/0/1517533808518?e=1680134400&v=beta&t=zHKzkVtIvu9cxi6t1wvZdOfy0uj5eBxY0iHbu9JBDfE',
    role: 'Engineering Manager',
    company: 'Spotify & Disney',
    text: 'John is an example of a team player. He is an excellent communicator, supportive to his teammates and a very positive person. He is a problem solver and excels at breaking down technical requirements, working cross team and debugging tough problems.',
    url: 'https://www.linkedin.com/in/dnourok/',
  },
  {
    name: 'Steven Bruno',
    image_url:
      'https://media.licdn.com/dms/image/C4E03AQFImHjy3QRtHA/profile-displayphoto-shrink_100_100/0/1638245525010?e=1680134400&v=beta&t=SXfuIFDxB30yH4g3o__0931X0nkMPvTtjI1WGnJDEj0',
    role: 'Product Designer',
    company: 'Spotify',
    text: '[John] was an exceptional teammate and engineering partner. He is knowledgeable, efficient, and cares deeply about quality engineering. I really enjoyed working alongside John - any team would be lucky to have him as a teammate.',
    url: 'https://www.linkedin.com/in/stevenjbruno/',
  },
  {
    name: 'Brian Isely',
    image_url:
      'https://media.licdn.com/dms/image/C4E03AQFIZOJbydZZug/profile-displayphoto-shrink_100_100/0/1614623125118?e=1680134400&v=beta&t=f7dt4mg6MK55290jXv3o-0vXOzf39jdLILAdrC9pEMU',
    role: 'Executive VP',
    company: 'Center City Film & Video',
    text: '[John] is always on time, focused, courteous, extremely intelligent, humble and hard working. I give John my highest recommendation and am certain he will be an asset to any organization that is lucky enough to employ him.',
    url: 'https://www.linkedin.com/in/brianisely/',
  },
];

const Reference = ({ item, idx }) => {
  return (
    <div
      className={`reference fade-in flex w-[350px] flex-col justify-start gap-3 p-4 pt-5 pb-0 sm:w-[300px] lg:p-2`}
    >
      <a
        href={item.url}
        target="_blank"
        className="flex flex-row items-center gap-2 hover:underline"
      >
        <img
          className="w-auto rounded-full"
          style={{ height: '60px' }}
          src={item.image_url}
          alt={`LinkedIn Profile Image of ${item.name}`}
        />
        <p className="flex flex-col items-start justify-center text-left text-xs">
          <b>{item.name}</b>
          <span className="text-xs">
            {item.role} at {item.company}
          </span>
        </p>
      </a>
      <p className="text-left text-sm italic">"{item.text}"</p>
    </div>
  );
};

const ReferenceCarousel = ({ items = REFS }) => {
  const [displayedItems, setDisplayedItems] = useState(items);
  const listRef = useRef<HTMLDivElement>(null);

  const handlePreviousClick = () => {
    let newDisplayedItems = [...displayedItems];
    newDisplayedItems.unshift(newDisplayedItems.pop());
    listRef.current.classList.add('slidePrevious');
    setTimeout(() => {
      setDisplayedItems(newDisplayedItems);
      listRef.current.classList.remove('slidePrevious');
    }, 1000);
  };

  const handleNextClick = () => {
    let newDisplayedItems = [...displayedItems];
    newDisplayedItems.push(newDisplayedItems.shift());
    listRef.current.classList.add('slideNext');
    setTimeout(() => {
      setDisplayedItems(newDisplayedItems);
      listRef.current.classList.remove('slideNext');
    }, 1000);
  };

  return (
    <section className="m-auto flex w-full max-w-4xl flex-col items-center justify-center md:mb-8">
      <main className="enter-from-bottom relative m-2 flex w-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-gray-100 text-center shadow-lg shadow-slate-900/50 dark:shadow-slate-700/50">
        <div
          id="listRowContainer"
          className="center relative flex h-[260px] w-full flex-row justify-center gap-6 overflow-hidden rounded-xl motion-safe:transition"
        >
          <div
            id="listRow"
            ref={listRef}
          >
            {displayedItems.slice(0, 5).map((item, idx) => {
              return (
                <Reference
                  item={item}
                  key={idx}
                  idx={idx}
                />
              );
            })}
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-center">
          <button
            onClick={handlePreviousClick}
            className="scale-1 z-10 flex-1 self-end rounded-bl-xl p-2 transition hover:bg-gray-300"
          >
            <p className="scale-1 transition hover:scale-125">←</p>
          </button>
          <button
            onClick={handleNextClick}
            className="scale-1 z-10 flex-1 self-end rounded-br-xl p-2 transition hover:bg-gray-300"
          >
            <p className="scale-1 transition hover:scale-125">→</p>
          </button>
        </div>
      </main>
    </section>
  );
};

export default ReferenceCarousel;
