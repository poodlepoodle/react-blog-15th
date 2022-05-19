import React from 'react';
import Image from 'next/image';
import styles from '../../styles/PostItem.module.css';
import icon_delete from '../../public/icons/delete.png';
import icon_write from '../../public/icons/write.png';

const PostWriter = () => {
  return (
    <div className={styles.PostWrapper}>
      <div className={styles.PostContainer}>
        <div className={styles.ItemInfoWrapper}>
          <div className={styles.ItemMainTextWrapper}>
            <div className={styles.ItemTitle}>타이틀</div>
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
        <div className={styles.ItemText}>
          텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
        </div>
      </div>
    </div>
  );
};

export default PostWriter;
