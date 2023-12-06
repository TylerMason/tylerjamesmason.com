import Image from 'next/image'
import CardComponent from './components/Cards/CardComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* Replace with your actual data */}
            <CardComponent title="Card 1" imageUrl="/path-to-image1.jpg" href="/page1" />
            <CardComponent title="Card 2" imageUrl="/path-to-image2.jpg" href="/page2" />
            {/* More cards as needed */}
          </div>
        </div>
        
      </div>

    </main>
  )
}