import Head from 'next/head'

import styles from './Layout.module.css';

export default function Layout({ children, title='World Ranks' }) {
    return (
        <div className={styles.container} >
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {/* Logo */}
                <span>Logo and site title</span>

                {/* Theme switcher */}
                <span>Theme switcher</span>
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <p className={styles.footer_text}>Copyright 2021. All rights reserved but not really.</p>
            </footer>
        </div>
    )
}
