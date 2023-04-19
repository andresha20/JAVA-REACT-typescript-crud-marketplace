import * as React from 'react';
import Carousel from './Carousel';
import { SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

export interface IAppProps {
    color?: string,
}

const cars = [
    { img: '', _id: '' }
]

const redirectTo = (type: number, target: string) => {
    const navigate = useNavigate()

        switch (type) {
            case 1:
                navigate(`/catalog?carId=${target}`)
                
                break;
            case 2:
                navigate(`/catalog?brand=${target}`)
                
                break;
            default:
                break;
        }
}

const CatalogCarousel: React.FunctionComponent<IAppProps> = ({ color }) => <aside>


    <Carousel>
        {cars.map((car, i) => (
            <SwiperSlide>
                <div className='flex flex-col items-center space-y-3'>
                   
                </div>
            </SwiperSlide>
        ))}
    </Carousel>
</aside>

CatalogCarousel.defaultProps = {
    
}

export default CatalogCarousel;