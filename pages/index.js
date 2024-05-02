import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const data = window.localStorage.getItem('MY_APP_STATE');
    if (data !== null) {
      const { showBanner, counter } = JSON.parse(data);
      setShowBanner(showBanner);
      setCounter(counter);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify({ showBanner, counter }));
  }, [showBanner, counter]);

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {showBanner && (
          <div className={styles.banner}>
            <div className={styles.bannerBody}>
              <h2>React Next Banner Component</h2>
              <p>A customizable React banner component that hides on user interaction and persist the state using Local Storage.</p>
            </div>
            <div className={styles.bannerCta}>
              <p>
                <a onClick={() => setShowBanner(false)}>Hide banner</a>
              </p>
            </div>
          </div>
        )}
        <div className={styles.banner}>
          <div className={styles.bannerBody}>
            <h2>Counter Component</h2>
            <p>React counter component that increments/decrements on user interaction and persists its state using Local Storage.</p>
            <p>Counter: {counter}</p>
          </div>
          <div className={styles.bannerCta}>
            <p>
              <a onClick={incrementCounter}>+</a> &nbsp;
              <a onClick={decrementCounter}>-</a>
            </p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© Copyright <a href="https://sinisaandrijevic.com/">Sinisa Andrijevic.</a> All Rights Reserved</p>
      </footer>
    </div>
  );
}