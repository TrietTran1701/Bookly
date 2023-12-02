import React from 'react';

interface HamburgurIconProps {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (isOpen: boolean) => void;
}
const HamburgerIcon = ({ open, setOpen }: HamburgurIconProps) => {
  const handleClick = () => {
    setOpen(!open); // Simplify the logic here
  };

  return (
    <button
      aria-label='hamburgur-toggle'
      className='h-fit cursor-pointer rounded-lg p-2.5 hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-700'
      onClick={handleClick}
    >
      <div className='relative'>
        <div className={open ? 'menu-btn open' : 'menu-btn'}>
          <div className='menu-btn__burger bg-black before:bg-black after:bg-black dark:bg-white dark:before:bg-white dark:after:bg-white'></div>
        </div>
      </div>
    </button>
  );
};

export default HamburgerIcon;
