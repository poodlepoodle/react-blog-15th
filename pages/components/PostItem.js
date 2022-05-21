import React from 'react';
import Image from 'next/image';

import styles from '../../styles/PostItem.module.css';

import icon_delete from '../../public/icons/delete.png';
import icon_write from '../../public/icons/write.png';

const PostItem = ({ title, info, text }) => {
  return (
    <div className={styles.post_wrapper}>
      <div className={styles.post_container}>
        <div className={styles.item_info_wrapper}>
          <div className={styles.item_maintext_wrapper}>
            <div className={styles.item_title}>{title}</div>
            <div className={styles.item_info}>{info}</div>
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
        <div className={styles.item_text}>{text}</div>
      </div>
    </div>
  );
};

export default PostItem;
