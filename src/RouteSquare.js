import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm1.16 7.05-2.34 7.54c-.56 1.79-3.07 1.82-3.66.04l-.7-2.07c-.19-.57-.64-1.03-1.21-1.21l-2.08-.7c-1.76-.59-1.74-3.12.05-3.66l7.54-2.35c1.48-.45 2.87.94 2.4 2.41Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m17.35 9.05-2.34 7.54c-.56 1.79-3.07 1.82-3.66.04l-.699-2.07c-.19-.57-.64-1.03-1.21-1.21l-2.08-.7c-1.77-.59-1.74-3.12.05-3.66l7.54-2.35c1.48-.45 2.87.94 2.4 2.41Z"
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
      d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      fill={color}
    ></Path>
    <Path
      d="m17.35 9.05-2.34 7.54c-.56 1.79-3.07 1.82-3.66.04l-.699-2.07c-.19-.57-.64-1.03-1.21-1.21l-2.08-.7c-1.77-.59-1.74-3.12.05-3.66l7.54-2.35c1.48-.45 2.87.94 2.4 2.41Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="m17.35 9.05-2.34 7.54c-.56 1.79-3.07 1.82-3.66.04l-.7-2.07c-.19-.57-.64-1.03-1.21-1.21l-2.08-.7c-1.77-.59-1.74-3.12.05-3.66l7.54-2.35c1.48-.45 2.87.94 2.4 2.41Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
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
      d="M13.18 18.7c-1.17 0-2.16-.72-2.53-1.83l-.7-2.07c-.11-.36-.39-.63-.73-.74l-2.08-.7c-1.12-.38-1.84-1.39-1.82-2.57.02-1.18.76-2.17 1.89-2.52l7.53-2.34c.95-.29 1.98-.04 2.68.67.7.71.95 1.73.66 2.68l-2.34 7.54c-.35 1.13-1.34 1.87-2.53 1.89-.01-.01-.02-.01-.03-.01Zm2.34-11.4c-.12 0-.23.02-.35.05L7.63 9.7c-.61.19-.83.69-.83 1.11-.01.41.2.93.8 1.13l2.08.69c.8.26 1.43.89 1.69 1.7l.69 2.06c.2.6.67.79 1.13.81.41 0 .92-.22 1.11-.83l2.34-7.54c.13-.42.02-.86-.29-1.17a1.13 1.13 0 0 0-.83-.36Z"
      fill={color}
    ></Path>
    <Path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      fill={color}
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
      d="M17.35 9.05l-2.34 7.54c-.56 1.79-3.07 1.82-3.66.04l-.699-2.07c-.19-.57-.64-1.03-1.21-1.21l-2.08-.7c-1.77-.59-1.74-3.12.05-3.66l7.54-2.35c1.48-.45 2.87.94 2.4 2.41z"
      opacity=".4"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
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

const RouteSquare = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
RouteSquare.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
RouteSquare.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
RouteSquare.displayName = 'RouteSquare';
export default RouteSquare;
