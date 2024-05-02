import Link from 'next/link';
import Card from '@/app/ui/card';
import ThemeSwitcher from "./ui/ThemeSwitcher.js";
import ScrollingIcons from './ui/scrolling-icons.jsx';
import Sidebar from '@/app/ui/sidebar';
import ProjectCard from '@/app/ui/project-card';
import Image from 'next/image';
import { useEffect } from 'react';
import InteractiveLinks from '@/app/ui/interactive-links';

export default function Home() {

  const projects = [
    { title: "NextJS Acme Site", imageUrl: "/nextjs-acme-dashboard.svg", description: "A dynamic dashboard created by completing a course on NextJS. user@nextmail.com, 123456", href:"https://nextjs-dashboard-3mx9dltaj-sajanb123.vercel.app/login" },
    { title: "Sajan Basra's Portfolio Site", imageUrl: "/sajan-portfolio-github-repo.png", description: "The Github repo/code for this site.", href:"https://github.com/SajanB123/sajan-basra-portfolio" },
  ];


  return (
    <main className="min-h-screen">
        <div className="min-w-full flex flex-row pt-4 pl-6 pr-2 pb-4 dark:bg-gray-900 bg-gray-50 border-2 border-opacity-5 border-gray-600 absolute items-center dark:text-white">
          <Sidebar />
          <InteractiveLinks />
          <div className='ml-auto pr-4'>
            <ThemeSwitcher />
          </div>
        </div>

        <Card id="home" backgroundColor='dark:bg-gray-950 bg-gray-100'>
          <div className="pl-5 md:pl-14 xl:pl-[12.5rem] flex flex-col min-w-[50%} md:w-[90%]">
            <h1 className="dark:text-white text-black self-start whitespace-nowrap font-black md:text-5xl text-4xl pb-2">Hi, I&apos;m Sajan</h1>
            <h2 className="dark:text-white text-black whitespace-nowrap font-bold text-2xl md:text-3xl pb-2">Web Developer</h2>
            <p className='dark:text-white pl-1 text-lg font-medium'>A Junior Full-Stack Developer focused on building innovative and scalable web solutions.</p>
          </div>

          <div className='absolute right-[2rem] lg:right-[7rem] xl:right-[10rem]'>
            <ScrollingIcons />
          </div>
        </Card>

        <Card id="projects" backgroundColor='dark:bg-gray-950 bg-gray-100'>
            <h2 className='self-center pb-8 md:text-5xl text-4xl dark:text-white items-stretch'>Projects</h2>
            <div className="flex flex-wrap justify-center items-center">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        imageUrl={project.imageUrl}
                        description={project.description}
                        href={project.href}
                    />
                ))}
            </div>
        </Card>


        <Card id="about" backgroundColor='dark:bg-gray-950 bg-gray-100'>
          <div className="flex flex-col justify-center space-y-4">
            <div className='min-w-full flex flex-col pt-4 pl-12 pr-12 lg:pl-32 lg:pr-32 xl:pl-[11.5rem] xl:pr-[11.5rem] pb-4 dark:bg-gray-950 bg-gray-100 items-center dark:text-white'>
              <h2 className='dark:text-white text-black whitespace-nowrap font-bold text-2xl md:text-3xl pb-2 pt-6 self-start'>About Me</h2>
              <p className='dark:text-white pl-1 text-lg font-medium'>I&apos;m a Junior Developer who is enthusiastic towards IT and technology. Currently, I&apos;m working as a Junior Developer and IT Professional at Hallbrook Partners and creating personal developer projects to improve my coding knowledge. I have also worked as a developer with web development companies such as Remarkable Commerce and WebDNA and successfully completed an apprenticeship in software and web development with Baltic Apprenticeships. Also, I&apos;m working towards a certification in Azure and continually studying fields such as Cyber Security and Web Development.</p>
            </div>

            <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between dark:text-white ml-auto mr-auto'>
              <div className='flex flex-col items-center md:pr-8'>
                <img src='mail.svg' className='w-12 h-12 dark:bg-white dark:border dark:rounded-full' />
                <p className='pointer-events-none pt-1'>sajan.basra2k@gmail.com</p>
              </div>

              <div className='flex flex-col items-center pb-8'>
                <div className='flex flex-row space-x-8'>
                  <img src='phone.svg' className='w-12 h-12 dark:bg-white dark:border dark:rounded-full' />
                  <img src='message.svg' className='w-12 h-12 dark:bg-white dark:border dark:rounded-full' />
                </div>

                <p className='pointer-events-none pt-1'>+44 07848915455</p>
              </div>
            </div>
          </div>
        </Card>
    </main>
  );
}
