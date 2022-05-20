import { useRouter } from 'next/router';
import Link from 'next/link';

import PostItem from '../../components/PostItem';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      {/* <Header /> */}
      {/* <h1>Post: {id}</h1> */}
      {/* <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}> */}
      <PostItem />
    </>
  );
};

export default Post;
