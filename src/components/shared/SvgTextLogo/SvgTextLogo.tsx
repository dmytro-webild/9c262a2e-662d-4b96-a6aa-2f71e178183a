import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  width?: number;
  height?: number;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  width = 200,
  height = 100,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="48"
        fontWeight="bold"
        fill="url(#textGradient)"
        fontFamily="Arial, sans-serif"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
