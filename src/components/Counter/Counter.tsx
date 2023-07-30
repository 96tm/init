import { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.wrapperCounter}>
      <div className={styles.btn} onClick={() => setCount(count - 1)}>
        inc
      </div>
      <span className={styles.count}>{count}</span>
      <div className={styles.btn} onClick={() => setCount(count + 1)}>
        dec
      </div>
    </div>
  );
};

export default Counter;
