import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../../../app/store';
import { SectionMotion } from '../../../../components/SectionMotion/SectionMotion';
import { SectionTitle } from '../../../../components/SectionTitle/SectionTitle';
import { getTour } from '../../selectors';
import { getToursItems } from '../../toursSlice';
import { TourItem } from '../TourItem/TourItem';
import { sortTourByDate } from '../../utils';
import { Loader } from '../../../../components/Loader/Loader';

export const TourItems: FC = () => {
  const dispatch = useAppDispatch();

  const { items = [], isLoading = false } = useSelector(getTour);

  useEffect(() => {
    dispatch(getToursItems());
  }, [dispatch]);

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
