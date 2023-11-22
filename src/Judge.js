import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M20.54 19.041c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-4.95-4.95.53-.53.53-.53 4.95 4.95c.29.29.29.77 0 1.06ZM6.47 9.278l5.8 5.8c.39.39.39 1.02 0 1.41l-.9.91c-.81.8-2.09.8-2.89 0l-4.34-4.34c-.79-.79-.79-2.08 0-2.88l.91-.91c.39-.38 1.03-.38 1.42.01Z"
      fill={color}
    ></Path>
    <Path
      d="m18.59 10.19-3.81 3.8c-.4.4-1.04.4-1.44 0L7.56 8.21c-.4-.4-.4-1.04 0-1.44l3.81-3.81c.79-.79 2.08-.79 2.88 0l4.34 4.34c.79.8.79 2.08 0 2.89ZM8 21.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="m20.01 18.509-4.95-4.95M18.6 7.2c.78.78.78 2.05 0 2.83l-3.54 3.54M15.06 13.56l-3.54 3.54c-.78.78-2.05.78-2.83 0l-4.24-4.24c-.78-.78-.78-2.05 0-2.83l7.07-7.07c.78-.78 2.05-.78 2.83 0l1.46 1.46M2 21h6M6.56 7.922l7.07 7.07"
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
      d="M20.54 19.041c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-4.95-4.95.53-.53.53-.53 4.95 4.95c.29.29.29.77 0 1.06Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="m6.47 9.278 5.8 5.8c.39.39.39 1.02 0 1.41l-.9.91c-.81.8-2.09.8-2.89 0l-4.34-4.34c-.79-.79-.79-2.08 0-2.88l.91-.91c.39-.38 1.03-.38 1.42.01Z"
      fill={color}
    ></Path>
    <Path
      d="m18.59 10.191-3.81 3.8c-.4.4-1.04.4-1.44 0l-5.77-5.77c-.4-.4-.4-1.04 0-1.44l3.81-3.81c.79-.79 2.08-.79 2.88 0l4.34 4.34c.78.79.78 2.07-.01 2.88ZM8 21.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="m20.01 18.51-4.95-4.95M15.06 13.56l-3.54 3.54c-.78.78-2.05.78-2.83 0l-4.24-4.24c-.78-.78-.78-2.05 0-2.83l7.07-7.07c.78-.78 2.05-.78 2.83 0l4.24 4.24c.78.78.78 2.05 0 2.83l-3.53 3.53ZM2 21h6M6.56 7.92l7.07 7.07"
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
      d="M20.01 19.26c-.19 0-.38-.07-.53-.22l-4.95-4.95a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l4.95 4.95c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
      fill={color}
    ></Path>
    <Path
      d="M10.11 18.43c-.73 0-1.43-.29-1.94-.81l-4.24-4.24a2.758 2.758 0 0 1 0-3.89L11 2.42a2.758 2.758 0 0 1 3.89 0l4.24 4.24a2.732 2.732 0 0 1 0 3.88l-7.07 7.07c-.52.54-1.21.82-1.95.82Zm2.83-15.31c-.32 0-.64.12-.88.37l-7.07 7.07a1.25 1.25 0 0 0 0 1.77l4.24 4.24c.47.47 1.29.47 1.77 0l7.07-7.07a1.234 1.234 0 0 0 0-1.76L13.83 3.5a1.22 1.22 0 0 0-.89-.38ZM8 21.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M13.63 15.74c-.19 0-.38-.07-.53-.22L6.03 8.45a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l7.07 7.07c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="m20.01 18.509-4.95-4.95M15.06 13.56l-3.54 3.54c-.78.78-2.05.78-2.83 0l-4.24-4.24c-.78-.78-.78-2.05 0-2.83l7.07-7.07c.78-.78 2.05-.78 2.83 0l4.24 4.24c.78.78.78 2.05 0 2.83l-3.53 3.53Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M2 21h6M6.56 7.922l7.07 7.07"
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

const Judge = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Judge.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Judge.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Judge.displayName = 'Judge';
export default Judge;