import Head from 'next/head';
import Image from 'next/image';

import icon_home from '../public/icons/home.png';
import icon_write from '../public/icons/write.png';

import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    // <div className={styles.container}>
    <div className={styles.wrapper}>
      {/* <Head>
        <title>Poodle Problem.log</title>
        <meta name="description" content="~.~ Poodle Problem.log ~.~" />
        <link rel="icon" href="/favicon.ico" /> */}
      {/* </Head> */}

      <div>main page</div>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
