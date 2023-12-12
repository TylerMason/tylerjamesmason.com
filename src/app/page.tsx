import Image from 'next/image';
import CardComponent from './components/Cards/CardComponent';
import Header from './components/Header/Header';
import cardData from '../../data/cardData';

export default function Home() {
  return (
    <>
      <Header title="Home"/>
      <main className="flex min-h-screen flex-col items-center bg-gray-700 justify-between p-24 relative">
        {/* Gradient circle with adjusted size, position, and z-index */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500 to-blue-300 opacity-75 z-0"></div>
        <div className="sm:mt-32 flex items-end justify-center bg-gradient-to-t from-white via-white dark:from-blue-500 dark:via-blue-500 lg:bg-none z-10">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {cardData.map((card, index) => (
              <CardComponent
                key={index}
                title={card.title}
                imageUrl={card.imageUrl}
                href={card.href}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}



