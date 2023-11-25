import Link from 'next/link';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MdMenu } from "react-icons/md";


const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 z-10 w-full p-4 text-black bg-white bg-opacity-30">
      <div className="container flex items-center justify-between mx-auto font-semibold">
        <Link href="/">
          <p className="text-lg font-bold rounded-xl sm:text-xl">Tucker&nbsp;Ai</p>
        </Link>
        <div className="flex flex-row items-center justify-center space-x-4">
          <div className='hidden space-x-4 sm:flex sm:flex-row sm:justify-center sm:items-center '>
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
          <Button className='hover:bg-blue-500'>Contact</Button>
          </div>
        <div className='block sm:hidden'>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="font-bold text-white bg-gray-800"><MdMenu/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
          <Link href="/home">
            <p className='hover:underline'>Home</p>
          </Link>
            <DropdownMenuShortcut>⇧⌘H</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Link href="/about">
          <p className='hover:underline'>About</p>
          </Link>
            <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Link href="/solutions">
          <p className='hover:underline'>Solutions</p>
          </Link>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Link href="/career">
          <p className='hover:underline'>Career</p>
          </Link>
            <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <div className='flex justify-center w-full mt-2'>
        <Button className='hover:bg-blue-500'>Contact Us</Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
    </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
