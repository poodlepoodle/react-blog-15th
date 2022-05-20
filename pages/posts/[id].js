// import { useRouter } from 'next/router';
// import Link from 'next/link';

import { post } from '../posts';

import PostItem from '../components/PostItem';

// export const getStaticProps = async ({ params }) => {
//   const postList = post.filter((p) => p.id.toString() === params.id);
//   return {
//     props: {
//       postItem: postList[0],
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const paths = post.map((postItem) => ({
//     params: { id: postItem.id.toString() },
//   }));

//   return { paths, fallback: false };
// };

export default ({ postItem }) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      {/* <Header /> */}
      {/* <h1>Post: {id}</h1> */}
      {/* <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}> */}
      {/* <PostItem /> */}
      <h1>포스트 내용 상세 페이지</h1>
    </>
  );
};
