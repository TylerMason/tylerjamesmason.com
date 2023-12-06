import Image from 'next/image';
import CardComponent from './components/Cards/CardComponent';

// Placeholder data for the cards
const cardData = [
  { title: "Card 1", imageUrl: "/path-to-image1.jpg", href: "/page1" },
  { title: "Card 2", imageUrl: "/path-to-image2.jpg", href: "/page2" },
  { title: "Card 3", imageUrl: "/path-to-image3.jpg", href: "/page3" },
  { title: "Card 4", imageUrl: "/path-to-image4.jpg", href: "/page4" },
  { title: "Card 5", imageUrl: "/path-to-image5.jpg", href: "/page5" },
  { title: "Card 6", imageUrl: "/path-to-image6.jpg", href: "/page6" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" sm:mt-32 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static h-auto lg:w-auto lg:bg-none">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
