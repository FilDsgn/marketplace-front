import block from "bem-cn-lite";
import "./header.scss";
import SearchForm from "../searchForm/searchForm";

const b = block("header");

export const Header = () => {
  return (
    <header className={b()}>
      <h2 className={b("logo")}>React</h2>
      <div className={b("location-wrapper")}>
        <div className={b("location-icon")}></div>
        <span className={b("location-text")}>Александровск-Са...</span>
      </div>
      <SearchForm
        onSearch={() => {}}
        placeholder="Поиск бренда, товара, категории..."
      />
      <div className={b("basket-button")}>
        <div className={b("basket-button-counter")}>10+</div>
      </div>
      <img
        className={b("user-avatar")}
        src={require("../../../assets/images/user-avatar.jpg")}
        alt=""
      />
    </header>
  );
};
