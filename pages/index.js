import CardItem from '../component/CardItem';

import styles from '../styles/Home.module.css';

/*
{posts.map((post) => ( 
  ))}
        title={post.title}
        info={post.dateCreated}
        text={post.bodyText}

  */

const Home = ({ posts }) => {
  return (
    // <div className={styles.container}>
    /* <main className={styles.main}> */
    <div>
      <CardItem title={'타이틀'} info={'인포'} text={'텍스트'}></CardItem>
    </div>
  );
};

export async function getServerSideProps(context) {
  //const res = await fetch(`https://posts`);
  //const { posts } = await res.json();
  return {
    props: {},
  };
}

export default Home;
