import '../Home.css';
// import { useState } from "react";
import Typical from 'react-typical'

const BlogPost = (title, author, authorPic, content) => {
    return (
        <div className=''>
                <h1 className='text-center text-whitish w-screen my-14 sm:text-6xl lg:text-8xl font-bold'>
                {/* <Typical
                    steps={['WE', 500, 'WEB 3', 5000]}
                    loop={2}
                    wrapper="a"
                /> */}
                {title}
                </h1>
                <p><img src={authorPic}></img>Author: {author}</p>
                <p>{content}</p>
                
            </div>
    )
}

export default BlogPost;