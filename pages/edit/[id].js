import styles from '../../styles/Write.module.css';

import EditField from '../components/EditField';
import { post } from '../../posts';

export const getStaticProps = async ({ params }) => {
  const postList = post.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      postItem: postList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = post.map((postItem) => ({
    params: { id: postItem.id.toString() },
  }));

  return { paths, fallback: false };
};

const Edit = ({ postItem }) => {
  return (
    <div className={styles.wrapper} id={postItem.id}>
      <EditField
        id={postItem.id}
        title={postItem.title}
        info={postItem.dateCreated}
        text={postItem.bodyText}
      />
    </div>
  );
};

export default Edit;
