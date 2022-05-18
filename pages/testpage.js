import Head from 'next/head';
// import styles from '../styles/Home.module.css';

const Wrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  width: auto;
  height: 100vh;
`;

const TopNavigator = styled.div`
  display: flex;

  height: 100px;

  background-color: red;
`;

const TopNavigatorIconBox = styled.div`
  display: flex;

  background-color: red;
`;

const TopNavigatorIcon = styled.img`
  width: 30px;
  height: auto;

  background-color: blue;
`;

const TopNavigatorTitle = styled.div`
  font-size: 32px;
`;

const TopNavigatorSearchForm = styled.form`
  background-color: green;
`;

const TopNavigatorSearchInput = styled.input`
  background-color: yellow;
`;

const PageContainer = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 500px;

  /* background-color: blue; */
`;

const MainPostContainer = styled.div`
  display: flex;
`;

const MainPostItem = styled.div``;

const MainPostItemThumbnailWrapper = styled.div``;

const MainPostItemThumbnail = styled.img`
  width: 300px;
  height: auto;
`;

const TestPage = () => {
  return (
    // <div className={styles.container}>
    <Wrapper>
      <Head>
        <title>Poodle Problem.log</title>
        <meta name="description" content="~.~ Poodle Problem.log ~.~" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNavigator>
        <TopNavigatorIconBox>
          <TopNavigatorIcon />
          <TopNavigatorIcon />
        </TopNavigatorIconBox>
        <TopNavigatorTitle>Poodle Problem.log</TopNavigatorTitle>
        <TopNavigatorSearchForm>
          <TopNavigatorSearchInput />
        </TopNavigatorSearchForm>
      </TopNavigator>

      {/* <main className={styles.main}> */}
      <PageContainer>main page</PageContainer>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </Wrapper>
  );
};

export default TestPage;
