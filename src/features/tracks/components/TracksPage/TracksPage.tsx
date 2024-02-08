import { FC, useEffect, useState } from 'react';

import { useTracksItems } from '../hooks/useTracksItems';
import { PageTitle } from '../../../../components/Titles/PageTitle';
import { Loader } from '../../../../components/Loader/Loader';
import { dateFormatterRuLocale } from '../../../../app/utils';
import { Icon } from '../../../../components/Icon/Icon';
import { ITrackItem } from '../../types';

export const TracksPage: FC = () => {
  const [audio] = useState(new Audio());
  const [playing, setPlaying] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<ITrackItem | null>(null);

  const { items, isLoading } = useTracksItems();

  const handleTrackClick = (track: ITrackItem) => {
    setPlaying((prevState) => {
      const isPlaying = track.sys.id === currentTrack?.sys?.id ? !prevState : true;

      audio.src = track.link.url;

      !isPlaying ? audio.pause() : audio.play();

      return isPlaying as boolean;
    });

    setCurrentTrack(track);
  };

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, [audio]);

  return (
    <section className="tracks-page page">
      <div className="container">
        <PageTitle text="Все релизы" />

        {isLoading ? (
          <Loader />
        ) : (
          <ul className="tracks-list">
            {items.map((track) => (
              <li className="tracks-list__item" key={track.sys.id}>
                <div className="tracks-list__item-image">
                  <img src={track.cover.url} alt={track.title} />
                </div>
                <div className="tracks-list__item-info">
                  <p className="tracks-list__item-date">{dateFormatterRuLocale(track.date)}</p>
                  <h2 className="tracks-list__item-title">{track.title}</h2>
                  <p className="tracks-list__item-description">{track.descriptionn}</p>
                </div>

                <button className="tracks-list__item-btn" onClick={() => handleTrackClick(track)}>
                  <span>Слушать</span>
                  <Icon
                    name={playing && track.sys.id === currentTrack?.sys.id ? 'pause' : 'play'}
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
