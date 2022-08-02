import Head from 'next/head';
import { SunDog } from '../components/SunDog';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl("/music/surprise.mp3");
    return
  }, [])

  return (
    <div className={styles.main}>
      <Head>
        <title>WTF Lab Rat?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <audio autoPlay loop src={url} />
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          src={require('../public/videos/sunset.mp4')}
          autoPlay
          loop
        />
      </div>

      <main className={styles.bg}>
        <div className={styles.vectorBox}>
          <SunDog />
        </div>
      </main>
    </div>
  )
}
