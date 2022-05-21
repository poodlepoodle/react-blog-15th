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
  return (
    <div className={styles.wrapper}>
      {postsList.map((post) => (
        <Link key={post.id} href="/posts/[id]" as={`/posts/${post.id}`}>
          <a>
            <CardItem
              id={post.id}
              title={post.title}
              info={post.dateCreated}
              text={post.bodyText}
              {...postsList}
            />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Home;
