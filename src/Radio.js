import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M7.75 2v3H7c-.26 0-.51.01-.75.05V2c0-.41.34-.75.75-.75s.75.34.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M17 5H7c-.26 0-.51.01-.75.05C3.67 5.35 2 7.26 2 10v7c0 3 2 5 5 5h10c3 0 5-2 5-5v-7c0-3-2-5-5-5ZM7.88 16a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Zm6.5.25h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75Zm3.5 0h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-4h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M2 14.05V17c0 3 2 5 5 5h10c3 0 5-2 5-5v-7c0-3-2-5-5-5H7c-3 0-5 2-5 5M7 2v3"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M8.5 16a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 2.5 2.5M14.5 11h4M14.5 15h.5M18 15h.5"
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
      d="M22 10v7c0 3-2 5-5 5H7c-3 0-5-2-5-5v-7c0-2.74 1.67-4.65 4.25-4.95.24-.04.49-.05.75-.05h10c3 0 5 2 5 5Z"
      fill={color}
    ></Path>
    <Path
      d="M7.75 2v3H7c-.26 0-.51.01-.75.05V2c0-.41.34-.75.75-.75s.75.34.75.75ZM7.879 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM17.879 12.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.379 16.25h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75ZM17.879 16.25h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M17 5H7c-3 0-5 2-5 5v7c0 3 2 5 5 5h10c3 0 5-2 5-5v-7c0-3-2-5-5-5ZM7 2v3"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M8.5 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM14.5 11h4M14.5 15h.5M18 15h.5"
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
      d="M17 22.75H7c-3.44 0-5.75-2.31-5.75-5.75v-7c0-3.44 2.31-5.75 5.75-5.75h10c3.44 0 5.75 2.31 5.75 5.75v7c0 3.44-2.31 5.75-5.75 5.75Zm-10-17c-2.58 0-4.25 1.67-4.25 4.25v7c0 2.58 1.67 4.25 4.25 4.25h10c2.58 0 4.25-1.67 4.25-4.25v-7c0-2.58-1.67-4.25-4.25-4.25H7Z"
      fill={color}
    ></Path>
    <Path
      d="M7 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM8.5 16.75c-1.79 0-3.25-1.46-3.25-3.25s1.46-3.25 3.25-3.25 3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25Zm0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.79-1.75-1.75-1.75ZM18.5 11.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM15 15.75h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75ZM18.5 15.75H18c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M17 5H7c-3 0-5 2-5 5v7c0 3 2 5 5 5h10c3 0 5-2 5-5v-7c0-3-2-5-5-5ZM7 2v3"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M8.5 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM14.5 11h4M14.5 15h.5M18 15h.5"
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

const Radio = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Radio.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Radio.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Radio.displayName = 'Radio';
export default Radio;
