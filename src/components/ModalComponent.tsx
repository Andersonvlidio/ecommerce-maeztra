import Image from "next/image";
import { useState } from "react";
import styles from "../styles/components/modalComponent.module.scss";
import isMobile from "../utils/IsMobile";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const ModalComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [opened, { open, close }] = useDisclosure(true);
  const isMobileScreen = isMobile(1024);

  const handleButtonClick = () => {
    setInputValue("");
  };
  return (
    <Modal
      opened={opened}
      onClose={close}
      size="auto"
      classNames={{
        body: styles.modalComponent__bodyModal,
        close: styles.modalComponent__closeModal,
        header: styles.modalComponent__headerModal,
        inner: styles.modalComponent__innerModal,
      }}
    >
      <div className={styles.modalComponent__mainModal}>
        {!isMobileScreen && (
          <div className={styles.modalComponent__containerImage}>
            <Image src="/modalImage.jpg" alt="logo" width={424} height={529} />
          </div>
        )}

        <div className={styles.modalComponent__containerModalComponent}>
          <Image
            src="/message.svg"
            alt="message"
            width={29}
            height={29}
            className={styles.modalComponent__icon}
          />
          <span className={styles.modalComponent__title}>
            Bem Vindo à MAEZTRA
          </span>
          <span className={styles.modalComponent__subtitle}>
            Receba em Primeira mão
          </span>
          <span className={styles.modalComponent__text}>
            desconto e ofertas exclusivas
          </span>
          <div className={styles.modalComponent__containerInput}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={styles.modalComponent__input}
              placeholder="Digite seu e-mail"
            />
            <button
              onClick={() => handleButtonClick()}
              className={styles.modalComponent__button}
            >
              Enviar
              <Image src="/send.svg" alt="arrow" width={12} height={20} />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
