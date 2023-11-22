import Link from 'next/link';
import { Button } from '../ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 z-10 w-full p-4 text-black bg-white">
      <div className="container flex items-center justify-between mx-auto font-semibold">
        <Link href="/">
          <p className="text-xl font-bold">Tucker Ai</p>
        </Link>
        <div className="flex flex-row items-center justify-center space-x-4">
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/about">
            <p>About</p>
          </Link>
          <Link href="/solutions">
            <p>Solutions</p>
          </Link>
          <Link href="/career">
            <p>Career</p>
          </Link>
          <Button>Contact Us</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
