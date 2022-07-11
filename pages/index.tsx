import Head from "next/head";

export default function Home({}) {
  return (
    <div>
      <Head>
        <title>Alexander Borminskij | Home</title>
        <meta
          name="description"
          content="Alexander Borminskij | Front End Developer"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:url" content="https://borminskij.com" />
        <meta name="color-scheme" content="dark" />
        <meta
          property="og:title"
          content="Alexander Borminskij | Front End Developer"
        />
        <meta property="og:image" content="/meta-image.jpg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Home
