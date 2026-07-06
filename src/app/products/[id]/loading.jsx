import React from "react";
import ProductDetailsSkeleton from "../../../components/productCard/ProductDetailsSkeleton";

function loading() {
  return (
    <div>
      <ProductDetailsSkeleton></ProductDetailsSkeleton>
    </div>
  );
}

export default loading;
