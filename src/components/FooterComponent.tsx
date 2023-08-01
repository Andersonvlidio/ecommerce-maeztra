import { Accordion } from "@mantine/core";
import styles from "@/styles/components/footer.module.scss";
import Image from "next/image";
import isMobile from "../utils/IsMobile";

const FooterComponent = () => {
  const isMobileScreen = isMobile(640);
  return (
    <>
      {isMobileScreen ? (
        <>
          <div className={styles.footer__containerAccordion}>
            <Accordion>
              <Accordion.Item value="Informações">
                <Accordion.Control>Informações</Accordion.Control>
                <Accordion.Panel> Quem Somos </Accordion.Panel>
                <Accordion.Panel> Prazo de Envio </Accordion.Panel>
                <Accordion.Panel> Trocas e Devoluções </Accordion.Panel>
                <Accordion.Panel> Promoções e Cupons </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="Minha Conta">
                <Accordion.Control>Minha Conta</Accordion.Control>
                <Accordion.Panel>Minha Conta</Accordion.Panel>
                <Accordion.Panel>Meus Pedidos</Accordion.Panel>
                <Accordion.Panel>Cadastre-se</Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="Onde nos Encontrar">
                <Accordion.Control>Onde nos Encontrar</Accordion.Control>
                <Accordion.Panel>Lojas</Accordion.Panel>
                <Accordion.Panel>Endereço</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        </>
      ) : (
        <div className={styles.footer__containerFooterDesktop}>
          <div className={styles.footer__containerInfo}>
            <span className={styles.footer__title}>Informações</span>
            <span className={styles.footer__text}>Quem Somos</span>
            <span className={styles.footer__text}>Prazo de Envio</span>
            <span className={styles.footer__text}>Trocas e Devoluções</span>
            <span className={styles.footer__text}>Promoções e Cupons</span>
          </div>
          <div className={styles.footer__containerInfo}>
            <span className={styles.footer__title}>Minha Conta</span>
            <span className={styles.footer__text}>Minha Conta</span>
            <span className={styles.footer__text}>Meus Pedidos</span>
            <span className={styles.footer__text}>Cadastre-se</span>
          </div>
          <div className={styles.footer__containerInfo}>
            <span className={styles.footer__title}>Onde nos Encontrar</span>
            <span className={styles.footer__text}>Lojas</span>
            <span className={styles.footer__text}>Endereço</span>
          </div>
        </div>
      )}

      <div className={styles.footer__containerFooterbar}>
        <div className={styles.footer__containerFlagsFooter}>
          <Image src="/facebook.svg" alt="Facebook" width={32} height={32} />
          <Image src="/instagram.svg" alt="Instagram" width={32} height={32} />
          <Image src="/linkedin.svg" alt="Twitter" width={32} height={32} />
          <Image src="/youtube.svg" alt="Youtube" width={32} height={32} />
        </div>
        <div className={styles.footer__containerFlagsFooter}>
          <Image src="/visa.svg" alt="Facebook" width={32} height={25} />
          <Image src="/mastercard.svg" alt="Instagram" width={32} height={25} />
          <Image src="/visa.svg" alt="Twitter" width={32} height={25} />
          <Image src="/mastercard.svg" alt="Youtube" width={32} height={25} />
        </div>
        <div className={styles.footer__footerLogo}>
          <div className={styles.footer__containerLogofooter}>
            <span className={styles.footer__footerTextLogo}>Powered by</span>
            <div className={styles.footer__containerLogofooter}>
              <Image
                src="/vtexLogo.svg"
                alt="Facebook"
                width={67}
                height={25}
              />
            </div>
          </div>
          <div className={styles.footer__containerLogofooter}>
            <span className={styles.footer__footerTextLogo}> Developed by</span>
            <Image
              src="/maeztraLogoFooter.svg"
              alt="Instagram"
              width={118}
              height={25}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
