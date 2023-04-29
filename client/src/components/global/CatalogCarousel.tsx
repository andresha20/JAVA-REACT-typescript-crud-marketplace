import * as React from 'react';
import Carousel from './Carousel';
import { SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr'
import fetcher from '../../utils/fetcher';
import Loading from './Loading';
import Post from '../post/Post';

export interface IAppProps {
    color?: string,
}

const redirectTo = (type: number, target: string) => {
    const navigate = useNavigate()

        switch (type) {
            case 1:
                navigate(`/catalog?id=${target}`)
                
                break;
            case 2:
                navigate(`/catalog?brand=${target}`)
                
                break;
            default:
                break;
        }
}

const CatalogCarousel: React.FunctionComponent<IAppProps> = ({ color }) => {

    const { data, error, isLoading } = useSWR('/filter', fetcher);
    const cars = data || [];

    if (isLoading && !error) {
        return <Loading />
    }

    if (error) {
        return <p>Error</p>
    }

    return <aside>
        {cars.length == 0
            ? <p className='text-center'>No hay vehículos para mostrar.</p>
            :
            <Carousel>
                {cars.map((car: any, i: number) => (
                    <SwiperSlide key={car.id}>
                        <div>
                            <Post postData={car}/>
                        </div>
                    </SwiperSlide>
                ))}
            </Carousel>
        }
    </aside>
}

CatalogCarousel.defaultProps = {
    
}

export default CatalogCarousel;