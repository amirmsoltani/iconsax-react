import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm.33 15c-.18.06-.49.06-.67 0-1.56-.53-5.06-2.76-5.06-6.54 0-1.67 1.34-3.02 3-3.02.98 0 1.85.47 2.4 1.21.54-.73 1.42-1.21 2.4-1.21 1.66 0 3 1.35 3 3.02 0 3.78-3.5 6.01-5.07 6.54Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M12.33 17.45c-.18.06-.49.06-.67 0-1.56-.53-5.06-2.76-5.06-6.54 0-1.67 1.34-3.02 3-3.02.98 0 1.85.47 2.4 1.21.54-.73 1.42-1.21 2.4-1.21 1.66 0 3 1.35 3 3.02 0 3.78-3.5 6.01-5.07 6.54Z"
      stroke={color}
      strokeWidth={strokeWidth}
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
      d="M12.33 17.001c-.18.06-.49.06-.67 0-1.56-.53-5.06-2.76-5.06-6.54 0-1.67 1.34-3.02 3-3.02.98 0 1.85.47 2.4 1.21.54-.73 1.42-1.21 2.4-1.21 1.66 0 3 1.35 3 3.02 0 3.78-3.5 6.01-5.07 6.54Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12.33 17.45c-.18.06-.49.06-.67 0-1.56-.53-5.06-2.76-5.06-6.54 0-1.67 1.34-3.02 3-3.02.98 0 1.85.47 2.4 1.21.54-.73 1.42-1.21 2.4-1.21 1.66 0 3 1.35 3 3.02 0 3.78-3.5 6.01-5.07 6.54Z"
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
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
      fill={color}
    ></Path>
    <Path
      d="M12 18.25c-.21 0-.41-.03-.58-.09-2.15-.73-5.56-3.35-5.56-7.25 0-2.08 1.68-3.77 3.75-3.77.9 0 1.73.31 2.4.87.67-.56 1.51-.87 2.39-.87 2.07 0 3.75 1.69 3.75 3.77 0 3.89-3.41 6.51-5.57 7.25-.17.06-.38.09-.58.09Zm-2.4-9.6c-1.24 0-2.25 1.02-2.25 2.27 0 3.49 3.37 5.43 4.55 5.83.04.01.14.01.18 0 1.18-.4 4.55-2.34 4.55-5.83 0-1.25-1.01-2.27-2.25-2.27-.7 0-1.37.34-1.79.91-.28.38-.92.38-1.2 0a2.18 2.18 0 0 0-1.79-.91Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M12.33 17.45c-.18.06-.49.06-.67 0-1.56-.53-5.06-2.76-5.06-6.54 0-1.67 1.34-3.02 3-3.02.98 0 1.85.47 2.4 1.21.54-.73 1.42-1.21 2.4-1.21 1.66 0 3 1.35 3 3.02 0 3.78-3.5 6.01-5.07 6.54Z"
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

const HeartCircle = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
HeartCircle.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
HeartCircle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
HeartCircle.displayName = 'HeartCircle';
export default HeartCircle;