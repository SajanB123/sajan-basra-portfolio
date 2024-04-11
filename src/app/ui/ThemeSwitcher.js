'use client';
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from 'next/image';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className="flex justify-end items-center">
            <button
                className={`dark:hover:bg-gray-800 hover:bg-gray-200 w-28 h-12 border dark:border-gray-900 rounded-full px-5 py-2 flex items-center justify-end gap-2 font-bold cursor-pointer transition-colors duration-300 relative ${
                    theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
                }`}
                onClick={toggleTheme}
            >
                {theme === 'light' ? (
                    <Image className="absolute top-[0.6rem] left-[1.4rem]" src="/sun_icon.svg" alt="Sun" width={50} height={50} />
                ) : (
                    <Image className="absolute top-[0.6rem] left-[1.4rem]" src="/moon_icon.svg" alt="Moon" width={50} height={50} />
                )}
                <span className="text-sm whitespace-nowrap">{theme === 'light' ? 'Light' : 'Dark'}</span>
            </button>
        </div>
    );
};

export default ThemeSwitcher;
