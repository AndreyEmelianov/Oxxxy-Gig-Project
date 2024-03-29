import { FC, useCallback, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

import { SectionMotion } from '../../../../components/SectionMotion/SectionMotion';
import { Icon } from '../../../../components/Icon/Icon';
import { SliderButtonType } from '../../types';
import { SectionTitle } from '../../../../components/Titles/SectionTitle';
import { Loader } from '../../../../components/Loader/Loader';
import { useNewsItems } from '../../hooks/useNewsItems';

import 'swiper/css';

export const News: FC = () => {
  const sliderRef = useRef<SwiperRef | null>(null);

  const { items, isLoading } = useNewsItems();

  const handleSliderButtonClick = useCallback((type: SliderButtonType) => {
    if (!sliderRef.current) return;

    const { swiper } = sliderRef.current;

    type === 'next' ? swiper.slideNext() : swiper.slidePrev();
  }, []);

  return (
    <SectionMotion className="news-section">
      <div className="container">
        <SectionTitle text="Новости" />
        {isLoading ? (
          <Loader />
        ) : (
          <Swiper
            ref={sliderRef}
            spaceBetween={24}
            slidesPerView={4}
            className="news"
            navigation
            modules={[Navigation]}
            breakpoints={{
              1366: {
                slidesPerView: 4,
              },
              720: {
                slidesPerView: 3,
              },
              360: {
                slidesPerView: 2,
              },
            }}>
            {items.map((news, index) => (
              <SwiperSlide key={news.sys.id}>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  animateOut="fadeOutLeft"
                  delay={index * 100}>
                  <Link className="news-item" to={`news/${news.sys.id}`}>
                    <div className="news-item__image">
                      <img src={news.cover.url} alt={`изображение новости: ${news.title}`} />
                    </div>
                    <h3 className="news-item__title">{news.title}</h3>
                  </Link>
                </ScrollAnimation>
              </SwiperSlide>
            ))}
            <div className="navigation">
              <div
                className="navigation-button navigation-prev"
                onClick={() => handleSliderButtonClick('prev')}>
                <Icon name="slider-arrow" />
              </div>
              <div
                className="navigation-button navigation-next"
                onClick={() => handleSliderButtonClick('next')}>
                <Icon name="slider-arrow" />
              </div>
            </div>
          </Swiper>
        )}
      </div>
    </SectionMotion>
  );
};
