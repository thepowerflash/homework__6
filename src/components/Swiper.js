import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper.css';

export const SwiperComponent = ({ swiperImage }) => {
    

    console.log(swiperImage)
  return (
    <Swiper className='swiper-container'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        loopedSlides={swiperImage.length}
        onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          autoplay
    >
          {swiperImage.map(item => 
              <SwiperSlide >
                  <img style={{ height: '550px', width: '410px', }} src={item.url} alt='sfddsfdsfsdfs' />
              </SwiperSlide>
        )}
    </Swiper>
  );
};