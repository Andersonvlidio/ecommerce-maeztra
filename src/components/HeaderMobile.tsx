import Image from "next/image";
import styles from "../styles/components/headerMobile.module.scss";

import MenuMobile from "./MenuMobile";
import useFixedHeader from "../utils/FixerdHeader";

const Header = () => {
  const { isHeaderFixed } = useFixedHeader();
  const headerClasses = `${styles.header__containerHeader} ${
    isHeaderFixed ? styles.header__fixo : ""
  }`;
  return (
    <>
      <header className={headerClasses}>
        <div className={styles.header__warperMenuLogo}>
          <div className={styles.header__containerMenuIcon}>
            <MenuMobile />
          </div>
          <a className={styles.header__containerLogo} href="#">
            <Image src="/logo-maeztra.jpg" alt="logo" width={110} height={12} />
          </a>
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
