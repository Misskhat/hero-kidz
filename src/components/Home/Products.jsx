import React from "react";
import { getAllProducts } from "../../actions/server/product";
import ProductCard from "../productCard/ProductCard";

async function Products() {
  const products = await getAllProducts();
  const formattedProducts = products.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));
  // console.log(formattedProducts);
  return (
    <div>
      <div>
        <h2 className="text-center text-4xl font-bold">Our Products</h2>
      </div>
      <div className="py-10 grid md:grid-cols-3 gap-5">
        {formattedProducts.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
}

export default Products;
