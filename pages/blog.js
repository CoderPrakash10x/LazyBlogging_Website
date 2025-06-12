import React from 'react';
import styles from '../styles/Blog.module.css';
import Link from 'next/link';

const blog = () => {
  return (
    <>
      <div className={styles.rightherosection}>
        <div className={styles.img}>

        </div>

        <div className={styles.rightcontent}>
          <h4><Link href={'/blogpost/learn-javascript'}>How to Learn Javascript in 2025?</Link></h4>
          <p>Javascript is A scripting Language .......</p>
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
    </>
  )
}

export default blog;