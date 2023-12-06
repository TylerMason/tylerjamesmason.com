import Link from 'next/link';

interface CardProps {
  title: string;
  imageUrl: string;
  href: string;
}

const CardComponent: React.FC<CardProps> = ({ title, imageUrl, href }) => {
  return (
    <Link href={href}>
      <div className="aspect-w-5 aspect-h-3 overflow-hidden rounded shadow-lg bg-white hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
        <img className="object-cover" src={imageUrl} alt="Card" />
        <div className="p-4">
          <div className="font-bold text-xl mb-2">{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default CardComponent;
