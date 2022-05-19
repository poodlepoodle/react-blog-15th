import React from 'react';
import Image from 'next/image';
import styles from '../../styles/PostItem.module.css';
import icon_delete from '../../public/icons/delete.png';
import icon_write from '../../public/icons/write.png';

const WriteField = () => {
  return (
    <div className={styles.PostWrapper}>
      <div className={styles.PostContainer}>
        <div className={styles.ItemInfoWrapper}>
          <div className={styles.ItemMainTextWrapper}>
            <input className={styles.ItemTitle} />
            <div className={styles.ItemInfo}>인포</div>
          </div>
          <div className={styles.navbar_right_wrapper}>
            <div className={styles.navbar_icon_wrapper}>
              <Image src={icon_delete} />
            </div>
            <div className={styles.navbar_icon_wrapper}>
              <Image src={icon_write} />
            </div>
          </div>
        </div>
        <input className={styles.ItemText} />
      </div>
    </div>
  );
};

export default WriteField;
