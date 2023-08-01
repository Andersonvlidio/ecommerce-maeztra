import React, { useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import axios from "axios";
import Image from "next/image";
import styles from "../styles/components/brandsComponent.module.scss";
import isMobile from "../utils/IsMobile";

type Brand = {
  index: React.Key | null | undefined;
  id: number;
  name: string;
  image: string;
};

const BrandsComponent = () => {
  const [items, setItems] = useState<Brand[]>([]);
  const isMobileScreen = isMobile(1560);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Brand[]>("/api/brands");
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
      <div className={styles.brand__title}>
        <span className={styles.title}>Marcas Parceiras</span>
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
              <div className={styles.brands__containerBrands}>
                <div className={styles.brands__containerimage}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={308}
                    height={64}
                  />
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default BrandsComponent;
