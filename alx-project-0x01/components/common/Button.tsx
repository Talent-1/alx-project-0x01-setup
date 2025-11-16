import React from 'react';
import {ButtonProps} from '@/interfaces';



const Button: React.FC <ButtonProps> = ({title, styles = " ", onClick}) => {
const baseClasses = 'bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300';
const combinedClasses = `${baseClasses} ${styles}`;
return (
    <button className={combinedClasses.trim()} onClick={onClick}>
        {title}
    </button>
)
}
export default Button;