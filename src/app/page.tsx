import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pl-4 pr-4">
        <div className="min-w-screen flex flex-row pt-4 pl-4">
          <ul className="flex flex-row space-x-6">
            <li><Link className="hover:cursor-pointer hover:text-gray-600" href="/#">Home</Link></li>
            <li><Link className="hover:cursor-pointer hover:text-gray-600" href="/projects">Projects</Link></li>
            <li><Link className="hover:cursor-pointer hover:text-gray-600" href="/about">About</Link></li>
            <li><Link className="hover:cursor-pointer hover:text-gray-600" href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="flex flex-col min-w-screen bg-green-500">
          <h1 className="font-black text-4xl pl-14">Hi, I'm Sajan</h1>
          <h2 className="pl-14 font-bold text-2xl">Web Developer</h2>
        </div>

        <div className="p-8"></div>
      </div>
    </main>
  );
}
