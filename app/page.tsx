import Footer from '@/components/Custom/Footer';
import { Navbar } from '@/components/Custom/Navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen w-full flex flex-col bg-white'>
      <Navbar />
      <main className='flex-grow flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-pink-50 to-white'>
        <h2 className='text-4xl font-bold text-gray-800 mb-6 text-center'>
          Plan Your Perfect Day
        </h2>
        <p className='text-xl text-gray-600 mb-8 text-center max-w-2xl'>
          Let us help you create the wedding of your dreams. From intimate
          gatherings to grand celebrations, {`we've`} got you covered.
        </p>
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          <Link href='/'>
            <Button variant='pink'>Plan your wedding</Button>
          </Link>
        </div>
        <div className='relative bg-pink-600 w-full max-w-3xl h-64 rounded-lg overflow-hidden'></div>
      </main>

      <Footer />
    </div>
  );
}
