import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM6.5 12.57h2.77c.41 0 .75.34.75.75s-.34.75-.75.75H6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75Zm6.47 5.26H6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.47a.749.749 0 1 1 0 1.5Zm4.53 0h-1.85c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.85c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-3.76h-5.53c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.53c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M17.498 17.078h-1.85M12.97 17.078H6.5M17.499 13.32h-5.53M9.27 13.32H6.5"
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
      d="M17.498 17.828h-1.85c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.85c.41 0 .75.34.75.75s-.34.75-.75.75ZM12.97 17.828H6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.47a.749.749 0 1 1 0 1.5ZM17.499 14.07h-5.53c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.53c.41 0 .75.34.75.75s-.34.75-.75.75ZM9.27 14.07H6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.77c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM17.5 17.08h-1.85M12.97 17.08H6.5M17.5 13.32h-5.53M9.27 13.32H6.5"
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
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      fill={color}
    ></Path>
    <Path
      d="M17.498 17.828h-1.85c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.85c.41 0 .75.34.75.75s-.34.75-.75.75ZM12.97 17.828H6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.47a.749.749 0 1 1 0 1.5ZM17.499 14.07h-5.53c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.53c.41 0 .75.34.75.75s-.34.75-.75.75ZM9.27 14.07H6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.77c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M17.498 17.078h-1.85M12.97 17.078H6.5M17.499 13.32h-5.53M9.27 13.32H6.5"
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

const Subtitle = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Subtitle.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Subtitle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Subtitle.displayName = 'Subtitle';
export default Subtitle;
