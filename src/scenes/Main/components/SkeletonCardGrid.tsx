import React from "react";

const SkeletonCardGrid: React.FC = () => {
  return (
    <div>
      <div className="relative">
        <div className="h-40 w-full bg-gray-300 animate-pulse" />
        <div className="absolute bottom-2 right-2 bg-gray-400 text-white p-5 rounded-full animate-pulse" />
      </div>
      <div className="bg-white py-2 px-2">
        <div className="font-semibold text-xl animate-pulse h-3 w-full bg-gray-300 rounded" />
        <div className="flex gap-1 mt-1">
          <div className="font-semibold text-xl animate-pulse h-3 w-1/3 bg-gray-300 rounded" />
          <div className="font-semibold text-xl animate-pulse h-3 w-2/3 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCardGrid;
