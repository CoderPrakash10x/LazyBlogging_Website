import Link from "next/link";
import { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>RS</span>
          <span className={styles.logoText}>LazyBlog</span>
        </div>
        <div
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
        <ul
          className={`${styles.navLinks} ${
            menuOpen ? styles.activeMenu : ""
          }`}
        >
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blogs</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className={styles.right}>
        <ul className={styles.rightLinks}>
          <li><Link href="#" className={styles.subscribe}>Subscribe</Link></li>
          <li><Link href="#">Sign In</Link></li>
          <li><FiSearch className={styles.searchIcon} /></li>
        </ul>
      </div>
    </nav>
  );
};
