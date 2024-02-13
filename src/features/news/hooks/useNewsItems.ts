import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../../app/store';
import { getNews } from '../selectors';
import { getNewsItems } from '../newsSlice';

export const useNewsItems = () => {
  const dispatch = useAppDispatch();

  const { items = [], isLoading = false } = useSelector(getNews);

  useEffect(() => {
    !items.length && dispatch(getNewsItems());
  }, [dispatch, items]);

  return { items, isLoading };
};
