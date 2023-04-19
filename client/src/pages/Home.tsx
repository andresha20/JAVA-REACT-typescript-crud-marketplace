import React from 'react';
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const redirectTo = (category: number) => {
        return navigate(`/catalog/${category}`)
    }

    return <div>
        <div className='bg-black h-96 w-full'>
            <p>test</p>
        </div>
        <div className='max-w-screen-lg mx-auto p-5 md:p-10'>
            <h1 className='text-center font-bold'>Categories</h1>
            <div className='grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div>
                    <img onClick={() => redirectTo(1)} src='/images/category1.png'/>
                </div>
                <div>
                    <img onClick={() => redirectTo(2)} src='/images/category2.png'/>
                </div>
                <div>
                    <img onClick={() => redirectTo(3)} src='/images/category3.png'/>
                </div>
                <div>
                    <img onClick={() => redirectTo(4)} src='/images/category4.png'/>
                </div>
            </div>
            Welcome
        </div>
    </div>;
};

export default Home;