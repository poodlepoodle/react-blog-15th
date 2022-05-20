import styles from '../styles/Posts.module.css';
import PostItem from './components/PostItem';

const Posts = () => {
  return (
    <div className={styles.wrapper}>
      <PostItem />
    </div>
  );
};

export default Posts;
