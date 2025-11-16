import React from 'react';
import {PostCardProps} from '@/interfaces';

const PostCard: React.FC <PostCardProps> = ({title, body, author}) => {
return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-4 bg-white border border-gray-100">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
                <p className="text-gray-700 text-base line-clamp-3">
                    {body}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-indigo-100 rounded-full px-3 py-1 text-sm font-semibold text-indigo-800 mr-2 mb-2">
                    #{author}
                </span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #post
                </span>
            </div>
        </div>
);

}

export default PostCard;