import { FC, useCallback, useEffect, useState } from 'react';

import { useTourItems } from '../../hooks/useTourItems';
import { PageTitle } from '../../../../components/Titles/PageTitle';
import { Loader } from '../../../../components/Loader/Loader';
import { ITourItem } from '../../types';
import { TourItem } from '../TourItem/TourItem';

export const TourPage: FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [filteredTours, setFilteredTours] = useState<ITourItem[] | []>([]);

  const { items = [], isLoading = false } = useTourItems();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const uniqueCountryTabs = [...new Set(items.map((tour) => tour.county))];

  const toggleTab = useCallback(
    (tab: string) => {
      setActiveTab(tab);
      setFilteredTours(items.filter((item) => item.county === tab));
    },
    [items],
  );

  useEffect(() => {
    if (uniqueCountryTabs.length && !activeTab) {
      toggleTab(uniqueCountryTabs[0]);
    }
  }, [uniqueCountryTabs, activeTab, toggleTab]);

  return (
    <section className="tour-page page">
      <div className="container">
        <PageTitle text="Все концерты и туры" />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ul className="tour-tabs">
              {uniqueCountryTabs.map((tab) => (
                <li
                  className={`tour-tab ${activeTab === tab ? 'active' : ''}`}
                  key={tab}
                  onClick={() => {
                    toggleTab(tab);
                  }}>
                  {tab}
                </li>
              ))}
            </ul>
            <ul className="tour-items">
              {filteredTours.map((tour, index) => (
                <TourItem key={tour.sys.id} index={index} offset={100} {...tour} />
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};
