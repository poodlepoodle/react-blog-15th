import Link from 'next/link';
import { useRouter } from 'next/router';

import { post } from '../../posts';

import PostItem from '../components/PostItem';

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

export default ({ postItem }) => {
  // const router = useRouter();
  // const { id } = router.query;

  // console.log({ query: router.query, router: router });

  return (
    <>
      <PostItem
        id={postItem.id}
        title={postItem.title}
        info={postItem.dateCreated}
        text={postItem.bodyText}
      />
    </>
  );
};
