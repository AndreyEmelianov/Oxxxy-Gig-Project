import { FC } from 'react';
import { Link } from 'react-router-dom';

import { SectionMotion } from '../../../../components/SectionMotion/SectionMotion';
import { SectionTitle } from '../../../../components/Titles/SectionTitle';
import { Loader } from '../../../../components/Loader/Loader';
import { TourItem } from '../TourItem/TourItem';
import { sortTourByDate } from '../../utils';
import { useTourItems } from '../../hooks/useTourItems';

export const TourItems: FC = () => {
  const { items = [], isLoading = false } = useTourItems();

  const filteredItems = sortTourByDate(
    items
      .filter(({ soldOut, ticketLink }) => !soldOut && ticketLink)
      .filter((_, index) => index < 5),
  );

  return (
    <SectionMotion className="tour">
      <div className="container">
        <SectionTitle text="Концерты" />
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="tour-list">
            {filteredItems.map((item, index) => (
              <TourItem {...item} key={item.sys.id} index={index} />
            ))}
          </ul>
        )}
        <Link to="/tour" className="button-more">
          Все концерты
        </Link>
      </div>
    </SectionMotion>
  );
};
