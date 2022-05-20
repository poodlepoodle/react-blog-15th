import styles from '../styles/Write.module.css';

import WriteField from './components/WriteField';

const Write = () => {
  return (
    <div className={styles.wrapper}>
      <WriteField />
    </div>
  );
};

export default Write;
