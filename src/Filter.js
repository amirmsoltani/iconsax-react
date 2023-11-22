import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M20.6 4.102v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3v4.3c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-.47-.49a.995.995 0 0 1-.12-1.22l5.12-8.22c.18-.29.5-.47.85-.47h5.12c1.1 0 2 .9 2 2ZM10.35 3.632 6.8 9.322c-.34.55-1.12.63-1.57.16l-.93-.98c-.5-.5-.9-1.4-.9-2v-2.3c0-1.2.9-2.1 2-2.1h4.1c.78 0 1.26.86.85 1.53Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M18.6 2.102c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3v4.3c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2v-2.3c0-1.2.9-2.1 2-2.1h9M10.93 2.102 6 10.002"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
  </>
);

const Bulk = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      opacity=".4"
      d="M20.6 4.102v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3v4.3c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-1-1.05 5.82-9.35h5.68c1.1 0 2 .9 2 2Z"
      fill={color}
    ></Path>
    <Path
      d="m11.3 2.102-5.18 8.31-1.82-1.91c-.5-.5-.9-1.4-.9-2v-2.3c0-1.2.9-2.1 2-2.1h5.9Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M5.4 2.1h13.2c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3V19c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2V4.2c0-1.2.9-2.1 2-2.1ZM10.93 2.1 6 10"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
  </>
);

const Outline = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M10.94 22.652c-.48 0-.95-.12-1.39-.36a2.699 2.699 0 0 1-1.41-2.38v-5.3c0-.5-.33-1.25-.64-1.63l-3.74-3.96c-.63-.63-1.11-1.71-1.11-2.52v-2.3c0-1.6 1.21-2.85 2.75-2.85h13.2c1.52 0 2.75 1.23 2.75 2.75v2.2c0 1.05-.63 2.24-1.22 2.83l-4.33 3.83c-.42.35-.75 1.12-.75 1.74v4.3c0 .89-.56 1.92-1.26 2.34l-1.38.89c-.45.28-.96.42-1.47.42ZM5.4 2.852c-.7 0-1.25.59-1.25 1.35v2.3c0 .37.3 1.09.68 1.47l3.81 4.01c.51.63 1.01 1.68 1.01 2.62v5.3c0 .65.45.97.64 1.07.42.23.93.23 1.32-.01l1.39-.89c.28-.17.56-.71.56-1.07v-4.3c0-1.07.52-2.25 1.27-2.88l4.28-3.79c.34-.34.75-1.15.75-1.74v-2.19c0-.69-.56-1.25-1.25-1.25H5.4Z"
      fill={color}
    ></Path>
    <Path
      d="M6 10.751a.83.83 0 0 1-.4-.11.76.76 0 0 1-.24-1.04l4.93-7.9a.747.747 0 1 1 1.27.79l-4.93 7.9c-.14.23-.38.36-.63.36Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M5.4 2.102h13.2c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3v4.3c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2v-2.3c0-1.2.9-2.1 2-2.1Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M10.93 2.102 6 10.002"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
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

const Filter = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Filter.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Filter.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Filter.displayName = 'Filter';
export default Filter;
