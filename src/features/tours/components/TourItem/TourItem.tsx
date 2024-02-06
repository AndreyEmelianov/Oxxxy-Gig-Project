import { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { Icon } from '../../../../components/Icon/Icon';
import { dateFormatterRuLocale } from '../../../../app/utils';

interface ITourItemProps {
  city: string;
  date: string;
  county: string;
  place: string;
  ticketLink: string | null;
  videoLink: string | null;
  soldOut: boolean;
  index: number;
}

const TourItem: FC<ITourItemProps> = ({
  city,
  date,
  ticketLink,
  videoLink,
  soldOut,
  place,
  index,
}) => {
  return (
    <li>
      <ScrollAnimation
        className="tour-item"
        animateIn="fadeInLeft"
        animateOut="fadeOutRight"
        delay={index * 100}
        offset={260}>
        <div className="tour-item__info">
          <div className="tour-item__date">{dateFormatterRuLocale(date)}</div>
          <p className="tour-item__place">{place}</p>
        </div>
        <p className="tour-item__city">{city}</p>

        {!soldOut ? (
          <a
            href={ticketLink ? ticketLink : videoLink || ''}
            target="__blank"
            className="tour-item__button">
            {ticketLink ? (
              <>
                <span>Билеты</span>
                <Icon name="arrow-right" />
              </>
            ) : (
              <span>ВИДЕО</span>
            )}
          </a>
        ) : (
          <button className="tour-item__button soldout">SOLD OUT</button>
        )}
      </ScrollAnimation>
    </li>
  );
};
export default TourItem;
