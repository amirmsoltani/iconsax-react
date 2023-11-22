import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M17.1 2h-4.2C9.817 2 8.37 3.094 8.07 5.739c-.064.553.395 1.011.952 1.011H11.1c4.2 0 6.15 1.95 6.15 6.15v2.078c0 .557.457 1.015 1.01.952C20.907 15.63 22 14.183 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z"
      fill={color}
    ></Path>
    <Path
      d="M11.1 8H6.9C3.4 8 2 9.4 2 12.9v4.2C2 20.6 3.4 22 6.9 22h4.2c3.5 0 4.9-1.4 4.9-4.9v-4.2C16 9.4 14.6 8 11.1 8Zm1.19 5.65-3.71 3.71a.71.71 0 0 1-.51.21.71.71 0 0 1-.51-.21L5.7 15.5a.712.712 0 0 1 0-1.01c.28-.28.73-.28 1.01 0l1.35 1.35 3.21-3.21c.28-.28.73-.28 1.01 0s.29.74.01 1.02Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M22 6.9C22 3.4 20.6 2 17.1 2h-4.2C9.4 2 8 3.4 8 6.9V8h3.1c3.5 0 4.9 1.4 4.9 4.9V16h1.1c3.5 0 4.9-1.4 4.9-4.9"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M2 17.1C2 20.6 3.4 22 6.9 22h4.2c3.5 0 4.9-1.4 4.9-4.9v-4.2C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m6.08 15 1.95 1.95 3.89-3.9"
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
      d="M17.1 2h-4.2C9.45 2 8.05 3.37 8.01 6.75h3.09c4.2 0 6.15 1.95 6.15 6.15v3.09c3.38-.04 4.75-1.44 4.75-4.89V6.9C22 3.4 20.6 2 17.1 2Z"
      fill={color}
    ></Path>
    <Path
      d="M11.1 8H6.9C3.4 8 2 9.4 2 12.9v4.2C2 20.6 3.4 22 6.9 22h4.2c3.5 0 4.9-1.4 4.9-4.9v-4.2C16 9.4 14.6 8 11.1 8Zm1.19 5.65-3.71 3.71a.71.71 0 0 1-.51.21.71.71 0 0 1-.51-.21L5.7 15.5a.712.712 0 0 1 0-1.01c.28-.28.73-.28 1.01 0l1.35 1.35 3.21-3.21c.28-.28.73-.28 1.01 0s.29.74.01 1.02Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2h-4.2C9.4 2 8 3.4 8 6.9V8h3.1c3.5 0 4.9 1.4 4.9 4.9V16h1.1c3.5 0 4.9-1.4 4.9-4.9z"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M16 17.1v-4.2C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9v4.2C2 20.6 3.4 22 6.9 22h4.2c3.5 0 4.9-1.4 4.9-4.9z"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M6.08 15l1.95 1.95 3.89-3.9"
    ></Path>
  </>
);

const Outline = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M17.1 1.25h-4.2c-3.91 0-5.65 1.74-5.65 5.65V8c0 .41.34.75.75.75h3.1c3.1 0 4.15 1.05 4.15 4.15V16c0 .41.34.75.75.75h1.1c3.91 0 5.65-1.74 5.65-5.65V6.9c0-3.91-1.74-5.65-5.65-5.65Zm-8.35 6V6.9c0-3.1 1.05-4.15 4.15-4.15h4.2c3.1 0 4.15 1.05 4.15 4.15v4.2c0 3.1-1.05 4.15-4.15 4.15h-.35V12.9c0-3.91-1.74-5.65-5.65-5.65H8.75Z"
      fill={color}
    ></Path>
    <Path
      d="M11.1 7.25H6.9c-3.91 0-5.65 1.74-5.65 5.65v4.2c0 3.91 1.74 5.65 5.65 5.65h4.2c3.91 0 5.65-1.74 5.65-5.65v-4.2c0-3.91-1.74-5.65-5.65-5.65Zm-4.2 14c-3.1 0-4.15-1.05-4.15-4.15v-4.2c0-3.1 1.05-4.15 4.15-4.15h4.2c3.1 0 4.15 1.05 4.15 4.15v4.2c0 3.1-1.05 4.15-4.15 4.15H6.9Z"
      fill={color}
    ></Path>
    <Path
      d="M8.03 17.7c-.19 0-.38-.07-.53-.22l-1.95-1.95a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.42 1.42 3.36-3.36c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.9 3.89c-.14.14-.33.22-.52.22Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      opacity=".4"
      d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2h-4.2C9.4 2 8 3.4 8 6.9V8h3.1c3.5 0 4.9 1.4 4.9 4.9V16h1.1c3.5 0 4.9-1.4 4.9-4.9Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M16 17.1v-4.2C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9v4.2C2 20.6 3.4 22 6.9 22h4.2c3.5 0 4.9-1.4 4.9-4.9Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m6.08 15 1.95 1.95 3.89-3.9"
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

const CopySuccess = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
CopySuccess.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CopySuccess.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
CopySuccess.displayName = 'CopySuccess';
export default CopySuccess;
