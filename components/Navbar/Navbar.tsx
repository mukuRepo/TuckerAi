import Link from 'next/link';
import { Button } from '../ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 z-10 w-full p-4 text-black bg-white bg-opacity-30">
      <div className="container flex items-center justify-between mx-auto font-semibold">
        <Link href="/">
          <p className="text-xl font-bold">Tucker Ai</p>
        </Link>
        <div className="flex flex-row items-center justify-center space-x-4">
          <Link href="/home">
            <p className='hover:underline'>Home</p>
          </Link>
          <Link href="/about">
          <p className='hover:underline'>About</p>
          </Link>
          <Link href="/solutions">
          <p className='hover:underline'>Solutions</p>
          </Link>
          <Link href="/career">
          <p className='hover:underline'>Career</p>
          </Link>
          <Button className='hover:bg-blue-500'>Contact Us</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
