"use client";

import Image from "next/image";
import { FaStar, FaShoppingCart, FaEye } from "react-icons/fa";

export default function ProductCard({ product }) {
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-200">
      {/* Image */}
      <figure className="relative h-60 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />

        {product.discount > 0 && (
          <div className="badge badge-error absolute top-3 right-3 text-white">
            -{product.discount}%
          </div>
        )}
      </figure>

      <div className="card-body p-5">
        {/* Title */}
        <h2 className="card-title text-lg line-clamp-2">{product.title}</h2>

        {/* Short Description */}
        <p className="text-sm text-base-content/70 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <FaStar className="text-warning" />
            <span className="font-medium">{product.ratings}</span>
            <span className="text-xs text-base-content/60">
              ({product.reviews} Reviews)
            </span>
          </div>

          <span className="text-xs text-success font-medium">
            Sold {product.sold}
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">
            ৳{discountedPrice}
          </span>

          {product.discount > 0 && (
            <span className="line-through text-base-content/50">
              ৳{product.price}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="card-actions mt-5 grid grid-cols-2 gap-3">
          <button className="btn btn-primary">
            <FaShoppingCart />
            Add Cart
          </button>

          <button className="btn btn-outline">
            <FaEye />
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
