import Image from 'next/image';
import CardComponent from './components/Cards/CardComponent';

// Placeholder data for the cards
const cardData = [
  { title: "Card 1", imageUrl: "/images/bluenight.gif", href: "/project1" },
  { title: "Card 2", imageUrl: "/images/collosus.gif", href: "/project2" },
  { title: "Card 3", imageUrl: "/images/greendeath.gif", href: "/project3" },
  { title: "Card 4", imageUrl: "/images/orangeresting.gif", href: "/project4" },
  { title: "Card 5", imageUrl: "/images/redwasteland.gif", href: "/project5" },
  { title: "Card 6", imageUrl: "/images/samuraigraveyard.gif", href: "/project6" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" sm:mt-32 flex  items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black   lg:bg-none">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Map over the card data to render each card */}
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
  );
}
