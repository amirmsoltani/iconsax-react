import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M18.75 13.9h-1.846a1 1 0 0 0-.556.169L14.09 15.58c-.36.24-.78.35-1.19.35-.35 0-.7-.08-1.02-.26-.482-.255-.836-.723-1.01-1.247-.139-.42-.416-.81-.816-.999a4.359 4.359 0 0 1-1.224-.854c-.86-.86-1.33-2.07-1.33-3.42V5a1 1 0 0 0-1-1C3.8 4 2 5.35 2 8.5v5.4c0 3.15 1.8 4.5 4.5 4.5h3.75v2.85H7.4c-.41 0-.75.34-.75.75s.34.75.75.75h7.2c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.85V18.4h3.75c2.395 0 4.082-1.063 4.433-3.502.078-.547-.38-.998-.933-.998h-.25Z"
      fill={color}
    ></Path>
    <Path
      d="M18.75 2h-6.5c-1.49 0-2.61.76-3.05 2-.13.38-.2.8-.2 1.25v3.9c0 .97.32 1.79.89 2.36.57.57 1.39.89 2.36.89v1.39c0 .51.58.82 1.01.54l2.89-1.93h2.6c.45 0 .87-.07 1.25-.2 1.24-.44 2-1.56 2-3.05v-3.9C22 3.3 20.7 2 18.75 2Zm-6.13 6a.749.749 0 1 1 0-1.5.749.749 0 1 1 0 1.5Zm2.82 0a.749.749 0 1 1-.002-1.498A.749.749 0 0 1 15.44 8Zm2.81 0a.749.749 0 1 1-.002-1.498A.749.749 0 0 1 18.25 8Z"
      fill={color}
    ></Path>
    <Path
      d="M22 5.25v3.9c0 1.49-.76 2.61-2 3.05-.38.13-.8.2-1.25.2h-2.6l-2.89 1.93c-.43.28-1.01-.03-1.01-.54V12.4c-.97 0-1.79-.32-2.36-.89-.57-.57-.89-1.39-.89-2.36v-3.9c0-.45.07-.87.2-1.25.44-1.24 1.56-2 3.05-2h6.5C20.7 2 22 3.3 22 5.25Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M2 8.5C2 5.35 3.8 4 6.5 4h2.7c-.13.38-.2.8-.2 1.25v3.9c0 .97.32 1.79.89 2.36.57.57 1.39.89 2.36.89v1.39c0 .51.58.82 1.01.54l2.89-1.93h2.6c.45 0 .87-.07 1.25-.2v1.7c0 3.15-1.8 4.5-4.5 4.5h-9c-2.7 0-4.5-1.35-4.5-4.5v-1.5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 9.15c0 1.49-.76 2.61-2 3.05-.38.13-.8.2-1.25.2h-2.6l-2.89 1.93c-.43.28-1.01-.03-1.01-.54V12.4c-.97 0-1.79-.32-2.36-.89-.57-.57-.89-1.39-.89-2.36v-3.9c0-.45.07-.87.2-1.25.44-1.24 1.56-2 3.05-2h6.5C20.7 2 22 3.3 22 5.25M7.398 22h7.2M11 18.398v3.6"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M18.495 7.25h.01M15.695 7.25h.009M12.894 7.25h.009"
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
      d="M20 12.2v1.7c0 3.15-1.8 4.5-4.5 4.5h-9c-2.7 0-4.5-1.35-4.5-4.5V8.5C2 5.35 3.8 4 6.5 4h2.7c-.13.38-.2.8-.2 1.25v3.9c0 .97.32 1.79.89 2.36.57.57 1.39.89 2.36.89v1.39c0 .51.58.82 1.01.54l2.89-1.93h2.6c.45 0 .87-.07 1.25-.2Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M22 5.25v3.9c0 1.49-.76 2.61-2 3.05-.38.13-.8.2-1.25.2h-2.6l-2.89 1.93c-.43.28-1.01-.03-1.01-.54V12.4c-.97 0-1.79-.32-2.36-.89-.57-.57-.89-1.39-.89-2.36v-3.9c0-.45.07-.87.2-1.25.44-1.24 1.56-2 3.05-2h6.5C20.7 2 22 3.3 22 5.25ZM14.598 21.248h-2.85v-2.85c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.85h-2.85c-.41 0-.75.34-.75.75s.34.75.75.75h7.2c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
      fill={color}
    ></Path>
    <Path
      d="M15.441 8a.749.749 0 1 1-.002-1.498A.749.749 0 0 1 15.441 8ZM18.25 8a.749.749 0 1 1-.002-1.498A.749.749 0 0 1 18.25 8ZM12.621 8a.749.749 0 1 1-.002-1.498A.749.749 0 0 1 12.621 8Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M20 12.2v1.7c0 3.15-1.8 4.5-4.5 4.5h-9c-2.7 0-4.5-1.35-4.5-4.5V8.5C2 5.35 3.8 4 6.5 4h2.7c-.13.38-.2.8-.2 1.25v3.9c0 .97.32 1.79.89 2.36.57.57 1.39.89 2.36.89v1.39c0 .51.58.82 1.01.54l2.89-1.93h2.6c.45 0 .87-.07 1.25-.2Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 5.25v3.9c0 1.49-.76 2.61-2 3.05-.38.13-.8.2-1.25.2h-2.6l-2.89 1.93c-.43.28-1.01-.03-1.01-.54V12.4c-.97 0-1.79-.32-2.36-.89-.57-.57-.89-1.39-.89-2.36v-3.9c0-.45.07-.87.2-1.25.44-1.24 1.56-2 3.05-2h6.5C20.7 2 22 3.3 22 5.25ZM7.4 22h7.2M11 18.4V22"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M18.495 7.25h.01M15.696 7.25h.009M12.895 7.25h.01"
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
      d="M15.5 19.15h-9c-3.34 0-5.25-1.91-5.25-5.25V8.5c0-3.34 1.91-5.25 5.25-5.25h2.7c.24 0 .47.12.61.31s.18.45.1.68c-.11.31-.16.65-.16 1.01v3.9c0 .76.23 1.39.67 1.83.44.44 1.07.67 1.83.67.41 0 .75.34.75.75v1.2l2.73-1.83c.12-.08.27-.13.42-.13h2.6c.36 0 .7-.05 1.01-.16a.75.75 0 0 1 .68.1c.2.14.31.37.31.61v1.7c0 3.35-1.91 5.26-5.25 5.26Zm-9-14.4c-2.52 0-3.75 1.23-3.75 3.75v5.4c0 2.52 1.23 3.75 3.75 3.75h9c2.52 0 3.75-1.23 3.75-3.75v-.78c-.16.02-.33.03-.5.03h-2.37l-2.7 1.8c-.44.28-.99.31-1.44.06-.45-.24-.73-.71-.73-1.22v-.7c-.84-.13-1.58-.5-2.14-1.05-.71-.71-1.11-1.74-1.11-2.89v-3.9c0-.17.01-.34.02-.5H6.5Z"
      fill={color}
    ></Path>
    <Path
      d="M12.9 15.18c-.23 0-.46-.06-.67-.17-.45-.24-.73-.71-.73-1.22v-.7c-.84-.13-1.58-.5-2.14-1.05-.71-.71-1.11-1.74-1.11-2.89v-3.9c0-.53.08-1.03.24-1.49.56-1.57 1.96-2.51 3.76-2.51h6.5c2.35 0 4 1.64 4 4v3.9c0 1.8-.93 3.2-2.5 3.76-.48.16-.98.24-1.5.24h-2.37l-2.7 1.8c-.24.16-.51.23-.78.23Zm-.65-12.43c-1.15 0-2 .55-2.34 1.5-.1.3-.16.64-.16 1v3.9c0 .76.23 1.39.67 1.83.44.44 1.07.67 1.83.67.41 0 .75.34.75.75v1.2l2.73-1.83c.12-.08.27-.13.42-.13h2.6c.36 0 .7-.05 1.01-.16.95-.34 1.49-1.19 1.49-2.34v-3.9c0-1.54-.96-2.5-2.5-2.5h-6.5v.01ZM14.598 22.75h-7.2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.2c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M11 22.748c-.41 0-.75-.34-.75-.75v-3.6c0-.41.34-.75.75-.75s.75.34.75.75v3.6c0 .41-.34.75-.75.75ZM15.441 8a.749.749 0 1 1-.002-1.498A.749.749 0 0 1 15.441 8ZM18.25 8a.749.749 0 1 1-.002-1.498A.749.749 0 0 1 18.25 8ZM12.621 8a.749.749 0 1 1-.002-1.498A.749.749 0 0 1 12.621 8Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M22 5.25v3.9c0 1.49-.76 2.61-2 3.05-.38.13-.8.2-1.25.2h-2.6l-2.89 1.93c-.43.28-1.01-.03-1.01-.54V12.4c-.97 0-1.79-.32-2.36-.89-.57-.57-.89-1.39-.89-2.36v-3.9c0-.45.07-.87.2-1.25.44-1.24 1.56-2 3.05-2h6.5C20.7 2 22 3.3 22 5.25Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <G
      opacity=".4"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M20 12.2v1.7c0 3.15-1.8 4.5-4.5 4.5h-9c-2.7 0-4.5-1.35-4.5-4.5V8.5C2 5.35 3.8 4 6.5 4h2.7c-.13.38-.2.8-.2 1.25v3.9c0 .97.32 1.79.89 2.36.57.57 1.39.89 2.36.89v1.39c0 .51.58.82 1.01.54l2.89-1.93h2.6c.45 0 .87-.07 1.25-.2ZM7.398 22h7.2M11 18.398v3.6"></Path>
    </G>
    <Path
      d="M18.495 7.25h.01M15.695 7.25h.009M12.894 7.25h.009"
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

const DeviceMessage = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
DeviceMessage.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
DeviceMessage.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
DeviceMessage.displayName = 'DeviceMessage';
export default DeviceMessage;
