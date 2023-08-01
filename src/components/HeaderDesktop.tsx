import Image from "next/image";
import styles from "../styles/components/headerDesktop.module.scss";

import { useState } from "react";
import MenuDesktop from "./MenuDesktop";
import useFixedHeader from "../utils/FixerdHeader";

const HeaderDesktop = () => {
  const [inputValue, setInputValue] = useState("");
  const { isHeaderFixed } = useFixedHeader();
  const handleButtonClick = () => {
    setInputValue("");
  };
  const headerClasses = `${styles.headerDesktop__containerMainHeaderDesktop} ${
    isHeaderFixed ? styles.headerDesktop__fixo : ""
  }`;
  return (
    <>
      <header className={headerClasses}>
        <div className={styles.headerDesktop__containerHeaderDesktop}>
          <a className={styles.headerDesktop__containerLogo} href="#">
            <Image src="/logo-maeztra.jpg" alt="logo" width={110} height={12} />
          </a>

          <div className={styles.headerDesktop__containerInput}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={styles.headerDesktop__input}
              placeholder="O Que Você Busca?"
            />
            <button
              onClick={() => handleButtonClick()}
              className={styles.headerDesktop__button}
            >
              Enviar
            </button>
          </div>

          <div className={styles.headerDesktop__warperSearchMinicart}>
            <div className={styles.headerDesktop__containerIcons}>
              <Image
                src="/myAccount.svg"
                alt="myAccount"
                width={14}
                height={16}
              />
              <span>Minha conta</span>
            </div>
            <div className={styles.headerDesktop__containerIcons}>
              <Image
                src="/wishlist.svg"
                alt="myAccount"
                width={18}
                height={16}
              />
              <span>Favoritos</span>
            </div>
            <div className={styles.headerDesktop__minicart}>
              <Image src="/minicart.svg" alt="search" width={14} height={16} />
              <span>Meu carrinho</span>
            </div>
          </div>
        </div>
      </header>
      <MenuDesktop />
    </>
  );
};

export default HeaderDesktop;
