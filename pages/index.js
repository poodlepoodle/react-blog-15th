import styles from '../styles/Home.module.css';

import Link from 'next/link';

import CardItem from './components/CardItem';

import { post } from '../posts';

export const getStaticProps = async () => {
  return {
    props: {
      postsList: post,
    },
  };
};

const Home = ({ postsList }) => {
  console.log(postsList);

  return (
    <div className={styles.wrapper}>
      {/* {postsList.map((post) => (
        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
          <a>
            <CardItem
              key={post.id}
              // id={post.id}
              title={post.title}
              info={post.dateCreated}
              text={post.bodyText}
              {...postsList}
            />
          </a>
        </Link>
      ))} */}
      <h1>공사 중</h1>
    </div>
  );
};

export default Home;
