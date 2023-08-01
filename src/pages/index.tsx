import styles from "@/styles/pages/home.module.scss";

import NotificationBar from "@/components/NotificationBar";
import HeaderMobile from "@/components/HeaderMobile";
import MainBanner from "@/components/MainBanner";
import VantagesCard from "@/components/vantagesCard";
import BrandsComponent from "@/components/BrandsComponent";
import ShelfComponent from "@/components/ShelfComponent";
import SecondBanner from "@/components/SecondBanner";
import Newsletter from "@/components/Newsletter";
import FooterComponent from "@/components/FooterComponent";
import isMobile from "../utils/IsMobile";
import HeaderDesktop from "@/components/HeaderDesktop";
import ModalComponent from "@/components/ModalComponent";

const Home = () => {
  const isMobileScreen = isMobile(1024);
  return (
    <div className={styles.home__containerHome}>
      <NotificationBar />
      {isMobileScreen ? <HeaderMobile /> : <HeaderDesktop />}
      <MainBanner />
      <VantagesCard />
      <BrandsComponent />
      <ShelfComponent />
      <SecondBanner />
      <Newsletter />
      <FooterComponent />
      <ModalComponent />
    </div>
  );
};

export default Home;
