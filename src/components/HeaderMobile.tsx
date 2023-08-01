import Image from "next/image";
import styles from "../styles/components/headerMobile.module.scss";

import MenuMobile from "./MenuMobile";

const Header = () => {
  return (
    <>
      <header className={styles.header__containerHeader}>
        <div className={styles.header__warperMenuLogo}>
          <div className={styles.header__containerMenuIcon}>
            <MenuMobile />
          </div>
          <div className={styles.header__containerLogo}>
            <Image src="/logo-maeztra.jpg" alt="logo" width={110} height={12} />
          </div>
        </div>

        <div className={styles.header__warperSearchMinicart}>
          <div className={styles.header__containerSearch}>
            <Image src="/search.svg" alt="search" width={24} height={24} />
          </div>
          <div className={styles.header__containerMinicartIcon}>
            <Image src="/minicart.svg" alt="search" width={24} height={24} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
