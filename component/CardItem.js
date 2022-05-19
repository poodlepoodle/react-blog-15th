import React from 'react';
import Image from 'next/image';
import styles from '../styles/BlogMain.module.css';
import bearEmoji from '../public/emojis/bear-face.png';

const CardItem = ({ title, info, text }) => {
  return (
    <div>
      <div className={styles.CardContainer}>
        <Image className={styles.ItemImage} src={bearEmoji} />
        <div className={styles.ItemInfoWrapper}>
          <div className={styles.ItemMainTextWrapper}>
            <div className={styles.ItemTitle}>{title}</div>
            <div className={styles.ItemInfo}>{info}</div>
          </div>
          <div className={styles.ItemText}>{text}</div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(`https://.../posts`);
  const { posts } = await res.json();
  return {
    props: { posts: [] },
  };
}

export default CardItem;
