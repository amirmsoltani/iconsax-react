import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      fill={color}
      d="M9 18.75H3c-.96 0-1.75-.79-1.75-1.75V7c0-.96.79-1.75 1.75-1.75h5c2.07 0 3.75 1.68 3.75 3.75 0 1.03-.42 1.96-1.09 2.64 1.24.61 2.09 1.89 2.09 3.36 0 2.07-1.68 3.75-3.75 3.75zm-6.25-6V17c0 .14.11.25.25.25h6c1.24 0 2.25-1.01 2.25-2.25S10.24 12.75 9 12.75H2.75zm0-1.5H8c1.24 0 2.25-1.01 2.25-2.25S9.24 6.75 8 6.75H3c-.14 0-.25.11-.25.25v4.25zM19.67 18.75H18c-2.62 0-4.75-2.13-4.75-4.75S15.38 9.25 18 9.25s4.75 2.13 4.75 4.75c0 .41-.34.75-.75.75h-7.16c.34 1.43 1.63 2.5 3.16 2.5h1.67c.41 0 .75.34.75.75s-.34.75-.75.75zm-4.83-5.5h6.33a3.258 3.258 0 00-3.16-2.5 3.27 3.27 0 00-3.17 2.5zM19.5 8.25h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75z"
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M2 7c0-.55.45-1 1-1h5c1.66 0 3 1.34 3 3s-1.34 3-3 3H2h7c1.66 0 3 1.34 3 3s-1.34 3-3 3H3c-.55 0-1-.45-1-1v-6.03M14 14h8c0-2.21-1.79-4-4-4s-4 1.79-4 4Zm0 0c0 2.21 1.79 4 4 4h1.67M19.5 7.5h-3"
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
      d="M9 18.75H3c-.96 0-1.75-.79-1.75-1.75V7c0-.96.79-1.75 1.75-1.75h5c2.07 0 3.75 1.68 3.75 3.75 0 1.03-.42 1.96-1.09 2.64 1.24.61 2.09 1.89 2.09 3.36 0 2.07-1.68 3.75-3.75 3.75Zm-6.25-6V17c0 .14.11.25.25.25h6c1.24 0 2.25-1.01 2.25-2.25S10.24 12.75 9 12.75H2.75Zm0-1.5H8c1.24 0 2.25-1.01 2.25-2.25S9.24 6.75 8 6.75H3c-.14 0-.25.11-.25.25v4.25Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M19.67 18.75H18c-2.62 0-4.75-2.13-4.75-4.75S15.38 9.25 18 9.25s4.75 2.13 4.75 4.75c0 .41-.34.75-.75.75h-7.16c.34 1.43 1.63 2.5 3.16 2.5h1.67c.41 0 .75.34.75.75s-.34.75-.75.75Zm-4.83-5.5h6.33a3.258 3.258 0 0 0-3.16-2.5 3.27 3.27 0 0 0-3.17 2.5Z"
      fill={color}
    ></Path>
    <Path
      d="M19.5 8.25h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M2 12h7c1.7 0 3 1.3 3 3s-1.3 3-3 3H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h5c1.7 0 3 1.3 3 3s-1.3 3-3 3H2Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
    ></Path>
    <Path
      d="M14 14h8c0-2.2-1.8-4-4-4s-4 1.8-4 4Zm0 0c0 2.2 1.8 4 4 4h1.7M19.5 7.5h-3"
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
      d="M9 18.75H3c-.96 0-1.75-.79-1.75-1.75V7c0-.96.79-1.75 1.75-1.75h5c2.07 0 3.75 1.68 3.75 3.75 0 1.03-.42 1.96-1.09 2.64 1.24.61 2.09 1.89 2.09 3.36 0 2.07-1.68 3.75-3.75 3.75Zm-6.25-6V17c0 .14.11.25.25.25h6c1.24 0 2.25-1.01 2.25-2.25S10.24 12.75 9 12.75H2.75Zm0-1.5H8c1.24 0 2.25-1.01 2.25-2.25S9.24 6.75 8 6.75H3c-.14 0-.25.11-.25.25v4.25ZM19.67 18.75H18c-2.62 0-4.75-2.13-4.75-4.75S15.38 9.25 18 9.25s4.75 2.13 4.75 4.75c0 .41-.34.75-.75.75h-7.16c.34 1.43 1.63 2.5 3.16 2.5h1.67c.41 0 .75.34.75.75s-.34.75-.75.75Zm-4.83-5.5h6.33a3.258 3.258 0 0 0-3.16-2.5 3.27 3.27 0 0 0-3.17 2.5ZM19.5 8.25h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M2 12h7c1.66 0 3 1.34 3 3s-1.34 3-3 3H3c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h5c1.66 0 3 1.34 3 3s-1.34 3-3 3H2Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
    ></Path>
    <Path
      opacity=".4"
      d="M14 14h8c0-2.21-1.79-4-4-4s-4 1.79-4 4Zm0 0c0 2.21 1.79 4 4 4h1.67M19.5 7.5h-3"
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

const Be = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Be.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Be.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Be.displayName = 'Be';
export default Be;
