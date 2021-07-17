import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import Home from '../src/components/Home'

export default function index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cześć, tu Kacper!</title>
        <meta name="description" content="Tutaj strona Frontend Developer Kacper Szarkiewicz" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className={styles.main}>
        <Home />
      </main>

      <footer className={styles.footer}>
        Created by Kacper Szarkiewicz {new Date().getFullYear()}
        <span className={styles.logo}>
          <Image src="/logo.svg" alt="Sharqi Logo" width={264} height={311} />
        </span>
      </footer>
    </div >
  )
}
