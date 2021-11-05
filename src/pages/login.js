import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/client';
import styles from '../styles/Home.module.css';
import { Button } from '../components/Header/HeaderStyles'


export default function Home() {
  const [session, loadingSession] = useSession();

  if (loadingSession) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Please Log In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Please Log in with your Google Account</h1>

      {!session && (
        <>
          <Button prefetch className={styles.primaryButton} onClick={() => signIn()}>
            Sign In
          </Button>
        </>
      )}

      {session && (
        <>
          <h4>You are logged as: {session.user.name}</h4>
          <div className={styles.boxCenter}>
            <h4>Email: {session.user.email}</h4>
            <br />
            {session.user.image && (
              <span>
                <img src={session.user.image} alt={session.user.name} />
              </span>
            )}
          </div>
          <br />
          <br />
          <Button prefetch className={styles.primaryButton} onClick={() => signOut()}>
            Sign Out
          </Button>
        </>
      )}
    </div>
  );
}
