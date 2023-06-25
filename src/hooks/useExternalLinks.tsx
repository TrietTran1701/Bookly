import { useRouter } from 'next/router';
import * as React from 'react';

type UseExternalLinks = {
  isLoading: boolean;
  isHome: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const useExternalLinks = (): UseExternalLinks => {
  // Put Header or Footer Here
  const router = useRouter();
  const isHome = router.pathname === '/';
  const [isLoading, setIsLoading] = React.useState(isHome);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  React.useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);

  return { isLoading, isHome, setIsLoading };
};

export default useExternalLinks;
