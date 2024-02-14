import React from 'react';
import './CreatePost.css';
import { useNavigate } from 'react-router-dom';


const CreatePostButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/create')

        console.log('button clicked,', handleClick)
    }

    return (
        <>
        <button onClick={handleClick} className='createPostBtn'>Create Post +</button>
        </>
    )
}

export default CreatePostButton 