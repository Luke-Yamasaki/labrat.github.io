import Head from 'next/head';
import { SunDog } from '../components/SunDog';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [audioUrl, setAudioUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setAudioUrl("/music/surprise.mp3");
    setVideoUrl("/videos/sunset.mp4")
    return setLoaded(true);
  }, [])

  return loaded && (
    <div className={styles.main}>
      <Head>
        <title>WTF Lab Rat?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <audio autoPlay loop src={audioUrl} />
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          src={videoUrl}
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
