import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M13.25 12.58v1.98a1.25 1.25 0 0 1-2.5 0v-1.98c-.36-.22-.64-.54-.84-.92H3c-.55 0-1 .45-1 1v3.53C2 19.4 4.6 22 7.81 22h8.37C19.4 22 22 19.4 22 16.19v-3.53c0-.55-.45-1-1-1h-6.91c-.2.38-.48.7-.84.92ZM16.19 2H7.81C4.6 2 2 4.6 2 7.81v1.35c0 .55.45 1 1 1h6.67a2.37 2.37 0 0 1 2.97-1.88c.8.21 1.45.86 1.66 1.66.02.07.02.15.03.22H21c.55 0 1-.45 1-1V7.81C22 4.6 19.4 2 16.19 2Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M2 15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v1.91h7.65"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M14.351 10.911c-.1.71-.52 1.31-1.1 1.67v1.98a1.25 1.25 0 0 1-2.5 0v-1.98c-.58-.36-1-.96-1.1-1.67-.02-.11-.03-.23-.03-.35 0-1.52 1.44-2.7 3.02-2.28.8.21 1.45.86 1.66 1.66.09.33.1.66.05.97Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
    ></Path>
    <Path
      d="M18.002 10.91h-3.65"
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
      opacity=".4"
      d="M16.192 2h-8.37c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81c0-3.64-2.17-5.81-5.81-5.81Z"
      fill={color}
    ></Path>
    <Path
      d="M22 10.16h-7.67c-.01-.07-.01-.15-.03-.22-.21-.8-.86-1.45-1.66-1.66-1.44-.38-2.75.56-2.97 1.88H2v1.5h7.91c.2.38.48.7.84.92v1.98a1.25 1.25 0 0 0 2.5 0v-1.98c.36-.22.64-.54.84-.92H22v-1.5Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M14.351 10.91c-.1.71-.52 1.31-1.1 1.67v1.98a1.25 1.25 0 0 1-2.5 0v-1.98c-.58-.36-1-.96-1.1-1.67-.02-.11-.03-.23-.03-.35 0-1.52 1.44-2.7 3.02-2.28.8.21 1.45.86 1.66 1.66.09.33.1.66.05.97ZM22.002 10.91h-7.65M9.65 10.91H2"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
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
      d="M12.001 16.559c-1.1 0-2-.9-2-2v-1.6c-.59-.49-.99-1.18-1.09-1.95-.02-.12-.04-.29-.04-.45 0-.97.44-1.87 1.22-2.47.78-.6 1.78-.79 2.74-.54 1.05.28 1.92 1.14 2.19 2.19.11.41.14.84.07 1.27a3.1 3.1 0 0 1-1.09 1.94v1.6c0 1.11-.9 2.01-2 2.01Zm-.01-7.62c-.36 0-.7.11-.99.34-.4.31-.63.78-.63 1.28 0 .07 0 .15.02.21.07.5.34.91.76 1.17l.35.22v2.4c0 .28.22.5.5.5s.5-.22.5-.5v-2.4l.35-.22c.41-.26.69-.67.75-1.14v-.02c.04-.22.03-.44-.03-.65-.14-.55-.59-.99-1.13-1.13-.15-.04-.3-.06-.45-.06Z"
      fill={color}
    ></Path>
    <Path d="M22.002 10.16h-7.65v1.5h7.65v-1.5ZM9.65 10.16H2v1.5h7.65v-1.5Z" fill={color}></Path>
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
    <G opacity=".4" stroke={color} strokeWidth={strokeWidth} strokeMiterlimit="10">
      <Path d="M14.351 10.911c-.1.71-.52 1.31-1.1 1.67v1.98a1.25 1.25 0 0 1-2.5 0v-1.98c-.58-.36-1-.96-1.1-1.67-.02-.11-.03-.23-.03-.35 0-1.52 1.44-2.7 3.02-2.28.8.21 1.45.86 1.66 1.66.09.33.1.66.05.97ZM22.002 10.91h-7.65M9.65 10.91H2"></Path>
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

const Strongbox = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Strongbox.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Strongbox.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Strongbox.displayName = 'Strongbox';
export default Strongbox;
