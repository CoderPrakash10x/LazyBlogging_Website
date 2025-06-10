import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>LazyCoder Blog</title>
        <meta name="keyword" content="next js, LazyBlog , Lazycoder Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <h1>LazyCoder Blog</h1>

          <div className={styles.ctas}>
            <p>May be hello for lazy</p>
          </div>
        </main>

        <div className="blogs">
          <div className="blogItem">
            <h1>How to Learn Javascript in 2025</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate nesciunt voluptas, aperiam expedita eius illum cum adipisci corrupti facilis quo modi excepturi itaque ad magni labore? Ducimus reprehenderit molestias, in officia exercitationem totam quaerat unde illo? Velit harum minima soluta praesentium quam vel blanditiis expedita.</p>
          </div>
        </div>
      </div>

    </>
  );
}
