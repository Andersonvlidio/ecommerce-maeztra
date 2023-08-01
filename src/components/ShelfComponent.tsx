import React, { useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import axios from "axios";
import Image from "next/image";
import styles from "../styles/components/shelfComponent.module.scss";
import isMobile from "../utils/IsMobile";

type Shelfs = {
  id: number;
  name: string;
  description: string;
  image: string;
  skuImage: string;
  price: string;
};

const ShelfComponent = () => {
  const [items, setItems] = useState<Shelfs[]>([]);
  const isMobileScreen = isMobile(1560);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Shelfs[]>("/api/products");
        const data = response.data;
        setItems(data);
      } catch (error) {
        console.error("Ocorreu um erro na requisição:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={styles.shelf__title}>
        <span>As Mais Pedidas</span>
      </div>
      <div
        className={
          isMobileScreen
            ? styles.carouselComponent__containerMobile
            : styles.carouselComponent__container
        }
      >
        <Carousel
          slideSize="20%"
          slideGap="sm"
          loop
          align="start"
          breakpoints={[
            { maxWidth: "xs", slideSize: "90%", slideGap: 5 },
            { maxWidth: "md", slideSize: "33%" },
          ]}
          classNames={{
            root: styles.shelf__root,
            controls: styles.shelf__controls,
            control: styles.shelf__control,
          }}
        >
          {items.map((item) => (
            <Carousel.Slide key={item.id}>
              <div className={styles.shelf__containerShelf}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={308}
                  height={465}
                />
                <div className={styles.shelf__containerShelfInfos}>
                  <Image
                    src={item.skuImage}
                    alt={item.name}
                    width={132}
                    height={27}
                  />
                  <span className={styles.shelf__price}>{item.price}</span>
                  <span className={styles.shelf__name}>{item.name}</span>
                  <span className={styles.shelf__description}>
                    {item.description}
                  </span>
                  <button className={styles.shelf__button}>Adicionar</button>
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ShelfComponent;
