import React from 'react';
import Image from 'next/image';

import styles from '../../styles/CardItem.module.css';

import bearEmoji from '../../public/emojis/bear-face.png';

const CardItem = ({ key, id, title, info, text }) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_container}>
        <div className={styles.item_thumbnail_wrapper}>
          <div className={styles.item_thumbnail}>
            {/* <Image width={36} height={36} src={bearEmoji} /> */}
            <Image width={160} height={160} src={bearEmoji} />
          </div>
        </div>

        <div className={styles.item_info_wrapper}>
          <div className={styles.item_maintext_wrapper}>
            <div className={styles.item_title}>{title}</div>
            <div className={styles.item_info}>{info}</div>
          </div>
          <div className={styles.item_text}>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
