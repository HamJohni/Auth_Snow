import qr from "./qr.module.scss";
import { Avatar } from "@chakra-ui/react";

const Qr = () => {
  return (
    <section className={qr.qr}>
      <div className={qr.qr__content}>
        <div className={qr.qr__content_top}>
          <Avatar size="2xl" name="Timur Faiziev" />

          <p className={qr.qr__content_name}>Timur Faiziev</p>
        </div>

        <div className={qr.qr__content_bottom}>
          <button className={qr.qr__content_bottom_btn}>Профиль</button>
          <button className={qr.qr__content_bottom_btn}>Сканировать</button>
        </div>
      </div>
    </section>
  );
};

export default Qr;
