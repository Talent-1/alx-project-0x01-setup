import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PostCard from '@/components/common/PostCard';

const PostsPage: React.FC = () => {
    // Sample data for demonstration
    const posts = [
       { id: 1, title: "Next.js Setup Guide", body: "Setting up a robust Next.js application with TypeScript and Tailwind CSS is the first step in our ALX journey. Focus on file structure and component reusability.", author: "Talent" },
        { id: 2, title: "Understanding React Props", body: "Props are how components communicate. They are read-only and form the foundation of data flow in React applications.", author: "Hillary Chibuzo" },
    ];
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Header />
            <main className="grow container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Blog Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map(post => (
                        <PostCard key={post.id} title={post.title} body={post.body} author={post.author} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default PostsPage;