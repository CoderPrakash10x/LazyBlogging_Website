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
          {/* Left Hero Section */}
          <div className={styles.leftherosection}>
            <div className={styles.image}>
              <Image src="/home.jpg" alt="Coding" width={1000} height={600} />
              <div className={styles.content}>
                <h5>Software</h5>
                <h2>Running macOS and Windows 10</h2>
                <h2>on the Same Computer</h2>
                <p>
                  Cursus iaculis etiam in In nullam donec sem sed consequat
                  scelerisque nibh amet, massa egestas risus, gravida vel amet,
                  imperdiet ...
                </p>
              </div>
            </div>
          </div>

          {/* Right Hero Section */}
          <div className={styles.rightherosection}>
            <div className={styles.img}>
              
            </div>

            <div className={styles.rightcontent}>
              <h5>Apps</h5>
              <h4>Broke a Glass? Someday You</h4>
              <h4>Might 3-D–Print a New One</h4>
            </div>

            <div className={styles.rightcontent}>
              <h5>Games</h5>
              <h4>This Is a Giant Shipworm. You</h4>
              <h4>May Wish It Had Stayed In Its Tube.</h4>
            </div>

            <div className={styles.rightcontent}>
              <h5>Editors Pick</h5>
              <h4>Why Netflix shares are down 10%</h4>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
