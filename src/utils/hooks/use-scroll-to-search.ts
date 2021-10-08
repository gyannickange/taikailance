import { createRef } from 'react';

const useScrollToSearch = () => {
  const ref = createRef<HTMLDivElement>();

  const scrollToTop = (ref: any) => {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }

  return { ref, scrollToTop };
}

export default useScrollToSearch;
