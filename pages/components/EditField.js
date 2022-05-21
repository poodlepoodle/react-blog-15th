import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

import styles from '../../styles/PostItem.module.css';

import { post } from '../../posts';

export const getStaticPaths = async () => {
  const paths = post.map((postItem) => ({
    params: { id: postItem.id.toString() },
  }));

  return { paths, fallback: false };
};

const EditField = ({ id, title, info, text }) => {
  const [titleInput, setTitleInput] = useState(title);
  const [textInput, setTextInput] = useState(text);

  const onTitleChange = (event) => {
    setTitleInput(event.target.value);
  };

  const onTextChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <div className={styles.PostWrapper}>
      <div className={styles.PostContainer}>
        <div className={styles.ItemInfoWrapper}>
          <div className={styles.ItemMainTextWrapper}>
            <input
              type="text"
              className={styles.ItemTitle}
              value={titleInput}
              onChange={onTitleChange}
            />
            <div className={styles.ItemInfo}></div>
          </div>
          <div className={styles.navbar_right_wrapper}>{info}</div>
        </div>
        <input
          type="text"
          className={styles.ItemText}
          value={textInput}
          onChange={onTextChange}
        />
      </div>
    </div>
  );
};

export default EditField;
