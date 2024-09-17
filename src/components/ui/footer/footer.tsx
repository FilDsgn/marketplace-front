import block from "bem-cn-lite";
import "./footer.scss";

const b = block("footer");

export const Footer = () => {
  return (
    <footer className={b()}>
      <div className={b("container")}>
        <h3 className={b("logo")}>React</h3>
        <div className={b("links-container")}>
          <p className={b("links-title")}>Присоединяйтесь к нам</p>
          <div
            className={`${b("links-icon-wrapper")} ${b(
              "links-icon-wrapper_social"
            )}`}
          >
            <div className={`${b("link-icon")} ${b("link-icon_fb")}`}></div>
            <div className={`${b("link-icon")} ${b("link-icon_vk")}`}></div>
            <div className={`${b("link-icon")} ${b("link-icon_ig")}`}></div>
          </div>
        </div>
        <div className={b("links-container")}>
          <p className={b("links-title")}>Устанавливайте приложение</p>
          <div
            className={`${b("links-icon-wrapper")} ${b(
              "links-icon-wrapper_store"
            )}`}
          >
            <div className={`${b("link-icon")} ${b("link-icon_gp")}`}></div>
            <div className={`${b("link-icon")} ${b("link-icon_as")}`}></div>
          </div>
        </div>
      </div>
      <nav className={b("nav")}>
        <ul className={b("nav-list")}>
          <li className={b("nav-item")}>© Sionic</li>
          <li className={b("nav-item")}>Правовая информация</li>
          <li className={b("nav-item")}>Политика конфиденциальности</li>
        </ul>
      </nav>
    </footer>
  );
};
