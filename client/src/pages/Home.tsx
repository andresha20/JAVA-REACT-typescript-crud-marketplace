import React from 'react';
import { useNavigate } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react';
import Carousel from '../components/global/Carousel';

const Home = () => {

    const navigate = useNavigate()

    const redirectTo = (type: number, target: number) => {
        switch (type) {
            case 1:
                navigate(`/catalog?category=${target}`)
                
                break;
            case 2:
                navigate(`/catalog?brand=${target}`)
                
                break;
            default:
                break;
        }
    }

    const brands = [
        { name: 'Audi', logo: `/images/audi.png` },
        { name: 'BMW', logo: `/images/bmw.png` },
        { name: 'Toyota', logo: `/images/toyota.png` },
    ]

    return <div className='bg-orange-100'>
        <div className='bg-black h-96 w-full'>
            <p>test</p>
        </div>
        <div className='max-w-screen-lg shadow bg-white space-y-5 md:space-y-20 mx-auto p-5 md:p-10'>
            <div className=''>
                <h1 className='text-center font-bold'>Categories</h1>
                <div className='grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    <div>
                        <img className='cursor-pointer transform transition-all hover:scale-105' onClick={() => redirectTo(1, 1)} src='/images/category1.png'/>
                    </div>
                    <div>
                        <img className='cursor-pointer transform transition-all hover:scale-105' onClick={() => redirectTo(1, 2)} src='/images/category2.png'/>
                    </div>
                    <div>
                        <img className='cursor-pointer transform transition-all hover:scale-105' onClick={() => redirectTo(1, 3)} src='/images/category3.png'/>
                    </div>
                    <div>
                        <img className='cursor-pointer transform transition-all hover:scale-105' onClick={() => redirectTo(1, 4)} src='/images/category4.png'/>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 '>
                <h1 className='text-center font-bold'>Brands</h1>
                <div className='py-5'>
                    <Carousel>
                        {brands.map((brand, i) => (
                            <SwiperSlide>
                                <div className='flex flex-col items-center space-y-3'>
                                    <div className='h-32'>
                                        <img src={brand.logo} height={100} width={100}/>
                                    </div>
                                    <p onClick={() => redirectTo(2, i)} className='font-bold text-orange-500 underline cursor-pointer hover:text-gray-900 transition-all'>{brand.name}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Carousel>
                </div>
            </div>
            <h1 className='text-center font-bold'>Catalog</h1>
            <div>

            </div>
        </div>
    </div>;
};

export default Home;