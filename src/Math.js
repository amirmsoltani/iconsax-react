import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-5.16 15.66c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22L8.25 17l-1.72 1.72c-.15.14-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.72-1.72-1.72-1.72a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.72 1.72 1.72-1.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.72 1.72 1.72 1.72Zm-.53-8.85H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.5c.41 0 .75.34.75.75s-.34.75-.75.75Zm7.5 9.75h-4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H18c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-3.75h-4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H18c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-6h-1.48v1.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.5H13.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.52v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5H18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M2.3 5.64h7.28M14.422 15.328h7.28M14.422 21.39h7.28M20.96 5.64h.74M14.422 5.64h3.27M18.09 9.27V2M9.578 14.73l-1.43 1.42M2.3 21.998l3.51-3.51M9.58 22 2.3 14.73"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
  </>
);

const Bulk = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      opacity=".4"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      fill={color}
    ></Path>
    <Path
      d="M10.5 8.809H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.5c.41 0 .75.34.75.75s-.34.75-.75.75ZM18 14.809h-4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H18c.41 0 .75.34.75.75s-.34.75-.75.75ZM18 18.559h-4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H18c.41 0 .75.34.75.75s-.34.75-.75.75ZM18 7.309h-1.48v-1.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5H13.5c-.41 0-.75.34-.75.75s.34.75.75.75h1.52v1.5c0 .41.34.75.75.75s.75-.34.75-.75v-1.5H18c.41 0 .75-.34.75-.75s-.34-.75-.75-.75ZM9.311 15.939l1.72-1.72c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.72 1.72-1.72-1.72a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.72 1.72-1.72 1.72c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.72-1.72 1.72 1.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-1.72-1.72Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M14.42 5.64h7.28M2.3 5.64h7.28M14.42 15.33h7.28M14.42 21.39h7.28M18.09 9.27V2M2.3 22l7.28-7.27M9.58 22 2.3 14.73"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
  </>
);

const Outline = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M21.7 6.39h-7.27c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.27c.41 0 .75.34.75.75s-.34.75-.75.75ZM9.58 6.39H2.3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.27c.41 0 .75.34.75.75s-.33.75-.74.75ZM21.7 16.078h-7.27c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.27c.41 0 .75.34.75.75s-.34.75-.75.75ZM21.7 22.14h-7.27c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.27c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M18.09 10.02c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v7.27c0 .42-.33.75-.75.75ZM2.298 22.752c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l7.27-7.27c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-7.27 7.27a.71.71 0 0 1-.53.22Z"
      fill={color}
    ></Path>
    <Path
      d="M9.58 22.752c-.19 0-.38-.07-.53-.22l-7.27-7.27a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l7.27 7.27c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M14.422 5.64h7.28"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M2.3 5.64h7.28M14.422 15.328h7.28M14.422 21.39h7.28"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M18.09 9.27V2M2.3 22l7.28-7.27M9.58 22 2.3 14.73"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
  </>
);

const chooseVariant = (variant, color) => {
  switch (variant) {
    case 'Bold':
      return <Bold color={color} />;

    case 'Broken':
      return <Broken color={color} />;

    case 'Bulk':
      return <Bulk color={color} />;

    case 'Linear':
      return <Linear color={color} />;

    case 'Outline':
      return <Outline color={color} />;

    case 'TwoTone':
      return <TwoTone color={color} />;

    default:
      return <Linear color={color} />;
  }
};

const Math = forwardRef(({ variant, color, size, ...rest }, ref) => {
  return (
    <Svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      {chooseVariant(variant, color)}
    </Svg>
  );
});
Math.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Math.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Math.displayName = 'Math';
export default Math;