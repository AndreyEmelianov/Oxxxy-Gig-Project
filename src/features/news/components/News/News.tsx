import { FC, useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

import { getNews } from '../../selectors';
import { getNewsItems } from '../../newsSlice';
import { useAppDispatch } from '../../../../app/store';
import { SectionTitle } from '../../../../components/SectionTitle/SectionTitle';
import { SectionMotion } from '../../../../components/SectionMotion/SectionMotion';
import { Icon } from '../../../../components/Icon/Icon';
import { SliderButtonType } from '../../types';

import 'swiper/css';

export const News: FC = () => {
  const sliderRef = useRef<SwiperRef | null>(null);

  const dispatch = useAppDispatch();
  const { items, isLoading } = useSelector(getNews);

  useEffect(() => {
    dispatch(getNewsItems());
  }, [dispatch]);

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
          'loading...'
        ) : (
          <Swiper
            ref={sliderRef}
            spaceBetween={24}
            slidesPerView={4}
            className="news"
            navigation
            modules={[Navigation]}>
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
