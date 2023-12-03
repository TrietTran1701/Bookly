import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};

const dropIn = {
  hidden: {
    y: '-10vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const Modal = ({ onClose, children }: ModalProps) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEscapeKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeyPress);
    return () => document.removeEventListener('keydown', handleEscapeKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/70 px-5'
      onClick={handleOverlayClick}
    >
      <motion.div
        className='w-fit'
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className='bg-day dark:bg-night shadow-night relative mx-auto flex w-full max-w-xl rounded-lg shadow-sm md:max-w-[36rem] '>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
