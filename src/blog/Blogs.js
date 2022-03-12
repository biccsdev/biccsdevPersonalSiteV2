import '../Home.css';
// import { useState } from "react";
import  Sidebar from '../Sidebar';
import Typical from 'react-typical'

const BlogsPage = () => {
    return (
            <div className='flex h-screen bg-greyish font-vt323'>
                <Sidebar />
                <h1 className='text-center text-whitish w-screen my-14 sm:text-6xl lg:text-8xl font-bold'>
                <Typical
                    steps={['BL', 500, 'BLOGS', 5000]}
                    loop={2}
                    wrapper="a"
                />
                </h1>

            </div>  
    )
}

export default BlogsPage;