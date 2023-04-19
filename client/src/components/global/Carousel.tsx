import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export interface IAppProps {
    children?: React.ReactNode
}

const Carousel: React.FunctionComponent<IAppProps> = ({ children }) => <aside>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {children}
    </Swiper>
</aside>

Carousel.defaultProps = {
    
}

export default Carousel;