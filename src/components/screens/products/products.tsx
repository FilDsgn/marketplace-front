import block from "bem-cn-lite";
import "./products.scss";
import { productsApi } from "../../../app/api/productsApi";
import { ICategory } from "../../../app/shared/types/category.interface";
import { ProductCard } from "../../ui/productCard/productCard";

const b = block("products");

export const Products = () => {
  const { data: categoriesData } = productsApi.useGetCategoriesQuery({});
  const { data: productsData } = productsApi.useGetProductsQuery({});
  const bgColors = ["#2967FF", "#58CF18", "#FFA601", "#FF7CB4", "#FF2D87"];
  console.log(categoriesData);
  return (
    <main className={b()}>
      <div className={b("title-wrapper")}>
        <h2 className={b("title")}>Категории товаров</h2>
        <button className={b("settings-button")}>Настройки</button>
      </div>
      <div className={b("categories-list")}>
        {categoriesData &&
          categoriesData.length &&
          categoriesData.map((category: ICategory) => (
            <button
              key={category.id}
              className={b("category-item")}
              style={{
                backgroundColor:
                  bgColors[
                    category.id >= bgColors.length
                      ? category.id - bgColors.length
                      : category.id - 1
                  ],
              }}
            >
              {category.name}
            </button>
          ))}
      </div>
      <div className={b("products-list")}>
        {productsData &&
          productsData.length &&
          productsData.map((product: any) => (
            <ProductCard name={product.name} id={product.id} key={product.id} />
          ))}
      </div>
    </main>
  );
};
