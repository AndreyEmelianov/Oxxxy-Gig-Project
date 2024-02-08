import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../../app/store';
import { getTour } from '../selectors';
import { getToursItems } from '../toursSlice';

export const useTourItems = () => {
  const dispatch = useAppDispatch();

  const { items = [], isLoading = false } = useSelector(getTour);

  useEffect(() => {
    !items.length && dispatch(getToursItems());
  }, [dispatch, items]);

  return { items, isLoading };
};
