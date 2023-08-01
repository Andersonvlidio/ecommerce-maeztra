import React, { useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import axios from "axios";
import Image from "next/image";
import styles from "../styles/components/vantagesCard.module.scss";
import isMobile from "../utils/IsMobile";

type Vantages = {
  index: React.Key | null | undefined;
  name: string;
  description: string;
  image: string;
};

const VantagesCard = () => {
  const [items, setItems] = useState<Vantages[]>([]);
  const isMobileScreen = isMobile(1560);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Vantages[]>("/api/vantages");
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
      <div className={styles.vantages__title}>
        <span>Por que comprar na Maeztra?</span>
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
          withControls={false}
          breakpoints={[
            { maxWidth: "xs", slideSize: "50%", slideGap: 5 },
            { maxWidth: "md", slideSize: "33%" },
          ]}
          classNames={{ root: styles.carouselComponent__container }}
        >
          {items.map((item, index) => (
            <Carousel.Slide key={index}>
              <div className={styles.vantages__containerVantages}>
                <div className={styles.vantages__containerimage}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={32}
                    height={32}
                  />
                </div>
                <div className={styles.vantages__containerText}>
                  <span className={styles.vantages__textName}>{item.name}</span>
                  <span className={styles.vantages__textDescription}>
                    {item.description}
                  </span>
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default VantagesCard;
