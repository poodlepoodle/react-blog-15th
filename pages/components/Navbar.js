import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import icon_home from '../../public/icons/home.png';
import icon_write from '../../public/icons/write.png';
import icon_search from '../../public/icons/search.png';

import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  return (
    // <div className={styles.container}>
    <div className={styles.navbar}>
      <div className={styles.navbar_left_wrapper}>
        <Link href="/">
          <a>
            <div className={styles.navbar_icon_wrapper}>
              <Image src={icon_home} />
            </div>
          </a>
        </Link>
        <Link href="/write">
          <a>
            <div className={styles.navbar_icon_wrapper}>
              <Image src={icon_write} />
            </div>
          </a>
        </Link>
      </div>

      <div className={styles.navbar_center_wrapper}>
        <Link href="/">
          <a>
            <div className={styles.navbar_title}>🤨 Poodle Problem.log 😄</div>
          </a>
        </Link>
      </div>

      <div className={styles.navbar_right_wrapper}>
        <div className={styles.nav_search}>
          <input placeholder="검색..." />
          <div className={styles.navbar_icon_wrapper}>
            <Image src={icon_search} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
