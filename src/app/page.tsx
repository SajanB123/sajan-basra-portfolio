import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import Card from '@/app/ui/card';
import ThemeSwitcher from "./ui/ThemeSwitcher.js";
import ScrollingIcons from './ui/scrolling-icons.jsx';

export default function Home() {
  return (
    <main className="min-h-screen">
        <div className="min-w-full flex flex-row pt-4 pl-6 pr-2 pb-4 dark:bg-gray-900 bg-gray-50 border-2 border-opacity-5 border-gray-600 absolute items-center dark:text-white">
          <ul className="flex flex-row space-x-8">
            <li><Link className="font-semibold hover:cursor-pointer dark:hover:text-gray-300 hover:text-gray-600" href="/#">Home</Link></li>
            <li><Link className="font-semibold hover:cursor-pointer dark:hover:text-gray-300 hover:text-gray-600" href="/projects">Projects</Link></li>
            <li><Link className="font-semibold hover:cursor-pointer dark:hover:text-gray-300 hover:text-gray-600" href="/about">About</Link></li>
            <li><Link className="font-semibold hover:cursor-pointer dark:hover:text-gray-300 hover:text-gray-600" href="/contact">Contact</Link></li>
          </ul>

          <div className='ml-auto pr-4'>
            <ThemeSwitcher />
          </div>
        </div>

        <Card id="home">
          <div className="pl-14 md:pl-[12.5rem] flex flex-col min-w-[50%}">
            <h1 className="dark:text-white text-black self-start whitespace-nowrap font-black md:text-5xl text-4xl pb-2">Hi, I'm Sajan</h1>
            <h2 className="dark:text-white text-black whitespace-nowrap font-bold text-2xl md:text-3xl pb-2">Web Developer</h2>
            <p className='dark:text-white pl-1 text-lg font-medium'>A Junior Full-Stack Developer focused on building innovative and scalable web solutions.</p>
          </div>

          <div className='absolute right-[2rem] lg:right-[7rem] xl:right-[10rem]'>
            <ScrollingIcons />
          </div>
        </Card>

        <Card id="projects">
          <div className="p-8"></div>
        </Card>
    </main>
  );
}
