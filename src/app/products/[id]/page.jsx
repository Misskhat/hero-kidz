import React from "react";
import { getSingleProduct } from "../../../actions/server/product";
import {
  FaStar,
  FaShoppingCart,
  FaBolt,
  FaCheckCircle,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";
import Image from "next/image";

async function ProductDetails({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);
  // console.log(product);
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;
  return (
    <div className="max-w-7xl mx-auto py-12">
      {/* Top Section */}

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Image */}

        <div className="bg-base-200 rounded-2xl p-8">
          <div className="relative h-[500px]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Information */}

        <div>
          <h1 className="text-4xl font-bold">{product.title}</h1>

          <p className="text-lg text-base-content/60 mt-2">{product.bangla}</p>

          {/* Rating */}

          <div className="flex items-center gap-5 mt-5">
            <div className="flex items-center gap-2">
              <FaStar className="text-warning" />

              <span className="font-semibold">{product.ratings}</span>

              <span className="text-base-content/60">
                ({product.reviews} Reviews)
              </span>
            </div>

            <div className="badge badge-success">Sold {product.sold}</div>
          </div>

          {/* Price */}

          <div className="mt-8">
            <div className="flex items-center gap-4">
              <span className="text-5xl font-bold text-primary">
                ৳{discountedPrice}
              </span>

              <span className="line-through text-xl opacity-50">
                ৳{product.price}
              </span>

              <div className="badge badge-error">{product.discount}% OFF</div>
            </div>
          </div>

          {/* Features */}

          <div className="mt-10 space-y-3">
            {product.info.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-success" />

                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Service */}

          <div className="mt-10 space-y-4">
            <div className="flex gap-3 items-center">
              <FaTruck className="text-primary text-xl" />

              <div>
                <p className="font-semibold">Fast Delivery</p>

                <p className="text-sm opacity-60">Delivered within 2-5 days</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <FaShieldAlt className="text-success text-xl" />

              <div>
                <p className="font-semibold">Safe for Kids</p>

                <p className="text-sm opacity-60">
                  Made from non-toxic material
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}

          <div className="grid grid-cols-2 gap-5 mt-10">
            <button className="btn btn-primary btn-lg">
              <FaShoppingCart />
              Add to Cart
            </button>

            <button className="btn btn-secondary btn-lg">
              <FaBolt />
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Description */}

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-6">Product Description</h2>

        <div className="bg-base-200 rounded-xl p-8 whitespace-pre-line leading-8">
          {product.description}
        </div>
      </div>

      {/* FAQ */}

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {product.qna.map((item, index) => (
            <div key={index} className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="faq" defaultChecked={index === 0} />

              <div className="collapse-title text-lg font-semibold">
                {item.question}
              </div>

              <div className="collapse-content">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
