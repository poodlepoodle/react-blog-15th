import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/PostItem.module.css';

import icon_delete from '../../public/icons/delete.png';
import icon_write from '../../public/icons/write.png';

const PostItem = ({ id, title, info, text }) => {
  const onDeleteClick = (event) => {
    console.log(id); //json 파일에 접근해 id가 같으면 삭제...
  };
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
              <Image src={icon_delete} id={id} onClick={onDeleteClick} />
            </div>
            <div className={styles.item_btn_icon_wrapper}>
              <Link key={id} href="/edit/[id]" as={`/edit/${id}`}>
                <Image src={icon_write} id={id} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.item_text}>{text}</div>
      </div>
    </div>
  );
};

export default PostItem;
