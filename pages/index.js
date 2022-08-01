import Head from 'next/head';
import { SunDog } from '../components/SunDog';
import { SunDogBack } from '../components/SunDog';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>WTF Lab Rat?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.bg}>
        <div className={styles.vectorBox}>
          <SunDog />
          <SunDogBack />
        </div>
      </main>

    </div>
  )
}
