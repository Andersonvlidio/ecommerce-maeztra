import styles from "../styles/components/notification-bar.module.scss";

const NotificationBar = () => {
  return (
    <div className={styles.notificationBar__containerNotificationBar}>
      <span className={styles.notificationBar__text}>
        Acompanhe as melhores promoções disponíveis aqui na Maeztra.
      </span>
    </div>
  );
};

export default NotificationBar;
