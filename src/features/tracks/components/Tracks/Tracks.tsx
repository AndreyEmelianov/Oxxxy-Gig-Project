import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import { useAppDispatch } from '../../../../app/store';
import { getTracksItems } from '../../tracksSlice';
import { getTracks } from '../../selectors';
import { SectionMotion } from '../../../../components/SectionMotion/SectionMotion';
import { SectionTitle } from '../../../../components/SectionTitle/SectionTitle';
import { Icon } from '../../../../components/Icon/Icon';
import { dateFormatterRuLocale } from '../../../../app/utils';
import { ITrackItem } from '../../types';
import { Loader } from '../../../../components/Loader/Loader';

export const Tracks: FC = () => {
  const [audio] = useState(new Audio());
  const [playing, setPlaying] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<ITrackItem | null>(null);

  const dispatch = useAppDispatch();

  const { items, isLoading } = useSelector(getTracks);

  useEffect(() => {
    dispatch(getTracksItems());
  }, [dispatch]);

  const handleTrackClick = (track: ITrackItem) => {
    setPlaying((prevState) => {
      const isPlaying = track.sys.id === currentTrack?.sys?.id ? !prevState : true;

      audio.src = track.link.url;

      !isPlaying ? audio.pause() : audio.play();

      return isPlaying as boolean;
    });

    setCurrentTrack(track);
  };

  return (
    <SectionMotion className="tracks-section">
      <div className="container">
        <SectionTitle text="Треки" />

        {isLoading ? (
          <Loader />
        ) : (
          <div className="tracks">
            {items
              .filter((_, index) => index < 3)
              .map((track) => (
                <ScrollAnimation
                  key={track.sys.id}
                  className="track-item"
                  animateIn="fadeInLeft"
                  animateOut="fadeOutRight">
                  <div className="track" onClick={() => handleTrackClick(track)}>
                    <div className="track-image">
                      <img src={track.cover.url} alt={track.title} />
                      {!!playing && currentTrack?.sys.id === track.sys.id && <Icon name="pause" />}
                    </div>
                    <p className="track-date">{dateFormatterRuLocale(track.date)}</p>
                    <h3 className="track-title">{track.title}</h3>
                  </div>
                </ScrollAnimation>
              ))}
          </div>
        )}
        <Link to="/tracks" className="button-more">
          Все релизы
        </Link>
      </div>
    </SectionMotion>
  );
};
