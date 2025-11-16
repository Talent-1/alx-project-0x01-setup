import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} ALX Project. All rights reserved.</p>
                <p className='text-sm text-gray-400'>Powered by Hillcify Tech</p>
            </div>
        </footer>
    );
}

export default Footer;