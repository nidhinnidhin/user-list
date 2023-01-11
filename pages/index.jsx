import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Users List | Home</title>
      </Head>
      <div>  
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum, blanditiis, repellendus assumenda ipsum earum at cumque recusandae similique dolor nam ut minima architecto iure possimus cum est, incidunt quam.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum, blanditiis, repellendus assumenda ipsum earum at cumque recusandae similique dolor nam ut minima architecto iure possimus cum est, incidunt quam.</p>

        <Link href="/users/user">
          <h3 className={styles.btn}>See all the users.</h3>
        </Link>
      </div>
    </>
  )
}
