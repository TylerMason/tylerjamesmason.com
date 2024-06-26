// pages/map/index.tsx
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically import the MapComponent to avoid SSR issues
const MapComponent = dynamic(() => import('./components/MapComponent'), { ssr: false });

const MapPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Interactive Map</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Interactive Map</h1>
        <MapComponent />
      </main>
    </div>
  );
};

export default MapPage;
