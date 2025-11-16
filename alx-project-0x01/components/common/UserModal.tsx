import React, {useState} from 'react';
import Button from '@/components/common/Button';
import { UserModalProps } from '@/interfaces';


const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit, isOpen=true }) => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
    });

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        // Reset form and close modal
        setFormData({ name: '', username: '', email: '' });
        onClose();
    };

    return (
        // Modal Overlay
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
            
            {/* Modal Content */}
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all duration-300">
                
                {/* Header */}
                <div className="bg-indigo-600 p-5 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">Add New User</h2>
                    <button 
                        onClick={onClose} 
                        className="text-white hover:text-indigo-200 transition"
                        aria-label="Close modal"
                    >
                        {/* Close Icon (X) */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                {/* Body / Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    
                    {/* Input: Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
                            placeholder="e.g., Jane Doe"
                        />
                    </div>

                    {/* Input: Username */}
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
                            placeholder="e.g., janedoe"
                        />
                    </div>

                    {/* Input: Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
                            placeholder="e.g., jane@example.com"
                        />
                    </div>

                    {/* Footer / Actions */}
                    <div className="pt-4 flex justify-end space-x-3">
                        <Button 
                            title="Cancel" 
                            onClick={onClose} 
                            styles="bg-gray-300 hover:bg-gray-400 text-gray-800"
                            type="button" 
                        />
                        <Button 
                            title="Add User" 
                            styles="bg-indigo-600 hover:bg-indigo-700 text-white" 
                            type="submit" 
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserModal;