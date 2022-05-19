import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/BlogMain.module.css';
import bearEmoji from '../public/emojis/bear-face.png';

const CardItem = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div className={styles.CardContainer}>
          <Image className={styles.ItemImage} src={bearEmoji} />
          <div className={styles.ItemInfoWrapper}>
            <div className={styles.ItemMainTextWrapper}>
              <div className={styles.ItemTitle}>가짜타이틀{post.title}</div>
              <div className={styles.ItemInfo}>가짜인포{post.info}</div>
            </div>
            <div className={styles.ItemText}>
              가짜텍스트가 아주 길게 있어요 가짜텍스트가 아주 길게
              있어요가짜텍스트가 아주 길게 있어요가짜텍스트가 아주 길게
              있어요가짜텍스트가 아주 길게 있어요 가짜텍스트가 아주 길게
              있어요가짜텍스트가 아주 길게 있어요가짜텍스트가 아주 길게 있어요
              가짜텍스트가 아주 길게 있어요가짜텍스트가 아주 길게
              있어요가짜텍스트가 아주 길게 있어요가짜텍스트가 아주 길게 있어요
              {post.text}
            </div>
          </div>
        </div>
      ))}
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
