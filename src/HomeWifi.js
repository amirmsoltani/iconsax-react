import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="m20.86 8.37-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01L3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91Zm-8.15 8.83c-.2.2-.45.3-.71.3-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0 .39.38.39 1.01 0 1.4Zm1.95-2.3a.75.75 0 0 1-1.06.02c-.97-.93-2.23-.93-3.21 0-.3.29-.77.28-1.06-.02-.29-.3-.28-.77.02-1.06 1.55-1.49 3.72-1.49 5.28 0 .31.28.32.76.03 1.06Zm2.12-2.12c-.15.15-.34.23-.54.23-.19 0-.38-.07-.52-.21a5.9 5.9 0 0 0-1.56-1.1c-1.4-.67-2.93-.67-4.32 0-.56.27-1.08.64-1.56 1.1-.29.29-.77.29-1.06-.01-.29-.3-.28-.77.01-1.06.59-.58 1.25-1.04 1.96-1.38 1.81-.87 3.81-.87 5.61 0 .71.34 1.37.8 1.96 1.38.3.28.31.76.02 1.05Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M2.03 11.28c-.17-.98.33-2.29 1.11-2.91l6.93-5.55c1.06-.85 2.79-.85 3.86.01l6.93 5.54c.77.62 1.27 1.93 1.11 2.91l-1.33 7.96c-.24 1.41-1.61 2.57-3.04 2.57H6.4c-1.44 0-2.8-1.15-3.04-2.57l-.64-3.86"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M9.88 14.38c1.27-1.21 2.97-1.21 4.24 0M8.75 11.45c-.35.23-.68.5-1 .81M16.24 12.26a6.64 6.64 0 0 0-1.76-1.24 5.76 5.76 0 0 0-2.48-.57"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M11.995 16.5h.01"
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
      d="M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01Z"
      fill={color}
    ></Path>
    <Path
      d="M14.12 15.13a.75.75 0 0 1-.52-.21c-.97-.93-2.23-.93-3.21 0-.3.29-.77.28-1.06-.02-.29-.3-.28-.77.02-1.06 1.55-1.49 3.72-1.49 5.28 0 .3.29.31.76.02 1.06-.13.15-.33.23-.53.23Z"
      fill={color}
    ></Path>
    <Path
      d="M16.24 13.012c-.19 0-.38-.07-.52-.21a5.9 5.9 0 0 0-1.56-1.1c-1.4-.67-2.93-.67-4.32 0-.56.27-1.08.64-1.56 1.1-.29.29-.77.29-1.06-.01-.29-.3-.28-.77.01-1.06.59-.58 1.25-1.04 1.96-1.38 1.81-.87 3.81-.87 5.61 0 .71.34 1.37.8 1.96 1.38a.745.745 0 0 1-.52 1.28ZM12 17.5c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0 .39.39.39 1.02 0 1.41-.2.19-.45.29-.71.29Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M9.88 14.38c1.27-1.21 2.97-1.21 4.24 0M16.24 12.26a6.64 6.64 0 0 0-1.76-1.24 5.702 5.702 0 0 0-4.97 0c-.62.3-1.21.71-1.76 1.24"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M11.995 17h.01"
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
      d="M17.6 22.56H6.4c-1.82 0-3.48-1.4-3.78-3.2L1.29 11.4c-.21-1.24.39-2.83 1.38-3.62L9.6 2.23c1.34-1.08 3.45-1.07 4.8.01l6.93 5.54c.98.79 1.58 2.38 1.38 3.62l-1.33 7.96c-.3 1.77-1.99 3.2-3.78 3.2ZM11.99 2.94c-.53 0-1.06.16-1.45.47L3.61 8.96c-.57.46-.96 1.48-.84 2.2l1.33 7.96c.18 1.05 1.23 1.94 2.3 1.94h11.2c1.07 0 2.12-.89 2.3-1.95l1.33-7.96c.12-.72-.28-1.75-.84-2.2l-6.93-5.54c-.4-.31-.93-.47-1.47-.47Z"
      fill={color}
    ></Path>
    <Path
      d="M14.12 15.13a.75.75 0 0 1-.52-.21c-.97-.93-2.23-.93-3.21 0-.3.29-.77.28-1.06-.02-.29-.3-.28-.77.02-1.06 1.55-1.49 3.72-1.49 5.28 0 .3.29.31.76.02 1.06-.13.15-.33.23-.53.23Z"
      fill={color}
    ></Path>
    <Path
      d="M16.24 13.012c-.19 0-.38-.07-.52-.21-.47-.46-1-.83-1.56-1.1-1.4-.67-2.93-.67-4.32 0-.56.27-1.08.64-1.56 1.1-.29.29-.77.29-1.06-.01-.29-.3-.28-.77.01-1.06.59-.58 1.25-1.04 1.96-1.38 1.81-.87 3.81-.87 5.61 0 .71.34 1.37.8 1.96 1.38a.746.746 0 0 1-.52 1.28ZM12 17.5c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0 .39.39.39 1.02 0 1.41-.2.19-.45.29-.71.29Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M9.88 14.38c1.27-1.21 2.97-1.21 4.24 0M16.24 12.26a6.64 6.64 0 0 0-1.76-1.24 5.702 5.702 0 0 0-4.97 0c-.62.3-1.21.71-1.76 1.24"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M11.995 16.5h.01"
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

const HomeWifi = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
HomeWifi.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
HomeWifi.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
HomeWifi.displayName = 'HomeWifi';
export default HomeWifi;
