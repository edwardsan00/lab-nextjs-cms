import { FC } from "react";
import style from "./style.module.css";

type NotificationProps = {
  title: string;
};

const Notification: FC<NotificationProps> = ({ title }) => {
  return (
    <div className={style.notification}>
      <div className={style.notification__wrapper}>
        <p className={style.notification__text}>{title}</p>
      </div>
    </div>
  );
};

export default Notification;
