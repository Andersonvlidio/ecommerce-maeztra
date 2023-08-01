import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/components/menuMobile.module.scss";
import Image from "next/image";

type Menu = {
  id: number;
  name: string;
  icon?: string;
};

const MenuMobile = () => {
  const [items, setItems] = useState<Menu[]>([]);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleClose = () => setMenuOpen(false);
  const handleShow = () => {
    setMenuOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Menu[]>("/api/categories");
        const data = response.data;
        setItems(data);
      } catch (error) {
        console.error("Ocorreu um erro na requisição:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.menuMobile__container}>
      <div className={styles.menuMobile__containerMenuIcon}>
        <Image
          src="/menuMobile.svg"
          alt="menu"
          width={24}
          height={24}
          onClick={handleShow}
        />
      </div>
      {isMenuOpen && (
        <div
          className={styles.menuMobile__containerMenuWrapper}
          onClick={(event) => event.stopPropagation()}
        >
          <div className={styles.menuMobile__headerMenu}>
            <span>Menu</span>
            <div onClick={handleClose}> X </div>
          </div>

          <ul className={styles.menuMobile__menuItems}>
            {items.map((item) => (
              <li key={item.id} className={styles.menuMobile__menuItem}>
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                )}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuMobile;
