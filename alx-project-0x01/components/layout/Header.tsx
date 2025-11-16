import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return(
        <header className = " h-20 bg-white shadow-md sticky p-4 top-0 z-10">
            <div className =" max-w-7xl mx-auto gap-20 flex justify-center items-center">
                <h1 className =" text-2xl font-bold text-indigo-700">
                    ALX Blog
                    </h1>
                    <nav className='space-x-4 text-gray-600 font-medium'>
                        <Link href="/" className = " hover:text-indigo-600">Home</Link>
                        <Link href="/users" className = " hover:text-indigo-600">Users</Link>
                        <Link href="/posts" className = " hover:text-indigo-600">Posts</Link>
                    </nav>
            </div>
        </header>
    );
}

export default Header;