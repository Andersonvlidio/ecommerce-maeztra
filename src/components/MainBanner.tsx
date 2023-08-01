import styles from "@/styles/components/mainBanner.module.scss";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";

import isMobile from "../utils/IsMobile";

const ImageBanner = () => {
  const isMobileScreen = isMobile(640);
  return (
    <>
      {isMobileScreen ? (
        <div className={styles.mainBanner__containerImage}>
          <Image
            src="/bannerMobile.jpg"
            alt="Banner"
            width={640}
            height={320}
            className={styles.mainBanner__imageMobile}
          />
          <div className={styles.mainBanner__containerTexts}>
            <h1 className={styles.mainBanner__containerTitle}>
              Promoções de Outono
            </h1>
            <span className={styles.mainBanner__containerDescription}>
              Confiras os melhores looks para combinar com você nesse Outono
            </span>
            <button className={styles.mainBanner__button}>conferir</button>
          </div>
        </div>
      ) : (
        <div className={styles.mainBanner__containerImage}>
          <Image
            src="/bannerDesktop.jpg"
            alt="Banner"
            width={1024}
            height={420}
            className={styles.mainBanner__imageDesktop}
          />
          <div className={styles.mainBanner__containerTexts}>
            <h1 className={styles.mainBanner__containerTitle}>
              Promoções de Outono
            </h1>
            <span className={styles.mainBanner__containerDescription}>
              Confiras os melhores looks para combinar com você nesse Outono
            </span>
            <button className={styles.mainBanner__button}>conferir</button>
          </div>
        </div>
      )}
    </>
  );
};

const MainBanner = () => {
  return (
    <>
      <Carousel
        mx="auto"
        loop
        withIndicators
        dragFree
        slideGap="md"
        align="start"
      >
        <Carousel.Slide>
          <ImageBanner />
        </Carousel.Slide>
        <Carousel.Slide>
          <ImageBanner />
        </Carousel.Slide>
      </Carousel>
    </>
  );
};

export default MainBanner;
