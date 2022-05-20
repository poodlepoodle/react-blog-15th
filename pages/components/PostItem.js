import React from 'react';
import Image from 'next/image';

import styles from '../../styles/PostItem.module.css';

import icon_delete from '../../public/icons/delete.png';
import icon_write from '../../public/icons/write.png';

const PostItem = () => {
  return (
    <div className={styles.post_wrapper}>
      <div className={styles.post_container}>
        <div className={styles.item_info_wrapper}>
          <div className={styles.item_maintext_wrapper}>
            <div className={styles.item_title}>
              잠을 못 잤더니 졸린 기분이에요
            </div>
            <div className={styles.item_info}>인포</div>
          </div>
          <div className={styles.item_btn_wrapper}>
            <div className={styles.item_btn_icon_wrapper}>
              <Image src={icon_delete} />
            </div>
            <div className={styles.item_btn_icon_wrapper}>
              <Image src={icon_write} />
            </div>
          </div>
        </div>
        <div className={styles.item_text}>
          텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
        </div>
      </div>
    </div>
  );
};

export default PostItem;
