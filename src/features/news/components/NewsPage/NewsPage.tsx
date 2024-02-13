import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useNewsItems } from '../../hooks/useNewsItems';
import { dateFormatterRuLocale } from '../../../../app/utils';
import { PageTitle } from '../../../../components/Titles/PageTitle';
import { Loader } from '../../../../components/Loader/Loader';
import { Icon } from '../../../../components/Icon/Icon';

export const NewsPage: FC = () => {
  const { items, isLoading } = useNewsItems();

  return (
    <section className="news-page page">
      <div className="container">
        <PageTitle text="Все новости" />
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="news-list">
            {items.map((item) => (
              <li className="news-list__item" key={item.sys.id}>
                <img className="news-list__item-img" src={item.cover.url} alt={item.title} />
                <div className="news-list__item-info">
                  <p className="news-list__item-date">{dateFormatterRuLocale(item.date)}</p>
                  <h2 className="news-list__item-title">{item.title}</h2>
                  <Link className="news-list__item-btn" to={`/news/${item.sys.id}`}>
                    <span>Читать</span>
                    <Icon name="arrow-right" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
