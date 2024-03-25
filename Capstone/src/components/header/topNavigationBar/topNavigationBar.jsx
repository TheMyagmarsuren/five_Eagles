import styles from "./topNavigationBar.module.css";
import { Link } from "react-router-dom";

export const TopNavigationBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/">
          <h1 className={styles.logo}>
            <img src="/images/leaf.svg" alt="logo" />
          </h1>
        </Link>
        <div className={styles.input_wrap}>
          <input type="text" placeholder="내용을 입력하시오...." />
          <img src="/images/search.svg" alt="search" />
        </div>
      </div>

      <nav className={styles.navigation}>
        <Link to="/">Home</Link>
        <Link to="/community">Community</Link>
        <Link to="/worldcup">WorldCup</Link>
      </nav>

      <div className={styles.menu}>
        <Link to="/star">
          <div className={styles.star}>
            <img src="/images/star.svg" alt="star" />
            <span>즐겨찾기</span>
          </div>
        </Link>
        <Link to="">
          <div className={styles.mypage}>
            <img src="/images/user.svg" alt="user" />
            <span>로그인</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
