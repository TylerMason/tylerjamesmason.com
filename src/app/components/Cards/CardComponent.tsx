import Link from 'next/link';

interface CardProps {
  title: string;
  imageUrl: string;
  href: string;
}

const CardComponent: React.FC<CardProps> = ({ title, imageUrl, href }) => {
    return (
      <Link href={href}>
        <div className="w-[14em] h-[10em] overflow-hidden rounded shadow-xl bg-white hover:bg-gray-100 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-1">
          {/* Enhanced shadow in normal and hover states */}
          <div className="h-[8em] overflow-hidden">
              <img className="w-full h-full object-cover" src={imageUrl} alt="Card" />
          </div>
          <div>
            <div className="font-bold text-lg text-black text-center">{title}</div>
          </div>
        </div>
      </Link>
    );
};

export default CardComponent;
