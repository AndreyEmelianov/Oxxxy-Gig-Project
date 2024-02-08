import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getTracks } from '../../selectors';
import { useAppDispatch } from '../../../../app/store';
import { getTracksItems } from '../../tracksSlice';

export const useTracksItems = () => {
  const dispatch = useAppDispatch();

  const { items = [], isLoading = false } = useSelector(getTracks);

  useEffect(() => {
    !items.length && dispatch(getTracksItems());
  }, [dispatch, items]);

  return { items, isLoading };
};
