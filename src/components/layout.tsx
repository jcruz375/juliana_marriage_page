import Image from 'next/image';

import Link from 'next/link';
import logoImg from '../../public/assets/logo.png';
import styles from '../styles/layout.module.scss';

import { useContext } from 'react';
import { FiMenu } from 'react-icons/fi';
import { DrawerContext } from '../contexts/DrawerContext';
import Drawer from './drawer';


interface layoutPropsType {
  children: JSX.Element;
}

export function Layout({ children }: layoutPropsType) {
  const { openDrawer, isDrawerOpen } = useContext(DrawerContext);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link href="/">
          <Image
            src={logoImg}
            alt="logo C e E"
            width={136}
            height={50}
          />
        </Link>

        <button
          className={`${styles.drawer_button}`}
          onClick={openDrawer}
        >
          <FiMenu fontSize={48} />
        </button>

        <div className={`${styles.drawer} ${isDrawerOpen ? `${styles.open}` : `${styles.drawer_none}`}`}>
        {/* <div className={ isDrawerOpen ?  `${styles.drawer_visible}` : `${styles.drawer_none}`}> */}
          <Drawer />
        </div>

        <nav>
          <Link href="/nossa_historia">
            <p className='font-serif text-2xl'>
              Nossa história
            </p>
          </Link>
          <Link href="/presentes">
            <p className='font-serif text-2xl'>
              Presentes
            </p>
          </Link>
          <Link href="/">
            <p className='font-serif text-2xl'>
              Confirmar presença
            </p>
          </Link>
        </nav>
      </header>
      <section>
        {children}
      </section>
    </main>
  )
}
