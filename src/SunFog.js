import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M18.48 12.25a.5.5 0 0 0 .5-.52A6.998 6.998 0 0 0 12 5.25c-3.69 0-6.71 2.85-6.98 6.48a.5.5 0 0 0 .5.52h12.96ZM22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1ZM2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1Zm16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.44.29-.7.29Zm-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.14a.996.996 0 1 1 1.41-1.41l.13.13c.39.39.39 1.02 0 1.41-.19.2-.45.3-.7.3ZM12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04ZM20 15.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16c.41 0 .75.34.75.75s-.34.75-.75.75ZM18 18.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75ZM15 21.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M18 15h2M4 15h11"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12 5.5A6.5 6.5 0 0 0 5.5 12M18.499 12c0-2.31-1.21-4.35-3.03-5.5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m4.99 4.99-.13-.13m14.15.13.13-.13-.13.13ZM12 2.08V2v.08ZM2.08 12H2h.08ZM22 12h-.08.08Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M6 18h12M9 21h6"
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
      d="M18.48 12.25a.5.5 0 0 0 .5-.52 6.998 6.998 0 0 0-13.96 0 .5.5 0 0 0 .5.52h12.96ZM22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1ZM2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1Zm16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.44.29-.7.29Zm-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.13a.996.996 0 1 1 1.41-1.41l.13.13a.996.996 0 0 1-.7 1.7ZM12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M20 15.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16c.41 0 .75.34.75.75s-.34.75-.75.75ZM18 18.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75ZM15 21.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M18.5 12a6.5 6.5 0 1 0-13 0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m4.99 4.99-.13-.13m14.15.13.13-.13-.13.13ZM12 2.08V2v.08ZM2.08 12H2h.08ZM22 12h-.08.08Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M4 15h16M6 18h12M9 21h6"
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
      d="M18.5 12.75c-.41 0-.75-.34-.75-.75 0-3.17-2.58-5.75-5.75-5.75S6.25 8.83 6.25 12c0 .41-.34.75-.75.75s-.75-.34-.75-.75C4.75 8 8 4.75 12 4.75S19.25 8 19.25 12c0 .41-.34.75-.75.75ZM22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1ZM2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1Zm16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.44.29-.7.29Zm-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.13a.996.996 0 1 1 1.41-1.41l.13.13a.996.996 0 0 1-.7 1.7ZM12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04ZM20 15.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16c.41 0 .75.34.75.75s-.34.75-.75.75ZM18 18.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75ZM15 21.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M18.5 12a6.5 6.5 0 1 0-13 0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m4.99 4.99-.13-.13m14.15.13.13-.13-.13.13ZM12 2.08V2v.08ZM2.08 12H2h.08ZM22 12h-.08.08Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M4 15h16"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M6 18h12"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M9 21h6"
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

const SunFog = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
SunFog.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
SunFog.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
SunFog.displayName = 'SunFog';
export default SunFog;