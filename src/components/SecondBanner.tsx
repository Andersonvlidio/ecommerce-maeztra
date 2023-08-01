import Image from "next/image";
import styles from "../styles/components/secondBanner.module.scss";

const SecondBanner = () => {
  return (
    <div className={styles.secondBanner__containerSecondBanner}>
      <div className={styles.secondBanner__containerTexts}>
        <span className={styles.secondBanner__title}> Lorem ipsum </span>
        <span className={styles.secondBanner__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque placerat consequat. Neque arcu mi
          iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu
          mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat
          aliquet. Sed sed pellentesque porttitor phasellus donec condimentum
          sit sapien.
        </span>
      </div>
      <div>
        <Image
          src="/landingPageImage.svg"
          alt=""
          width={300}
          height={185}
          className={styles.secondBanner__image}
        />
      </div>
    </div>
  );
};

export default SecondBanner;
