import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M12.75 15.92h.65c.65 0 1.19-.58 1.19-1.28 0-.87-.31-1.04-.82-1.22l-1.01-.35v2.85h-.01Z"
      fill={color}
    ></Path>
    <Path
      d="M11.97 1.898c-5.52.02-9.99 4.51-9.97 10.03.02 5.52 4.51 9.99 10.03 9.97 5.52-.02 9.99-4.51 9.97-10.03-.02-5.52-4.51-9.98-10.03-9.97Zm2.29 10.1c.78.27 1.83.85 1.83 2.64 0 1.54-1.21 2.78-2.69 2.78h-.65v.58c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.58h-.36c-1.64 0-2.97-1.38-2.97-3.08 0-.41.34-.75.75-.75s.75.34.75.75c0 .87.66 1.58 1.47 1.58h.36v-3.38l-1.51-.54c-.78-.27-1.83-.85-1.83-2.64 0-1.54 1.21-2.78 2.69-2.78h.65v-.58c0-.41.34-.75.75-.75s.75.34.75.75v.58h.36c1.64 0 2.97 1.38 2.97 3.08 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.87-.66-1.58-1.47-1.58h-.36v3.38l1.51.54Z"
      fill={color}
    ></Path>
    <Path
      d="M9.422 9.368c0 .87.31 1.04.82 1.22l1.01.35v-2.86h-.65c-.65 0-1.18.58-1.18 1.29Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M8.672 14.33c0 1.29.99 2.33 2.22 2.33h2.51c1.07 0 1.94-.91 1.94-2.03 0-1.22-.53-1.65-1.32-1.93l-4.03-1.4c-.79-.28-1.32-.71-1.32-1.93 0-1.12.87-2.03 1.94-2.03h2.51c1.23 0 2.22 1.04 2.22 2.33M12 6v12"
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
      d="M12 21.898c5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10s-10 4.478-10 10c0 5.523 4.477 10 10 10Z"
      fill={color}
    ></Path>
    <Path
      d="m14.26 12-1.51-.53V8.08h.36c.81 0 1.47.71 1.47 1.58 0 .41.34.75.75.75s.75-.34.75-.75c0-1.7-1.33-3.08-2.97-3.08h-.36V6c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.58h-.65c-1.48 0-2.69 1.25-2.69 2.78 0 1.79 1.04 2.36 1.83 2.64l1.51.53v3.38h-.36c-.81 0-1.47-.71-1.47-1.58 0-.41-.34-.75-.75-.75s-.75.34-.75.75c0 1.7 1.33 3.08 2.97 3.08h.36V18c0 .41.34.75.75.75s.75-.34.75-.75v-.58h.65c1.48 0 2.69-1.25 2.69-2.78-.01-1.8-1.05-2.37-1.83-2.64Zm-4.02-1.41c-.51-.18-.82-.35-.82-1.22 0-.71.53-1.28 1.19-1.28h.65v2.86l-1.02-.36Zm3.16 5.33h-.65v-2.86l1.01.35c.51.18.82.35.82 1.22 0 .71-.53 1.29-1.18 1.29Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M8.672 14.33c0 1.29.99 2.33 2.22 2.33h2.51c1.07 0 1.94-.91 1.94-2.03 0-1.22-.53-1.65-1.32-1.93l-4.03-1.4c-.79-.28-1.32-.71-1.32-1.93 0-1.12.87-2.03 1.94-2.03h2.51c1.23 0 2.22 1.04 2.22 2.33M12 6v12"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
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
      d="M13.4 17.418h-2.51c-1.64 0-2.97-1.38-2.97-3.08 0-.41.34-.75.75-.75s.75.34.75.75c0 .87.66 1.58 1.47 1.58h2.51c.65 0 1.19-.58 1.19-1.28 0-.87-.31-1.04-.82-1.22l-4.03-1.42c-.78-.27-1.83-.85-1.83-2.64 0-1.54 1.21-2.78 2.69-2.78h2.51c1.64 0 2.97 1.38 2.97 3.08 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.87-.66-1.58-1.47-1.58H10.6c-.65 0-1.19.58-1.19 1.28 0 .87.31 1.04.82 1.22l4.03 1.42c.78.27 1.83.85 1.83 2.64-.01 1.53-1.21 2.78-2.69 2.78Z"
      fill={color}
    ></Path>
    <Path
      d="M12 18.75c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75s.75.34.75.75v12c0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <G
      opacity=".4"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M8.672 14.33c0 1.29.99 2.33 2.22 2.33h2.51c1.07 0 1.94-.91 1.94-2.03 0-1.22-.53-1.65-1.32-1.93l-4.03-1.4c-.79-.28-1.32-.71-1.32-1.93 0-1.12.87-2.03 1.94-2.03h2.51c1.23 0 2.22 1.04 2.22 2.33M12 6v12"></Path>
    </G>
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
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

const DollarCircle = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
DollarCircle.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
DollarCircle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
DollarCircle.displayName = 'DollarCircle';
export default DollarCircle;