import React, {
  useRef, useState, useEffect, useContext,
} from 'react';
import Link from 'next/link';
import ThemeContext from '../../context/theme_context';
import * as ROUTES from '../../data/routes.json';
import DarkToggle from '../dark_toggle';
import SideNav from './side_nav';
import Svg from '../svg';
import styles from './styles.module.scss';
import { IAnchor } from '../../types';

interface HeaderSimpleProps {
  anchors: IAnchor[]
}

const HeaderWithSide = ({ anchors = [] }: HeaderSimpleProps) => {
  const [isSideShowing, setIsSideShowing] = useState(false);
  const [darkTheme] = useContext(ThemeContext);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (!isSideShowing) {
        return;
      }

      const element = event.target as HTMLElement;

      if (element.tagName === 'A') {
        setIsSideShowing(false);
        return;
      }

      if (!headerRef.current?.contains(element)) {
        setIsSideShowing(false);
      }
    };

    window.addEventListener('click', closeMenu);

    return () => window.removeEventListener('click', closeMenu);
  }, [isSideShowing]);

  const handleToggle = () => {
    setIsSideShowing((currentState) => !currentState);
  };

  const hasAnchors = anchors.length > 0;

  return (
    <header className={`${styles.header} ${darkTheme && styles.headerDark}`} ref={headerRef}>
      <nav className={`${styles.nav} ${darkTheme && styles.navDark}`}>
        <ul className={styles.navList}>
          <li className={styles.logoItem}>
            <Link href={ROUTES.home}>
              <a className={styles.logoLink}>
                Alejandro Aburto S.
              </a>
            </Link>
          </li>
          <li className={`${styles.darkToggleContainer} && ${!hasAnchors && styles.showDarkToggle}`}>
            <DarkToggle />
          </li>
          {hasAnchors && (
          <li
            className={styles.buttonItem}
          >
            <button
              type="button"
              onClick={handleToggle}
              className={styles.button}
              aria-label="toggle menu"
            >
              {isSideShowing ? (
                <Svg name="close" className={styles.buttonSvg} />
              ) : (
                <Svg name="menu" className={styles.buttonSvg} />
              )}
            </button>
          </li>
          )}
        </ul>
      </nav>
      {hasAnchors && (
      <SideNav
        anchors={anchors}
        isSideShowing={isSideShowing}
      />
      )}
    </header>
  );
};

export default HeaderWithSide;