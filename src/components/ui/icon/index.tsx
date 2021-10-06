import React, { CSSProperties } from 'react';

export interface IconProps {
  fill?: string;
  icon: string;
  className?: string;
  style?: CSSProperties;
  width?: number;
  height?: number;
  viewBox?: string;
}

const Icon = (props: IconProps) => {
  const {
    fill,
    icon,
    className = 'icon',
    style,
    width = 20,
    height = 20,
    viewBox = '0 0 16 16',
  } = props;

  return (
    <svg 
      viewBox={viewBox}
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path style={{ fill }} d={icon} />
    </svg>
  );
};

export default Icon;
