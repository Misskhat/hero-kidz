export default function ProductCardSkeleton() {
  return (
    <div className="card bg-base-100 shadow-lg border border-base-200 animate-pulse">
      {/* Image Skeleton */}
      <div className="h-60 bg-base-300 rounded-t-xl"></div>

      <div className="card-body p-5">
        {/* Title */}
        <div className="h-6 bg-base-300 rounded w-3/4"></div>

        {/* Description */}
        <div className="space-y-2 mt-3">
          <div className="h-4 bg-base-300 rounded"></div>
          <div className="h-4 bg-base-300 rounded w-5/6"></div>
        </div>

        {/* Rating */}
        <div className="flex justify-between items-center mt-4">
          <div className="h-4 bg-base-300 rounded w-24"></div>
          <div className="h-4 bg-base-300 rounded w-16"></div>
        </div>

        {/* Price */}
        <div className="flex gap-3 mt-4">
          <div className="h-7 w-24 bg-base-300 rounded"></div>
          <div className="h-5 w-16 bg-base-300 rounded"></div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-5">
          <div className="h-11 bg-base-300 rounded-lg"></div>
          <div className="h-11 bg-base-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
