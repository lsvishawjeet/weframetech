import React from 'react';

const CircularProgress = ({ percentage = 0, size = 160 }) => {
  const radius = size / 2;
  const innerSize = size * 0.8;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* Background ring with dynamic progress */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(#4aa4dc ${percentage * 3.6}deg, #e5e7eb 0deg)`
        }}
      ></div>

      {/* Inner white circle to hollow out center */}
      <div
        className="absolute bg-white rounded-full flex items-center justify-center"
        style={{
          width: `${innerSize}px`,
          height: `${innerSize}px`,
        }}
      >
        <span className="text-xl font-bold text-gray-800">{percentage}%</span>
      </div>
    </div>
  );
};

export default CircularProgress;
