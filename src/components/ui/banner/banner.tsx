import block from "bem-cn-lite";
import "./banner.scss";

const b = block("banner");

export const Banner = () => {
  return (
    <div className={b()}>
      <img
        className={b("image")}
        src={require("../../../assets/images/banner-img.png")}
      />
      <div className={b("wrapper")}>
        <h3 className={b("title")}>Получай товары БЕСПЛАТНО!</h3>
        <button className={b("button")}>Узнать подробнее</button>
      </div>
    </div>
  );
};
