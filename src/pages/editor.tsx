import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NoSSR from '../component/shared/NoSSR'
import dynamic from 'next/dynamic'
const CustomPlayer = dynamic(() => import('../component/editor/CustomPlayer'), {
  ssr: false,
})

const Editor: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NoSSR>{typeof window !== 'undefined' && <CustomPlayer />}</NoSSR>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Editor
