import ProductCardSkeleton from "../../components/productCard/ProductCardSkeleton";

export default function Loading() {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold">Our Products</h2>

      <div className="py-10 grid md:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
