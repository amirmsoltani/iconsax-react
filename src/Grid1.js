import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M7.75 2v5.8H2C2 4.19 4.15 2.02 7.75 2ZM22 7.8h-5.75V2c3.6.02 5.75 2.19 5.75 5.8ZM22 16.3c-.04 3.55-2.18 5.68-5.75 5.7v-5.7H22ZM7.75 16.3V22c-3.57-.02-5.71-2.15-5.75-5.7h5.75ZM7.75 9.3H2v5.5h5.75V9.3ZM22 9.3h-5.75v5.5H22V9.3ZM14.75 9.3h-5.5v5.5h5.5V9.3ZM14.75 2h-5.5v5.8h5.5V2ZM14.75 16.3h-5.5V22h5.5v-5.7Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M2.03 8.5H22M2.03 15.5H22M8.51 21.992V2.012M15.51 21.99V6"
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
      d="M8.51 2v6.5H2v-.69C2 4.17 4.17 2 7.81 2h.7ZM22 7.81v.69h-6.49V2h.68C19.83 2 22 4.17 22 7.81ZM22 15.5v.69c0 3.64-2.17 5.81-5.81 5.81h-.68v-6.5H22ZM8.51 15.5V22h-.7C4.17 22 2 19.83 2 16.19v-.69h6.51Z"
      fill={color}
    ></Path>
    <Path opacity=".4" d="M8.51 8.5H2v7h6.51v-7ZM22 8.5h-6.49v7H22v-7Z" fill={color}></Path>
    <Path d="M15.51 8.5h-7v7h7v-7Z" fill={color}></Path>
    <Path opacity=".4" d="M15.51 2h-7v6.5h7V2ZM15.51 15.5h-7V22h7v-6.5Z" fill={color}></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM2.03 8.5H22M2.03 15.5H22M8.51 21.99V2.01M15.51 21.99V2.01"
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
      d="M22 9.25H2.03c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H22c.41 0 .75.34.75.75s-.34.75-.75.75ZM22 16.25H2.03c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H22c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M8.51 22.742c-.41 0-.75-.34-.75-.75V2.012c0-.41.34-.75.75-.75s.75.34.75.75v19.97c0 .42-.33.76-.75.76ZM15.51 22.742c-.41 0-.75-.34-.75-.75V2.012c0-.41.34-.75.75-.75s.75.34.75.75v19.97c0 .42-.33.76-.75.76Z"
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
    <G
      opacity=".4"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M2.03 8.5H22M2.03 15.5H22M8.51 21.988V2.008M15.51 21.988V2.008"></Path>
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

const Grid1 = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Grid1.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Grid1.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Grid1.displayName = 'Grid1';
export default Grid1;
