import { useState } from "react";
import styles from "@/styles/components/newsletter.module.scss";

const Newsletter = () => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    setInputValue("");
  };

  return (
    <div className={styles.newsletter__containerNewsletter}>
      <span className={styles.newsletter__title}>Recebe Nossa Newsletter</span>
      <div className={styles.newsletter__containerInput}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={styles.newsletter__input}
          placeholder="Digite seu e-mail"
        />
        <button
          onClick={() => handleButtonClick()}
          className={styles.newsletter__button}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};
export default Newsletter;
