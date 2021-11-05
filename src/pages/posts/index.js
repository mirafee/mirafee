import { getSession } from 'next-auth/client';
import styles from '../../styles/Home.module.css';
import PostPage from './postpage'

export default function Posts({ user }) {
  return (
    <div className={styles.container}>
      <h1>Dashboard(Protected Route)</h1>
      <p>
        Welcome to dashboard: <b>{user.name}</b>
      </p>
      <p>{user.email}</p>
      <PostPage />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
    return {};
  }
  return {
    props: {
      user: session.user,
    },
  };
}

