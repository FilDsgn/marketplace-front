import block from "bem-cn-lite";
import "./sidebar.scss";
import { FC, PropsWithChildren } from "react";

const b = block("sidebar");

export const Sidebar: FC<PropsWithChildren> = ({ children }) => {
  return <aside className={b()}>{children}</aside>;
};
