import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  description: string;
  href: string;
}

export default function ProjectCard({ title, imageUrl, description, href }: ProjectCardProps) {

    return (
      <div className={`bg-white dark:bg-gray-900 dark:text-white text-black shadow-md rounded-lg p-4 m-4 hover:transform hover:scale-105 transition-transform duration-300 md:w-[32rem] md:h-[24rem]`}>
          <div>
              <Link href={href} passHref>
                      <Image src={imageUrl} alt={title} width={400} height={300} className="rounded-t-lg bg-white ml-auto mr-auto w-[32rem]" />
              </Link>
          </div>
          <div className="p-4 max-w-[32rem]">
              <h3 className="text-lg font-bold">{title}</h3>
              <p>{description}</p>
          </div>
      </div>
    );
  }