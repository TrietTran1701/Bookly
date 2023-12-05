import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/redux.hook';

import Search from '@/components/fixedComponents/search/Search';

import { closeSearch, openSearch } from '@/store/slice/search';

import Modal from './search/Modal';
const FixedComponents = () => {
  const dispatch = useAppDispatch();
  const isOpenSearch =
    useAppSelector((state) => state.search.isOpenSearch) ?? false;

  const onOpen = () => {
    dispatch(openSearch());
    document.documentElement.classList.add('overflow-hidden');
    document.body.classList.add('overflow-hidden');
    window.removeEventListener('keydown', handleKeyDown);
  };

  const onClose = () => {
    window.addEventListener('keydown', handleKeyDown);
    document.documentElement.classList.remove('overflow-hidden');
    document.body.classList.remove('overflow-hidden');
    dispatch(closeSearch());
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    e.stopPropagation();
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault();
      onOpen();
    }
    if (e.key === '/') {
      e.preventDefault();
      onOpen();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=''>
      {isOpenSearch && (
        <Modal onClose={onClose}>
          {/* <SearchComponent
            data={dataSearch}
            recommendBaseOnTag={recommendBaseOnTag}
            onClose={onClose}
          /> */}
          <Search onClose={onClose} />
        </Modal>
      )}
    </div>
  );
};

export default FixedComponents;
