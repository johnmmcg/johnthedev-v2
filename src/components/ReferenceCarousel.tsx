import { useRef, useState } from 'react';
import Reference from './Reference';
import './Thing.css';
import './ReferenceCarousel.css';
import REFS from '../constants/references';

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
