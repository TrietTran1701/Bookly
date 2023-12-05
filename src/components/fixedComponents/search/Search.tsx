import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';
import { IconContext } from 'react-icons';
import { FiSearch } from 'react-icons/fi';

import { SmallButton } from '@/components/buttons/Button';
interface SearchProps {
  onClose: () => void;
}

export default function Search({ onClose }: SearchProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const query = e.target.value;
    setQuery(query);
  };
  function convertToSolrQuery(input: string): string {
    const solrQuery = `q=${input.replace(/\s+/g, '+')}`;
    return solrQuery;
  }
  const onSearch = () => {
    const solrQuery = convertToSolrQuery(query);
    router.push(`/search?${solrQuery}`);
    onClose();
  };
  return (
    <div className='divide-y divide-gray-200 transition duration-500 ease-in dark:divide-gray-700'>
      <div className='m-3.5 flex items-center gap-3'>
        <div className='flex grow flex-row items-center gap-2 text-base'>
          <IconContext.Provider
            value={{ color: '#aaa', className: 'global-class-name' }}
          >
            <FiSearch />
          </IconContext.Provider>
          <input
            className='bg-night focus:border-green w-full border-2 border-solid text-white placeholder-gray-500 outline-none autofill:!bg-white'
            type='text'
            value={query}
            onChange={handleSearch}
            placeholder='Enter books name...'
            autoFocus
          />
        </div>
        <div onClick={onSearch}>
          {/* <p className='text-xs'>ESC</p> */}
          <SmallButton>
            <span className='font-mono'>Search</span>
          </SmallButton>
        </div>
      </div>
    </div>
  );
}
