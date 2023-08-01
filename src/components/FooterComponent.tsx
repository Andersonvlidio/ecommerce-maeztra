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
            <a className={styles.footer__text} href="#">
              Quem Somos
            </a>
            <a className={styles.footer__text} href="#">
              Prazo de Envio
            </a>
            <a className={styles.footer__text} href="#">
              Trocas e Devoluções
            </a>
            <a className={styles.footer__text} href="#">
              Promoções e Cupons
            </a>
          </div>
          <div className={styles.footer__containerInfo}>
            <span className={styles.footer__title}>Minha Conta</span>
            <a className={styles.footer__text} href="#">
              Minha Conta
            </a>
            <a className={styles.footer__text} href="#">
              Meus Pedidos
            </a>
            <a className={styles.footer__text} href="#">
              Cadastre-se
            </a>
          </div>
          <div className={styles.footer__containerInfo}>
            <span className={styles.footer__title}>Onde nos Encontrar</span>
            <a className={styles.footer__text} href="#">
              Lojas
            </a>
            <a className={styles.footer__text} href="#">
              Endereço
            </a>
          </div>
        </div>
      )}

      <div className={styles.footer__containerFooterbar}>
        <div className={styles.footer__containerFlagsFooter}>
          <a href="#">
            <Image src="/facebook.svg" alt="Facebook" width={32} height={32} />
          </a>
          <a href="#">
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={32}
              height={32}
            />
          </a>
          <a href="#">
            <Image src="/linkedin.svg" alt="Twitter" width={32} height={32} />
          </a>
          <a href="#">
            <Image src="/youtube.svg" alt="Youtube" width={32} height={32} />
          </a>
        </div>
        <div className={styles.footer__containerFlagsFooter}>
          <a href="#">
            <Image src="/visa.svg" alt="Facebook" width={32} height={25} />
          </a>
          <a href="#">
            <Image
              src="/mastercard.svg"
              alt="Instagram"
              width={32}
              height={25}
            />
          </a>

          <a href="#">
            <Image src="/visa.svg" alt="Twitter" width={32} height={25} />
          </a>
          <a href="#">
            <Image src="/mastercard.svg" alt="Youtube" width={32} height={25} />
          </a>
        </div>
        <div className={styles.footer__footerLogo}>
          <div className={styles.footer__containerLogofooter}>
            <span className={styles.footer__footerTextLogo}>Powered by</span>
            <div className={styles.footer__containerLogofooter}>
              <a href="#">
                <Image
                  src="/vtexLogo.svg"
                  alt="Facebook"
                  width={67}
                  height={25}
                />
              </a>
            </div>
          </div>
          <div className={styles.footer__containerLogofooter}>
            <span className={styles.footer__footerTextLogo}> Developed by</span>
            <a href="#">
              <Image
                src="/maeztraLogoFooter.svg"
                alt="Instagram"
                width={118}
                height={25}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
