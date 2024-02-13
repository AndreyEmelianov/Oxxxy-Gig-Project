import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../../../app/store';
import { getNewsItemById } from '../../newsSlice';
import { getNews } from '../../selectors';
import { Loader } from '../../../../components/Loader/Loader';
import { dateFormatterRuLocale } from '../../../../app/utils';
import { convertJsonToText } from '../../../../app/renderDescription';

export const SingleNews: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { item, isLoading } = useSelector(getNews);
  console.log(item);

  useEffect(() => {
    if (id) dispatch(getNewsItemById(id));
  }, [dispatch, id]);

  return (
    <section className="news-single page">
      <div className="container">
        {isLoading || !item ? (
          <Loader />
        ) : (
          <div className="news-single__item">
            <h1 className="news-single__item-title">{item.title}</h1>
            <p className="news-single__item-date">{dateFormatterRuLocale(item.date)}</p>
            <div className="news-single__item-content">
              {convertJsonToText(item.description?.json)}
              <img src={item ? item.cover.url : ''} alt="изображение новости" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
