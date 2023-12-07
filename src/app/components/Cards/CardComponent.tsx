import Link from 'next/link';

interface CardProps {
  title: string;
  imageUrl: string;
  href: string;
}

const CardComponent: React.FC<CardProps> = ({ title, imageUrl, href }) => {
    return (
      <Link href={href}>
        <div className="w-[14em] h-[10em] overflow-hidden rounded shadow-lg bg-white hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
          <div className="h-[8em] overflow-hidden"> {/* Set the height to half of the card */}
              <img className="w-full h-full object-cover" src={imageUrl} alt="Card" />
          </div>
          <div className="p-4">
            <div className="font-bold text-xl mb-2">{title}</div>
          </div>
        </div>
      </Link>
    );
  };
  
  export default CardComponent;
  
