import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/components/menuDesktop.module.scss";
import Image from "next/image";

type MenuDesktop = {
  id: number;
  name: string;
  icon?: string;
};

const MenuDesktop = () => {
  const [items, setItems] = useState<MenuDesktop[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<MenuDesktop[]>("/api/categories");
        const data = response.data;
        setItems(data);
      } catch (error) {
        console.error("Ocorreu um erro na requisição:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.menuDesktop__container}>
      <ul className={styles.menuDesktop__menuDesktopItems}>
        {items.map((item) => (
          <li key={item.id} className={styles.menuDesktop__menuDesktopItem}>
            {item.icon && (
              <Image src={item.icon} alt={item.name} width={24} height={24} />
            )}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuDesktop;
