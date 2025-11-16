import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/common/Button';

const UsersPage: React.FC = () => {
    const users = [
        {
            id: 1, name: 'Hillary Chibuzo', role: 'Admin' 
        },
        { id: 2, name: 'Nnam Mmasi', role: 'Contributor' },
        { id: 3, name: 'Ifeanyi Okonkwo', role: 'Subscriber' },
    ];
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="grow max-w-4xl mx-auto w-full p-4">
                <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Users Directory</h1>
                <ul className="space-y-4">
                    {users.map(user => (
                        <li key={user.id} className="p-4 bg-white shadow rounded-lg flex justify-between items-center border border-gray-100">
                            <div>
                                <h2 className="text-xl font-semibold">{user.name}</h2>
                                <p className="text-sm text-gray-500">{user.role}</p>
                            </div>
                            <Button title="View Profile" styles="bg-teal-500 hover:bg-teal-600 py-1 px-3 text-sm" />
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </div>
    );
}

export default UsersPage;