import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM17 17.5h-3.1c-.3 0-.57-.17-.69-.45a.75.75 0 0 1 .13-.81l1.62-1.79c.67-.75 1.05-1.7 1.05-2.68 0-1-.41-1.94-1.16-2.65A4.182 4.182 0 0 0 12 8c-1.06 0-2.1.41-2.85 1.12-.75.71-1.16 1.65-1.16 2.65 0 .98.37 1.93 1.05 2.68l1.62 1.79a.753.753 0 0 1-.56 1.26H7c-.41 0-.75-.34-.75-.75S6.59 16 7 16h1.41l-.49-.54a5.507 5.507 0 0 1-1.43-3.69c0-1.39.59-2.76 1.63-3.74C9.16 7.04 10.53 6.5 12 6.5c1.47 0 2.84.54 3.88 1.53 1.03.98 1.63 2.35 1.63 3.74 0 1.35-.51 2.66-1.43 3.69l-.49.54H17c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M2 12.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M17 16.75h-3.1l1.62-1.79c.8-.89 1.24-2.02 1.24-3.18 0-1.2-.5-2.35-1.39-3.2-.89-.85-2.1-1.33-3.37-1.33-1.26 0-2.47.48-3.37 1.33-.89.85-1.39 2-1.39 3.2 0 1.17.44 2.3 1.24 3.18l1.62 1.79H7"
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
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      fill={color}
    ></Path>
    <Path
      d="M17 17.5h-3.1c-.3 0-.57-.17-.69-.45a.75.75 0 0 1 .13-.81l1.62-1.79c.67-.75 1.05-1.7 1.05-2.68 0-1-.41-1.94-1.16-2.65A4.182 4.182 0 0 0 12 8c-1.06 0-2.1.41-2.85 1.12-.75.71-1.16 1.65-1.16 2.65 0 .98.37 1.93 1.05 2.68l1.62 1.79a.753.753 0 0 1-.56 1.26H7c-.41 0-.75-.34-.75-.75S6.59 16 7 16h1.41l-.49-.54a5.507 5.507 0 0 1-1.43-3.69c0-1.39.59-2.76 1.63-3.74A5.595 5.595 0 0 1 12 6.5c1.46 0 2.84.54 3.88 1.53 1.03.98 1.63 2.35 1.63 3.74 0 1.35-.51 2.66-1.43 3.69l-.49.54H17c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
      d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7z"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M17 16.75h-3.1l1.62-1.79c.8-.89 1.24-2.02 1.24-3.18 0-1.2-.5-2.35-1.39-3.2-.89-.85-2.1-1.33-3.37-1.33-1.26 0-2.47.48-3.37 1.33-.89.85-1.39 2-1.39 3.2 0 1.17.44 2.3 1.24 3.18l1.62 1.79H7"
    ></Path>
  </>
);

const Outline = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      fill={color}
    ></Path>
    <Path
      d="M17 17.5h-3.1c-.3 0-.57-.17-.69-.45a.75.75 0 0 1 .13-.81l1.62-1.79c.67-.75 1.05-1.7 1.05-2.68 0-1-.41-1.94-1.16-2.65A4.182 4.182 0 0 0 12 8c-1.06 0-2.1.41-2.85 1.12-.75.71-1.16 1.65-1.16 2.65 0 .98.37 1.93 1.05 2.68l1.62 1.79a.753.753 0 0 1-.56 1.26H7c-.41 0-.75-.34-.75-.75S6.59 16 7 16h1.41l-.49-.54a5.507 5.507 0 0 1-1.43-3.69c0-1.39.59-2.76 1.63-3.74A5.595 5.595 0 0 1 12 6.5c1.46 0 2.84.54 3.88 1.53 1.03.98 1.63 2.35 1.63 3.74 0 1.35-.51 2.66-1.43 3.69l-.49.54H17c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M17 16.75h-3.1l1.62-1.79c.8-.89 1.24-2.02 1.24-3.18 0-1.2-.5-2.35-1.39-3.2-.89-.85-2.1-1.33-3.37-1.33-1.26 0-2.47.48-3.37 1.33-.89.85-1.39 2-1.39 3.2 0 1.17.44 2.3 1.24 3.18l1.62 1.79H7"
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

const OmegaSquare = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
OmegaSquare.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
OmegaSquare.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
OmegaSquare.displayName = 'OmegaSquare';
export default OmegaSquare;
