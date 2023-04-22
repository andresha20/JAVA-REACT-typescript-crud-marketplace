import React from 'react';
import { useNavigate } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react';
import { brands } from '../utils/general';
import Carousel from '../components/global/Carousel';
import CatalogCarousel from '../components/global/CatalogCarousel';
import Filter from '../components/global/Filter';

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



    return <div className='bg-blue-50'>
        <div className="bg-black relative h-96 w-full bg-[url('/images/banner.jpg')] object-fill bg-fixed bg-auto bg-top bg-no-repeat">
            <div className='absolute top-1/2 left-1/2 transform w-4/6 -translate-x-1/2 p-5 -translate-y-1/2 bg-white rounded-xl'>
                <Filter/>
            </div>
        </div>
        <div className='max-w-screen-lg shadow bg-white space-y-5 md:space-y-20 mx-auto rounded p-5 md:p-10'>
            <div className=''>
                <h1 className='text-center font-bold'>Categorías</h1>
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
                <h1 className='text-center font-bold'>Marcas</h1>
                <div className='py-5'>
                    <Carousel>
                        {brands.map((brand, i) => (
                            <SwiperSlide key={i}>
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
            <h1 className='text-center font-bold'>Catálogo</h1>
            <div>
                <CatalogCarousel />
            </div>
        </div>
    </div>;
};

export default Home;