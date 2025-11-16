import React from 'react';
import { UserProps } from '@/interfaces';
const UserCard: React.FC <UserProps> = ({id, name, username, email, address, phone, website, company}) => {
    return (
        <div className="max-w-xs w-full bg-white rounded-2xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-indigo-400/50 transform hover:-translate-y-1">
            
            {/* Header / Basic Info */}
            <div className="bg-indigo-600 p-6 text-white">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-indigo-200 mt-1">@{username}</p>
            </div>
            
            {/* Contact Details */}
            <div className="p-6 space-y-3">
                <div className="flex items-center text-gray-700">
                    {/* Icon for Email (using Lucide-React equivalent for a web env) */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-indigo-500"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <a href={`mailto:${email}`} className="text-sm hover:underline">{email}</a>
                </div>

                <div className="flex items-center text-gray-700">
                    {/* Icon for Phone */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-indigo-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.75-2.92m-5.48-5.48a19.79 19.79 0 0 1 3.07 8.63 2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.92a2 2 0 0 1 2 2.18 19.79 19.79 0 0 0 3.07 8.63m-2.18 2a1 1 0 0 0 .17.15c.16.15.35.24.57.24h.01m1.36 0h.01"></path></svg>
                    <span className="text-sm">{phone.split(' ')[0]}</span>
                </div>
                
                <div className="flex items-start text-gray-700">
                    {/* Icon for Location */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-indigo-500 flex-shrink-0"><path d="M12 21.7C17 17 21 13 21 8.5 21 5.4 18.6 3 15.5 3c-1.5 0-2.8.7-3.5 1.8A5.4 5.4 0 0 0 8.5 3C5.4 3 3 5.4 3 8.5c0 4.5 4 8.5 9 13.2z"></path><circle cx="12" cy="8.5" r="3"></circle></svg>
                    <span className="text-sm">{address.city}, {address.street}</span>
                </div>
            </div>
            
            {/* Footer / Company Info */}
            <div className="bg-gray-50 p-6 border-t border-gray-100">
                <h3 className="text-xs font-bold uppercase text-indigo-600 mb-1">Company: {company.name}</h3>
                <p className="text-sm italic text-gray-500 leading-tight">"{company.catchPhrase}"</p>
            </div>
            
        </div>
    );
}

export default UserCard;