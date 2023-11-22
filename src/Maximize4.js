import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-4.66 11.53-3.72 3.72H10c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.1 0-.2-.02-.29-.06a.782.782 0 0 1-.41-.41.868.868 0 0 1-.05-.28v-4c0-.41.34-.75.75-.75s.75.34.75.75v2.19l3.72-3.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06ZM18.75 10c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.81l-3.72 3.72c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.72-3.72H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.1 0 .19.02.29.06.18.08.33.22.41.41.03.09.05.18.05.28v4Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M21 5V3h-6M21 8.999v-1.03M3 19v2h6M3 15v1.03M21 3l-7.5 7.5M10.5 13.5 3 21"
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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      fill={color}
    ></Path>
    <Path
      d="M18.69 5.71a.782.782 0 0 0-.41-.41.868.868 0 0 0-.28-.05h-4c-.41 0-.75.34-.75.75s.34.75.75.75h2.19l-3.72 3.72c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.72-3.72V10c0 .41.34.75.75.75s.75-.34.75-.75V6c0-.1-.02-.19-.06-.29ZM11.53 12.471a.754.754 0 0 0-1.06 0l-3.72 3.72v-2.19c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4c0 .1.02.19.06.29.08.18.22.33.41.41.08.03.18.05.28.05h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H7.81l3.72-3.72c.29-.29.29-.77 0-1.06Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M21 9V3h-6M3 15v6h6M21 3l-7.5 7.5M10.5 13.5 3 21"
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
      d="M21 9.75c-.41 0-.75-.34-.75-.75V3.75H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75ZM9 21.75H3c-.41 0-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75v5.25H9c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M13.5 11.251c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l7.5-7.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-7.5 7.5c-.15.15-.34.22-.53.22ZM3 21.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l7.5-7.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-7.5 7.5c-.15.15-.34.22-.53.22Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M3 15v6h6"
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
      <Path d="M21 9V3h-6M21 3l-7.5 7.5"></Path>
    </G>
    <Path
      d="M10.5 13.5 3 21"
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

const Maximize4 = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Maximize4.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Maximize4.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Maximize4.displayName = 'Maximize4';
export default Maximize4;
