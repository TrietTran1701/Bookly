import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode, useState } from 'react';
import { FaRegShareSquare } from 'react-icons/fa';

import { itemVariants } from '@/constant/animation';
import { useGetBookCover } from '@/queries/books';

import { BookData } from '@/types/Book';
import { Author } from '@/types/Book';

const StyledCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className='bg-grey group relative mb-[40px] overflow-hidden rounded-[20px] p-[20px] pb-[40px] font-mono shadow-[0px_3px_16px_#2f536d1f] duration-[0.3s] ease-in-out '>
      {children}
    </div>
  );
};
const StyledCardImage = ({ isbnNumber }: { isbnNumber: string }) => {
  const size = 'L';
  const { data, isLoading } = useGetBookCover(isbnNumber, size);

  return (
    <div className='relative mb-[21px] overflow-hidden rounded-[20px]'>
      {isLoading ? (
        <>
          <div className='h-[300px] w-full animate-pulse bg-gray-400 duration-[0.4s] group-hover:scale-[1.05] group-hover:object-cover'></div>
        </>
      ) : (
        data && (
          <Image
            src={data}
            alt='book img'
            width={100}
            height={50}
            className='h-[300px] w-full duration-[0.4s] group-hover:scale-[1.05] group-hover:object-cover'
          />
        )
      )}
    </div>
  );
};
const StyledCardTitle = ({ title }: { title: string }) => {
  return (
    <div className='mb-2'>
      <h5 className='text-lightest-slate text-md overflow-hidden text-ellipsis whitespace-nowrap font-semibold  capitalize leading-[26px]'>
        {title}
      </h5>
    </div>
  );
};
const StyledAuthor = ({ authors }: { authors: Author[] }) => {
  const authorNames = authors.map((author) => author.name).join(', ');

  return (
    <div className='mb-[4px] flex flex-col'>
      <p className='text-lightest-slate text-sm'>Author</p>
      <span className='text-lightest-slate overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold capitalize leading-[26px]'>
        {authorNames}
      </span>
    </div>
  );
};

const StyledPublishDate = ({ publishDate }: { publishDate: string }) => {
  return (
    <div className='mb-[16px]'>
      <span className='text-green text-xs italic'>
        Publish year: {publishDate}
      </span>
    </div>
  );
};

const StyledShareDialog = ({ url }: { url: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleClose = () => {
    setTimeout(() => setIsNavVisible(false), 500);
    setIsCopied(false);
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsNavVisible(true);
    setIsOpen(true);
  };
  const handleCopyURL = async () => {
    try {
      // Copy the URL to the clipboard
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch (error) {
      // console.error('Error copying URL to clipboard:', error);
    }
  };

  return (
    <div className='absolute bottom-1'>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className={`menu ${isNavVisible ? 'visible' : 'hidden'}`}
      >
        <motion.div
          className='mb-2 ml-4 flex w-[67%] flex-col gap-2 rounded-lg border-[1px] border-black bg-white p-2 opacity-90 dark:border-white dark:bg-black md:w-56'
          variants={{
            open: {
              clipPath: 'inset(0% 0% 0% 0%)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: 'inset(95% 50% 5% 50%)',

              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.5,
              },
            },
          }}
        >
          {!isCopied ? (
            <motion.div
              className='flex cursor-pointer items-center gap-2'
              variants={itemVariants}
              onClick={handleCopyURL}
            >
              <p className='text-lightest-slate mb-2 text-xs'>Copy book URL</p>
            </motion.div>
          ) : (
            <motion.div
              className='flex cursor-pointer items-center gap-2'
              variants={itemVariants}
            >
              <p className='text-lightest-slate mb-2 text-xs'>URL copied!</p>
            </motion.div>
          )}
        </motion.div>
      </motion.nav>
      <button
        onClick={() => {
          isOpen ? handleClose() : handleOpen();
        }}
        className='cursor-pointer pb-2'
      >
        <FaRegShareSquare size={25} className='text-green' />
      </button>
    </div>
  );
};
export default function SmallCard({
  bookData,
  isbn,
}: {
  bookData: BookData;
  isbn: string;
}) {
  const isbnNumber: string | null = isbn.split(':')[1];
  return (
    <StyledCard>
      <StyledCardImage isbnNumber={isbnNumber} />
      <StyledCardTitle title={bookData.title} />
      <StyledPublishDate publishDate={bookData.publish_date} />
      <StyledAuthor authors={bookData.authors} />
      <StyledShareDialog url={bookData.url} />
    </StyledCard>
  );
}
