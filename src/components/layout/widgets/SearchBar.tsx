import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { useAppDispatch } from '@/hooks/redux.hook';

import { openSearch } from '@/store/slice/search';
const SearchBar = () => {
  const [isWindows, setIsWindows] = useState(false);
  useEffect(() => {
    setIsWindows(navigator.userAgent.includes('Windows'));
  }, []);

  const dispatch = useAppDispatch();
  const onOpen = () => {
    dispatch(openSearch());
    document.documentElement.classList.add('overflow-hidden');
    document.body.classList.add('overflow-hidden');
  };

  return (
    <div
      className='bg-day dark:bg-night pointer-events-auto relative flex items-center'
      onClick={onOpen}
    >
      <button
        type='button'
        className='ring-night/10 flex w-full items-center rounded-md py-1.5 pl-2 pr-3 text-sm leading-6 text-slate-400 shadow-sm ring-1 hover:ring-slate-300 dark:bg-gray-700 dark:ring-gray-500 dark:hover:bg-slate-700 dark:hover:ring-slate-300'
      >
        <FiSearch className='mx-1 h-4 w-4' />
        <span className='my-1 ml-auto flex-none text-sm'>Search books ...</span>
        <span className='ml-auto hidden flex-none pl-3 text-sm font-semibold lg:block'>
          {isWindows ? 'Ctrl' : 'control'} K
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
