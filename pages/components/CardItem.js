import React from 'react';
import Image from 'next/image';
import styles from '../../styles/CardItem.module.css';
import bearEmoji from '../../public/emojis/bear-face.png';

const CardItem = ({ title, info, text }) => {
  return (
    <div className={styles.CardWrapper}>
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

export default CardItem;
