import {
  useState, useRef, useEffect, RefObject,
} from 'react';
import { useScrollContext } from '@context/scroll_context';

const useElementOnScreen = <T extends Element>(
  options = { root: null, rootMargin: '0px', threshold: 0 },
): [RefObject<T>, boolean] => {
  const [isShowing, setIsShowing] = useState(false);
  const ref = useRef<T>(null);
  const { isScrolling } = useScrollContext();

  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting) {
        if (isScrolling.current) {
          setTimeout(() => setIsShowing(true), 250);
        } else {
          setIsShowing(true);
        }
      }
    };

    const element = ref.current;

    let observer: IntersectionObserver | undefined;

    if (ref.current) {
      observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(ref.current);
    }

    return () => {
      if (element && observer) {
        observer.unobserve(element);
      }
    };
  }, [options, isScrolling, ref]);

  return [ref, isShowing];
};

export default useElementOnScreen;
