export default function ProductDetailsSkeleton() {
  return (
    <div className="max-w-7xl mx-auto py-12 animate-pulse">
      {/* Top Section */}
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Image */}
        <div className="bg-base-200 rounded-2xl p-8">
          <div className="h-[500px] rounded-xl bg-base-300"></div>
        </div>

        {/* Product Info */}
        <div>
          {/* Title */}
          <div className="h-10 w-4/5 bg-base-300 rounded"></div>

          {/* Bangla Title */}
          <div className="h-6 w-2/3 bg-base-300 rounded mt-4"></div>

          {/* Rating */}
          <div className="flex gap-6 mt-8">
            <div className="h-5 w-40 bg-base-300 rounded"></div>
            <div className="h-5 w-24 bg-base-300 rounded"></div>
          </div>

          {/* Price */}
          <div className="flex gap-4 items-center mt-8">
            <div className="h-12 w-40 bg-base-300 rounded"></div>
            <div className="h-8 w-24 bg-base-300 rounded"></div>
            <div className="h-8 w-20 bg-base-300 rounded"></div>
          </div>

          {/* Features */}
          <div className="mt-10 space-y-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-base-300"></div>
                <div className="h-5 w-64 bg-base-300 rounded"></div>
              </div>
            ))}
          </div>

          {/* Delivery Info */}
          <div className="mt-10 space-y-5">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-base-300"></div>

                <div className="space-y-2">
                  <div className="h-5 w-40 bg-base-300 rounded"></div>
                  <div className="h-4 w-56 bg-base-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-5 mt-10">
            <div className="h-14 rounded-xl bg-base-300"></div>
            <div className="h-14 rounded-xl bg-base-300"></div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-20">
        <div className="h-10 w-60 bg-base-300 rounded mb-8"></div>

        <div className="bg-base-200 rounded-xl p-8 space-y-4">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className={`h-4 rounded bg-base-300 ${
                index === 7 ? "w-3/4" : "w-full"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-20">
        <div className="h-10 w-72 bg-base-300 rounded mb-8"></div>

        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-base-200 rounded-xl p-6">
              <div className="h-6 w-3/4 bg-base-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
