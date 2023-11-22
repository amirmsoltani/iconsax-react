import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      fill={color}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.93 13.74A6.133 6.133 0 0112 18.19c-3.41 0-6.19-2.78-6.19-6.19 0-3.41 2.78-6.19 6.19-6.19 1.35 0 2.64.43 3.72 1.24a.75.75 0 01-.9 1.2c-.82-.62-1.79-.94-2.82-.94-2.58 0-4.69 2.1-4.69 4.69a4.69 4.69 0 008.43 2.83.749.749 0 111.19.91zm.49-4.4c-.65 0-1.17-.52-1.17-1.17 0-.65.52-1.17 1.17-1.17.65 0 1.17.52 1.17 1.17 0 .65-.52 1.17-1.17 1.17z"
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M16.33 15.28a5.44 5.44 0 0 1-9.77-3.29c0-3.01 2.43-5.44 5.44-5.44 1.23 0 2.36.41 3.27 1.09M17.42 11.34a1.17 1.17 0 1 0 0-2.34 1.17 1.17 0 0 0 0 2.34Z"
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
      d="M12 18.189c-3.41 0-6.19-2.78-6.19-6.19 0-3.41 2.78-6.19 6.19-6.19 1.35 0 2.64.43 3.72 1.24a.75.75 0 0 1-.9 1.2c-.82-.61-1.79-.94-2.82-.94-2.58 0-4.69 2.1-4.69 4.69a4.69 4.69 0 0 0 8.43 2.83.749.749 0 1 1 1.19.91 6.162 6.162 0 0 1-4.93 2.45Z"
      fill={color}
    ></Path>
    <Path d="M17.42 11.34a1.17 1.17 0 1 0 0-2.34 1.17 1.17 0 0 0 0 2.34Z" fill={color}></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M16.3 15.3c-1 1.3-2.6 2.2-4.3 2.2-3 0-5.4-2.4-5.4-5.4 0-3 2.4-5.5 5.4-5.5 1.2 0 2.4.4 3.3 1.1M17.4 11.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
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
      d="M12 18.189c-3.41 0-6.19-2.78-6.19-6.19 0-3.41 2.78-6.19 6.19-6.19 1.35 0 2.64.43 3.72 1.24a.75.75 0 0 1-.9 1.2c-.82-.62-1.79-.94-2.82-.94-2.58 0-4.69 2.1-4.69 4.69a4.69 4.69 0 0 0 8.43 2.83.749.749 0 1 1 1.19.91 6.162 6.162 0 0 1-4.93 2.45Z"
      fill={color}
    ></Path>
    <Path
      d="M17.42 12.09a1.92 1.92 0 1 1 .001-3.841 1.92 1.92 0 0 1-.001 3.841Zm0-2.34c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42Z"
      fill={color}
    ></Path>
    <Path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      opacity=".4"
      d="M16.33 15.28a5.44 5.44 0 0 1-9.77-3.29c0-3.01 2.43-5.44 5.44-5.44 1.23 0 2.36.41 3.27 1.09M17.42 11.34a1.17 1.17 0 1 0 0-2.34 1.17 1.17 0 0 0 0 2.34Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
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

const Celsius = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Celsius.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Celsius.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Celsius.displayName = 'Celsius';
export default Celsius;