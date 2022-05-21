import React from 'react';
import Image from 'next/image';

import styles from '../../styles/WriteField.module.css';

import icon_delete from '../../public/icons/delete.png';
import icon_write from '../../public/icons/write.png';

const WriteField = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.info_wrapper}>
          <div className={styles.info_maintext_wrapper}>
            <input
              className={styles.info_title_input}
              placeholder="포스트 제목을 입력하세요"
            />
            {/* <div className={styles.item_info}>인포</div> */}
            {/* <input
              type="date"
              id="post-date"
              name="post-date"
              value="2018-07-22"
              min="2022-01-01"
              max="2022-12-31"
            /> */}
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
        <textarea
          className={styles.item_textarea}
          placeholder="포스트 내용을 입력하세요"
        />
      </div>
    </div>
  );
};

export default WriteField;
