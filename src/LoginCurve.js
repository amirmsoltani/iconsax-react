import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      fill={color}
      d="M16.8 2h-2.6C11 2 9 4 9 7.2v4.05h4.44l-2.07-2.07a.742.742 0 01-.22-.53c0-.19.07-.38.22-.53.29-.29.77-.29 1.06 0l3.35 3.35c.29.29.29.77 0 1.06l-3.35 3.35c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l2.07-2.07H9v4.05C9 20 11 22 14.2 22h2.59c3.2 0 5.2-2 5.2-5.2V7.2C22 4 20 2 16.8 2zM2.75 11.25c-.41 0-.75.34-.75.75s.34.75.75.75H9v-1.5H2.75z"
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M2 12h12.88M12.65 8.65L16 12l-3.35 3.35M21.5 13v2.26c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26"
    ></Path>
  </>
);

const Bulk = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      fill={color}
      d="M9 7.2v9.59C9 20 11 22 14.2 22h2.59c3.2 0 5.2-2 5.2-5.2V7.2C22 4 20 2 16.8 2h-2.6C11 2 9 4 9 7.2z"
      opacity=".4"
    ></Path>
    <Path
      fill={color}
      d="M12.43 8.12l3.35 3.35c.29.29.29.77 0 1.06l-3.35 3.35c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l2.07-2.07H2.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.69l-2.07-2.07a.742.742 0 01-.22-.53c0-.19.07-.38.22-.53.29-.3.76-.3 1.06 0z"
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
      d="M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M2 12h12.88"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M12.65 8.65L16 12l-3.35 3.35"
    ></Path>
  </>
);

const Outline = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      fill={color}
      d="M15.24 22.27h-.13c-4.44 0-6.58-1.75-6.95-5.67-.04-.41.26-.78.68-.82.41-.04.78.27.82.68.29 3.14 1.77 4.31 5.46 4.31h.13c4.07 0 5.51-1.44 5.51-5.51V8.74c0-4.07-1.44-5.51-5.51-5.51h-.13c-3.71 0-5.19 1.19-5.46 4.39-.05.41-.39.72-.82.68a.751.751 0 01-.69-.81c.34-3.98 2.49-5.76 6.96-5.76h.13c4.91 0 7.01 2.1 7.01 7.01v6.52c0 4.91-2.1 7.01-7.01 7.01z"
    ></Path>
    <Path
      fill={color}
      d="M14.88 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.88a.749.749 0 110 1.5z"
    ></Path>
    <Path
      fill={color}
      d="M12.65 16.1c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L14.94 12l-2.82-2.82a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.35 3.35c.29.29.29.77 0 1.06l-3.35 3.35c-.15.15-.34.22-.53.22z"
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99"
    ></Path>
    <G opacity=".4">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M2 12h12.88M12.65 8.65L16 12l-3.35 3.35"
      ></Path>
    </G>
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

const LoginCurve = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
LoginCurve.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
LoginCurve.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
LoginCurve.displayName = 'LoginCurve';
export default LoginCurve;
