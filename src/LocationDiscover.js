import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm-1.5 14.13c-1.45 0-2.62-1.18-2.62-2.62 0-3.1 2.52-5.62 5.62-5.62 1.45 0 2.62 1.18 2.62 2.62 0 3.09-2.52 5.62-5.62 5.62Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M14.71 14.03c.8-.96 1.29-2.19 1.29-3.53C16 9.13 14.87 8 13.5 8 10.47 8 8 10.48 8 13.5c0 1.37 1.12 2.5 2.5 2.5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      fill={color}
    ></Path>
    <Path
      d="M14.327 14.326c1.882-1.882 2.366-4.45 1.081-5.734-1.284-1.285-3.852-.8-5.734 1.082-1.882 1.882-2.367 4.45-1.082 5.734 1.285 1.285 3.852.8 5.735-1.082Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
    ></Path>
    <Path
      d="M13.5 8C10.47 8 8 10.48 8 13.5c0 1.37 1.12 2.5 2.5 2.5 3.02 0 5.5-2.48 5.5-5.5C16 9.13 14.87 8 13.5 8Z"
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
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
      fill={color}
    ></Path>
    <Path
      d="M10.5 16.75c-1.79 0-3.25-1.46-3.25-3.25 0-3.45 2.8-6.25 6.25-6.25 1.79 0 3.25 1.46 3.25 3.25 0 3.45-2.8 6.25-6.25 6.25Zm3-8c-2.62 0-4.75 2.13-4.75 4.75 0 .96.79 1.75 1.75 1.75 2.62 0 4.75-2.13 4.75-4.75 0-.96-.79-1.75-1.75-1.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth={strokeWidth}
      d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth={strokeWidth}
      d="M13.5 8C10.47 8 8 10.48 8 13.5c0 1.37 1.12 2.5 2.5 2.5 3.02 0 5.5-2.48 5.5-5.5C16 9.13 14.87 8 13.5 8z"
      opacity=".4"
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

const LocationDiscover = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
LocationDiscover.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
LocationDiscover.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
LocationDiscover.displayName = 'LocationDiscover';
export default LocationDiscover;