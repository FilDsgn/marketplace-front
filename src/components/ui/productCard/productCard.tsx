import block from "bem-cn-lite";
import "./productCard.scss";
import { FC } from "react";
import { productsApi } from "../../../app/api/productsApi";

const b = block("product-card");

interface ProductCardProps {
  name: string;
  id: number;
}

export const ProductCard: FC<ProductCardProps> = ({ name, id }) => {
  const { data: productImage } = productsApi.useGetImagesQuery({
    productId: id,
  });
  return (
    <article className={b()}>
      <img
        className={b("image")}
        src={
          productImage && productImage.image_url ? productImage.image_url : ""
        }
      />
      <h3 className={b("title")}>
        {name.length > 45 ? name.slice(0, 45).trim() + "..." : name}
      </h3>
      <span className={b("price")}>от 350 000 ₽</span>
      <button className={b("button")}>Добавить в корзину</button>
    </article>
  );
};
